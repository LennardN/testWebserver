FROM node
RUN npm install
CMD ["node", "index.js"]
EXPOSE 8080/tcp