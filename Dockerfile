FROM node:12.14.0

RUN sudo useradd --user-group --create-home --shell /bin/false ubuntu &&\
  npm install --global npm@6.13.4

ENV HOME=/home/ubuntu

COPY package.json $HOME/doordie/
RUN chown -R ubuntu:ubuntu $HOME/*

USER ubuntu
WORKDIR $HOME/doordie
RUN npm install