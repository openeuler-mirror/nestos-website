FROM openeuler/openeuler:22.03-lts as Builder

MAINTAINER duyiwei<duyiwei@kylinos.cn>

RUN mkdir -p /home/openeuler/web
WORKDIR /home/openeuler/web
COPY view /home/openeuler/web
RUN curl https://nodejs.org/dist/v16.4.0/node-v16.4.0-linux-x64.tar.gz -o node-v16.4.0-linux-x64.tar.gz && \
    tar -xvf node-v16.4.0-linux-x64.tar.gz && \
    ln -s /home/openeuler/web/node-v16.4.0-linux-x64/bin/node /usr/local/bin/node && \
    ln -s /home/openeuler/web/node-v16.4.0-linux-x64/bin/npm /usr/local/bin/npm && \
    npm install -g npm@8.19.2 && \
    npm install && \
    npm run build


FROM openeuler/openeuler:22.03-lts

MAINTAINER duyiwei<duyiwei@kylinos.cn>

RUN yum install nginx -y && yum clean all
COPY --from=Builder /home/openeuler/web/dist/ /usr/share/nginx/html/
RUN chmod -R 777 /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]

