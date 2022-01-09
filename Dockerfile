FROM node:16.13.1-buster-slim@sha256:95ac258b85c9173e1ea3948cc5ac69471342aa2562701fd75ce35acaa5ce4754 AS build
RUN mkdir /app
RUN chown -R node:node /app
USER node
WORKDIR /app
COPY --chown=node:node package*.json ./
COPY --chown=node:node tsconfig*.json ./
COPY --chown=node:node src /app/src
RUN npm ci
ENV NODE_ENV production
RUN npm run build

FROM node:16.13.1-buster-slim@sha256:95ac258b85c9173e1ea3948cc5ac69471342aa2562701fd75ce35acaa5ce4754 as core
ENV NODE_ENV production
RUN mkdir /app
RUN chown -R node:node /app
USER node
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/build ./
RUN npm ci --production

FROM gcr.io/distroless/nodejs:16@sha256:cd6d385ffb4be31e895ae6318197cf6441844876143156ee32191f3f369603dd
COPY --from=core /app /app
USER 1000
WORKDIR /app
CMD ["index.js"]
