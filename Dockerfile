# Builder step
FROM node:20-alpine as builder

WORKDIR /app

COPY ./package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --production


FROM node:20-alpine

ENV NODE_ENV production

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "start:prod"]