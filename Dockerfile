FROM node:20-bookworm-slim

# Set environment variables
ENV NODE_ENV=development
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_VERSION="23.3.0"

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
  ca-certificates \
  git \
  openssh-client \
  && rm -rf /var/lib/apt/lists/* \
  && npm install -g npm@${NPM_VERSION} \
  && apt-get clean


# Change ownership of the app directory to node user
RUN chown -R node:node /app

# Switch to node user before installing dependencies
USER node

# Copy package files with correct ownership
COPY --chown=node:node package*.json ./

# Install dependencies
RUN npm install && \
  npm cache clean --force && \
  npx next telemetry disable

# Copy the rest of the application with correct ownership
COPY --chown=node:node . .

# Create .next directory with proper permissions
RUN mkdir -p .next

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]