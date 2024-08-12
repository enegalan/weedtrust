FROM node:latest

WORKDIR /var/www/html

COPY ./start_container.sh /var/www/html

EXPOSE 8100

ENTRYPOINT ["sh", "/var/www/html/start_container.sh"]