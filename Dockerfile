FROM node:13.12.0

ENV HOME=/app
RUN mkdir /app

COPY . $HOME

WORKDIR $HOME

RUN yarn install && yarn build

EXPOSE 3333

CMD ["yarn", "start"]