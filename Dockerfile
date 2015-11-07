FROM mhart/alpine-node:0.12

WORKDIR /src

RUN apk --update add git && \
	mkdir app && \
    mkdir server

COPY package.json ./

COPY ./dist ./app

COPY ./server ./server

RUN npm install --production

EXPOSE  80

CMD ["node", "/src/server/app.js"]
