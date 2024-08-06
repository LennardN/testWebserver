FROM node
RUN npm update
CMD ["node", "index.js"]
EXPOSE 8080/tcp