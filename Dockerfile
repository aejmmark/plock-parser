FROM node:17.9.0

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build
RUN npm install -g serve

CMD ["serve", "build"]