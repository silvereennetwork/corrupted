FROM scratch
WORKDIR ./
RUN npm install
EXPOSE 7000
RUN npm run build
EXPOSE 3000
RUN node build
#CMD [ "node", "./build/index.js" ]
