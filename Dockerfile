FROM node:23.3.0-bookworm-slim
ENV NODE_ENV development
WORKDIR /app

ENV NODE_VERSION 23.3.0

EXPOSE 3000

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
  ca-certificates \
  git \
  openssh-client \
  && rm -rf /var/lib/apt/lists/*

COPY package*.json ./

RUN npm install -g npm@${NPM_VERSION} \
  && ln -s /app/node_modules/.bin/next /usr/local/bin/next && \
  npm install && npm cache clean --force && \
  npx next telemetry disable 

# Copy package files with correct ownership
COPY --chown=node:node package*.json ./

# Set ownership of the working directory
RUN chown -R node:node /app
USER node

# Copy the rest of the application with correct ownership
COPY --chown=node:node . .

CMD ["npm", "run", "dev"]