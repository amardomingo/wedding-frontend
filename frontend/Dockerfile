FROM node:21 AS builder
WORKDIR /react
COPY package.json package.json
COPY vite.config.js vite.config.js
COPY public/ public/
COPY src/ src/
COPY index.html index.html
RUN npm install && npm run build
FROM nginx:1.27
COPY build/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /react/dist /usr/share/nginx/html
