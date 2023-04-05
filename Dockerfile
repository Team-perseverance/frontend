FROM node:alphine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alphine
COPY --from=build /app/dist/* /usr/share/nginx/html/
EXPOSE 80