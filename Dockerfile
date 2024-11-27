FROM node:23.3.0-bookworm
ENV NODE_ENV development
WORKDIR /app

ENV NODE_VERSION 23.3.0

EXPOSE 3000

WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -y --no-install-recommends \
  ca-certificates \
  git \
  openssh-client \
  && rm -rf /var/lib/apt/lists/*

RUN npm install -g npm@${NPM_VERSION} \
  npm install && npm cache clean --force && \
  npx next telemetry disable \
  # smoke tests
  && node --version \
  && npm --version

RUN chown -R node:node .
USER node
COPY . .

# Start the application
CMD ["npm", "run", "dev"]