# Build frontend app
FROM node:20-slim AS node-stage
ARG PROJECT_TYPE
RUN mkdir -p /usr/app
COPY . /usr/app
WORKDIR /usr/app
RUN npm install
RUN VITE_PROJECT_TYPE=$PROJECT_TYPE npm run build

# Create Sentry release and upload source maps
FROM getsentry/sentry-cli
ARG GIT_COMMIT
ARG SENTRY_PROJECT
ARG SENTRY_ORG
ARG SENTRY_AUTH_TOKEN
ARG SENTRY_DSN
RUN mkdir -p /usr/app
COPY --from=node-stage /usr/app/.git /usr/app/.git
COPY --from=node-stage /usr/app/src /usr/app/src
COPY --from=node-stage /usr/app/dist /usr/app/dist
WORKDIR /usr/app
RUN if [[ -n "$SENTRY_DSN" ]]; then \
	sentry-cli releases new $GIT_COMMIT && \
	sentry-cli releases set-commits $GIT_COMMIT --auto --ignore-empty && \
	sentry-cli releases files $GIT_COMMIT upload-sourcemaps --ext ts --ext js --ext map ./  && \
	sentry-cli releases finalize $GIT_COMMIT; \
	else echo "Sentry DSN not configured"; fi

FROM nginx

COPY --from=node-stage /usr/app/dist /html
COPY ./nginx.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/conf.d/default.conf

EXPOSE 8080
