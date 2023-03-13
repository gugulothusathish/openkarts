FROM node:latest

RUN mkdir -p /app

WORKDIR /app

RUN npm install -g @angular/cli

COPY package.json /app

RUN npm install

COPY . /app

RUN pwd

RUN ls

CMD ["ng", "serve", "--host", "0.0.0.0"]
