FROM node:21.7.1

# Установка необходимых дополнительных пакетов
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       software-properties-common \
       tar \
       unzip \
       rsync \
       wget \
       curl \
    && rm -rf /var/lib/apt/lists/*

# Установка рабочей директории
WORKDIR /app

# Установка Playwright и его зависимостей локально внутри проекта
RUN npm install playwright@1.42.1

# Запуск команды по умолчанию
CMD ["npm", "ci"]
