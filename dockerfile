FROM dockette/nodejs:v18

EXPOSE 3000

WORKDIR /usr/src/app

COPY . .

RUN npm ci

CMD ["npm", "start"]
