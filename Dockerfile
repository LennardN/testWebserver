FROM node
COPY . .
RUN npm update
CMD ["node", "index.js"]
EXPOSE 8080