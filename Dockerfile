FROM node:12.14.0

RUN useradd —-user-group —-create-home —-shell /bin/false ubuntu &&\
  npm install —global npm@6.13.4

ENV HOME=/home/ubuntu

USER ubuntu
WORKDIR $HOME/doordie