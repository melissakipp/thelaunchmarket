FROM node:18.15.0-bullseye
ENV NODE_ENV development
ENV NPM_VERSION 9.6.1

EXPOSE 3000

WORKDIR /home/nextjs/app

COPY package*.json ./

RUN npm install -g npm@${NPM_VERSION} \
  npm install && npm cache clean --force 

RUN chown -R node:node .
USER node

COPY . .

CMD ["node"]