FROM node:14.20-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN npm i && npm run build

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/hms /usr/share/nginx/html

