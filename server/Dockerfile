FROM node:10


ARG PORT=3000
ENV PORT $PORT
#Create app directory inside the container
WORKDIR /usr/src/app
#Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./

RUN npm install
#Bundle server source
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]