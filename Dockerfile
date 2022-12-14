FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
#EXPOSE: 80818
CMD ["npm","start"]