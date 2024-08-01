FROM node

RUN mkdir ./webserver/
COPY [--exclude=Dockerfile] . ./webserver/

RUN npm update
CMD ["node", "./webserver/index.js"]
EXPOSE 8080/tcp