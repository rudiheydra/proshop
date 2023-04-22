# base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY frontend/package*.json ./
RUN npm install

# add app
COPY frontend/ ./

# start app
CMD ["npm", "start"]
