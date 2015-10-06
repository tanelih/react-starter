FROM ubuntu

RUN \
  # for some reason curl isn't included
  sudo apt-get install -y curl && \

  # we want the latest NodeJS installed
  curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash - && \
  sudo apt-get install -y nodejs

WORKDIR   /app
ADD     . /app

EXPOSE 8080

RUN npm install
RUN npm run build

CMD ["npm", "start"]
