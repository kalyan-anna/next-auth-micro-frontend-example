# Next-Auth Micro-Frontend Example
This is an attempt to implement server-side authentication using [Next-Auth](https://authjs.dev/) in a micro-frontend architecture.

## Start the application

create a new file `.env.local` in the root folder and copy all the values from `.env.local.example`.

**console 1**  
Prepare the env  

Update the [seed.ts](libs/properties-prisma-client/prisma/seed/seed.ts) file with your email and run the following command

```
nvm use
npm install
nx run properties-prisma-client:generate-types
nx run properties-prisma-client:seed
```

**console 2**  
Start the Frontend apps
```
nvm use
npx nx run-many -t dev --parallel=5
```

**console 3**  
Start the Backend apps

```
nvm use
npx nx run-many -t serve
```

Access the app in `http://localhost:8080`

## Description
The following setup is used

Three Frontend Apps
- Home
- Account
- Est

Two Backend Apis
- Account-api
- Est-api

`auth` server will receive the tokens from the authorization server callback.
