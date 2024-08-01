FROM node
COPY . .
CMD ["npm", "update"]
CMD ["node", "index.js"]
EXPOSE 8080