# Authentication & Role-Based Access Control (RBAC)
- This was build out of my nestjs starter repository template. You can find the original repository [here](https://github.com/ezehlivinus/nest-starter). I updated it because of this repo, check the recent commits for the changes I made.

## Description
- This is a simple authentication and role-based access control (RBAC) system built with NestJS, MongoDB, and Docker.
- Before going through the setup this is how can test the application
  - Create a user
  - Login with the user
  - Use the `accessToken` to access the other endpoints
  - Depending on the role you used to create the user, you can access the endpoints that are restricted to that role

- To test this app when running on the browser on swagger, you can use the following steps:
 - create @ `/api/v1/users` a `POST` request with the following body
 - login with the email and password you used to create the user @ `/api/v1/auth/login` a `POST` request with the following body
 - copy `accessToken` from the response and use it as the `Bearer Token` in the swagger UI by
    - clicking on the `Authorize` button on the top right corner of the swagger UI
    - paste the `accessToken` in the `Value` field and click `Authorize` and then `Close`
    - you can now test the other endpoints
 - Tyr to access the following endpoints
    - `/api/v1/users/only-admin` - only admin can access this endpoint
    - `/api/v1/users/only-shipper` - only shipper can access this endpoint
    - ...and the rest of the endpoints, that as padlock icon on the right side of the endpoint
    - Depending on the role you used to create the user, you can access the endpoints that are restricted to that role


## Toolings
- <a href="https://docs.docker.com/compose/" target="_blank">Docker</a> version 27.2.1, build 100c701
- <a href="https://docs.docker.com/compose/" target="_blank">Docker Compose</a> version v2.29.2 
- <a href="http://nodejs.org" target="_blank">Node.js</a> version 22
- <a href="https://docs.nestjs.com/" target="_blank">NestJS </a> ~ `'cli -- common -- core'` version 9.x.x
- <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> version ^4.9.5 
- <a href="https://yarnpkg.com/getting-started/install" target="_blank">Yarn </a> version 1.22.19
- <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank">ESLint VsCode Extension</a> <sup><small> for development </small></sup>

- <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">Prettier</a><sup><small> for development </small></sup>

## Environment Variables
 - Create and set up a `.env` file using the sample in the `.env.example` file.
```bash
# Your database details might look like this
DATABASE_URL=mongodb://your_username:your_password@mongodb:27017/your_db?authSource=admin
MONGO_USERNAME=your_username
MONGO_PASSWORD=your_password
```
## Installation - without docker

```bash
# install dependencies
$ yarn install
```

### Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Installation - with docker
Install and set up `docker` according to your OS requirements
### Running the app
You can use all the original docker commands but these few scripts are available for use.

```bash
# development - start a docker in undetached mode - we might not be able to watch file changes
$ yarn run docker:dev:up

# production - start a docker in undetached mode
$ yarn run docker:prod:up

# stop the running container
$ yarn run docker:down

# Remove dev container
$ yarn run docker:dev:rm

# Remove prod container
$ yarn run docker:prod:rm

# Restart dev container
$ docker:dev:restart

# Restart production container
$ docker:prod:restart

# At some point you might want to delete and rebuilt the image
$ docker image rm <image-id or repository-name>
```

## API Documentation
- The API documentation is available at `http://<yourhost>:<your-port>/docs` when the application is running.
  - For example, `http://localhost:3000/docs`
  - If you used default configurations, the port is `9092`
  - In local environment, the docs will be available at `http://localhost:9092/docs`
- The API documentation is generated using `Swagger` and `OpenAPI` standards.

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
# Application Code Documentation
[app-code-docs](app-docs.md)

# Viewing your Database
- You can view your database data using the `MongoDB Compass` or any other database viewer of your choice like `Robo 3T` or `Studio 3T`.
## For local Studio 3T or other MongoDb GUI connection to your dockerized MongoDB, use:
```bash
# Connection String - use this in the connection string field
mongodb://your_username:your_password@localhost:27017/?authSource=admin
```
## For your NestJS application inside Docker container, use:
```bash
# Connection String - use this in the env file
mongodb://your_username:your_password@mongodb:27017/?authSource=admin
```