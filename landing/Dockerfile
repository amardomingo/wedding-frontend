FROM node:21 AS builder
WORKDIR /react
COPY package.json package.json
COPY public/ public/
COPY src/ src/
RUN npm install &&  npm run build
FROM nginx:1.27
COPY --from=builder /react/build /usr/share/nginx/html
