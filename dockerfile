# Используем официальный образ Debian
FROM debian:latest

# Устанавливаем необходимые пакеты
RUN apt-get update && \
    apt-get install -y \
    curl \
    gnupg \
    apt-transport-https \
    ca-certificates \
    software-properties-common

# Устанавливаем Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Устанавливаем TypeScript и Playwright
RUN npm install -g typescript && \
    npm install -g playwright

# Устанавливаем зависимые пакеты для Playwright
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

# Устанавливаем браузеры для Playwright
RUN npx playwright install --with-deps chromium webkit

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости проекта
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Указываем команду по умолчанию
CMD ["node", "index.js"]

