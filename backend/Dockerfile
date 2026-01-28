FROM node:20-alpine
WORKDIR /app
# ก๊อปปี้ไฟล์จากโฟลเดอร์ backend เข้ามาที่ /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# รัน server.js ที่อยู่ที่ root ของ /app
CMD ["node", "server.js"]