FROM node:12.13-alpine

COPY . .

CMD ["node", "./dist/main.js" ]