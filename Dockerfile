FROM node:18.15.0-bullseye
ENV NODE_ENV development
ENV NPM_VERSION 9.6.1

EXPOSE 3000

WORKDIR /home/nextjs/app

COPY package*.json ./

RUN apt update && apt -y install --no-install-recommends ca-certificates git git-lfs openssh-client curl jq cmake sqlite3 openssl psmisc python3
RUN apt-get clean autoclean && apt-get autoremove --yes && rm -rf /var/lib/{apt,dpkg,cache,log}

RUN npm install -g npm@${NPM_VERSION} \
  npm install && npm cache clean --force 
RUN npx next telemetry disable

RUN chown -R node:node .
USER node

COPY . .

ENTRYPOINT [ "node" ]