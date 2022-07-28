FROM node:16

WORKDIR /app
COPY . .
RUN echo "\
module.exports = {\
  database: {\
    user: 'root',\
    password: 'AjboyIan_321',\
    host: '172.17.0.1',\
    port: '3306',\
    database: 'task_manager',\
    dialect: 'mysql'\
  },\
}" >> env.js
RUN npm install

CMD ["npm", "run", "dev"]