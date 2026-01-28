FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
<<<<<<< HEAD
RUN npm install
COPY . .
EXPOSE 3000

CMD ["node", "server.js"]
=======
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
>>>>>>> e54552b0155dd60a87b974303e632de509b74548
