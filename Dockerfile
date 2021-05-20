FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf

COPY ./upstream.conf /etc/nginx/conf.d/upstream.conf

COPY ./strapi.conf /etc/nginx/sites-available/strapi.conf

COPY ./strapi.conf /etc/nginx/sites-enabled/strapi.conf

EXPOSE 80

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
