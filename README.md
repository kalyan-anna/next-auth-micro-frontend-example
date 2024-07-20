# Next-Auth Micro-Frontend Example

## Start the application

create a new file `.env.local` in the root folder and copy all the values from `.env.local.example`.

**console 1**
Start the Frontend apps
```
nvm use
npx nx run-many -t dev
```

**console 2**
Update the [seed.ts](libs/properties-prisma-client/prisma/seed/seed.ts) file with your email and run the following command

```
nvm use
nx run properties-prisma-client:seed
```

Start the Backend apps

```
nvm use
npx nx run-many -t serve
```

Access the app in `http://localhost:8080/`
