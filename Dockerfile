FROM node:18
WORKDIR ./
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
#RUN node build
CMD [ "node", "./build/index.js" ]
