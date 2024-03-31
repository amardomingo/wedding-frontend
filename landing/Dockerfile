FROM node:21 as builder
WORKDIR /react
COPY package.json package.json
COPY public/ public/
COPY src/ src/
RUN npm install &&  npm run build
FROM nginx
COPY --from=builder /react/build /usr/share/nginx/html
