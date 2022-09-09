FROM  node:16.14.0 as Builder

MAINTAINER duyiwei<duyiwei@kylinos.cn>

RUN mkdir -p /home/openeuler/web
WORKDIR /home/openeuler/web
COPY view /home/openeuler/web

RUN yarn install && yarn run build

FROM nginx:1.20.0

COPY --from=Builder /home/openeuler/web/dist /usr/share/nginx/html/
RUN chmod -R 755 /usr/share/nginx/html

