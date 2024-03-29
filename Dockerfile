FROM node:20
WORKDIR /code
COPY package*.json /code
RUN npm install
COPY . /code
EXPOSE 3000
CMD npm run dev
