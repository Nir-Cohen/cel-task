FROM node:14-alpine


ARG NODE_ENV=development

WORKDIR /usr/src/app
COPY . .
#COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./src"]
RUN npm install --${NODE_ENV}
RUN npm run build:production
#COPY . .

RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]

EXPOSE 3005