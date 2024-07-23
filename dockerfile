FROM debian:latest
RUN apt-get update && \
    apt-get install -y \
    curl \
    gnupg \
    apt-transport-https \
    ca-certificates \
    software-properties-common

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

RUN npm install -g typescript && \
    npm install -g playwright

RUN apt-get update && \
    apt-get install -y \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libxcomposite1 \
    libxrandr2 \
    libgbm1 \
    libpango1.0-0 \
    libxdamage1 \
    libxkbcommon0 \
    libgtk-3-0 \
    libasound2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libglu1-mesa

RUN npx playwright install --with-deps chromium webkit

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]

