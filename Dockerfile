FROM node:16.13.1-buster-slim@sha256:95ac258b85c9173e1ea3948cc5ac69471342aa2562701fd75ce35acaa5ce4754 AS build
RUN mkdir /app
WORKDIR /app
COPY package*.json /app
RUN npm ci --production

FROM node:16.13.1-buster-slim@sha256:95ac258b85c9173e1ea3948cc5ac69471342aa2562701fd75ce35acaa5ce4754
ENV NODE_ENV production
RUN groupadd -r auth0-hub && useradd -r -s /bin/false -g auth0-hub developer
RUN mkdir /app
COPY --from=build /app/node_modules /app/node_modules
COPY ./src /app/src
COPY ./package.json /app
RUN chown -R developer:auth0-hub /app
USER developer
WORKDIR /app
CMD npm start
