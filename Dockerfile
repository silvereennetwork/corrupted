FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 7000
RUN npm run build
EXPOSE 3000
RUN node build
#CMD [ "node", "./build/index.js" ]
