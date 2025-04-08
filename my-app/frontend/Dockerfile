FROM node:20 AS build-stage
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.20.1
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
