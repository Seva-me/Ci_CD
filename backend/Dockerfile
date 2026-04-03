FROM node:18

WORKDIR /app

COPY backend/package*.json ./
RUN npm ci --omit=dev

COPY backend/ .

EXPOSE 5000

CMD ["node", "index.js"]