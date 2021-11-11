# This is Bacic MERN stack project for managing assets

## Backend DB creation using sequelize-cli, sequelize-auto

npx sequelize-cli init

## To create model

npx sequelize-cli model:generate --name User --attributes first_name:string,last_name:string,email:string,password:string

npx sequelize-cli model:generate --name Company --attributes company_size:string,company_name:string,company_location:string,job_role:string,job_type:string,job_rating:string,job_how:string,job_where:string,job_req:text,job_skills:string,social_account:string,reg_date:string,reg_weekday:string

npx sequelize-cli model:generate --name Recruiter --attributes event_uid:string,created_time:string,start_time:string,interviewer_name:string,phone_number:string,company_name:string,role_name:string,kind_of_interview:string,extra_notes:string

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
