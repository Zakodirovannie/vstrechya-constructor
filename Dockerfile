FROM node:22-alpine

WORKDIR /app

RUN npm install yarn

COPY . ./

RUN yarn install
RUN yarn build

CMD ["yarn", "serve"]
