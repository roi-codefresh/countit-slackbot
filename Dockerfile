FROM node:12.13.0-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

# copy app files
COPY . ./

RUN yarn install --frozen-lockfile --production && \
    yarn cache clean

RUN chgrp -R 0 /app && \
    chmod -R g+rwX /app

ENV DEBUG=slackbot:*
ENV NODE_ENV=prod


#application server
EXPOSE 80

# run application
CMD ["node", "server/index.js"]
