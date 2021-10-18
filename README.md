# This is Bacic MERN stack project for managing assets

## Backend DB creation using sequelize-cli, sequelize-auto

npx sequelize-cli init

## To create model

npx sequelize-cli model:generate --name User --attributes first_name:string,last_name:string,email:string,password:string

## Run migrate

npx sequelize-cli db:migrate

## Undo migrate

npx sequelize-cli db:migrate:undo

npx sequelize-cli db:migrate:undo:all

## Create seed

npx sequelize-cli seed:generate --name demo-user

## Running seed

npx sequelize-cli db:seed:all

## Undo Seed

npx sequelize-cli db:seed:undo

npx sequelize-cli db:seed:undo:all
