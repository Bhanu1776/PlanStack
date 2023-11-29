# Learnings from this project

- Route groups in nextjs
- Excluding file from routing
- md:max-w-screen-2xl property use case for large desktop screens
- How to setup metadata for SEO using siteConfig
- Catch all segments in nextjs - [[...sign-up]]
- zustand
- How can we use skeleton effectively

## Setting up database

- Install prisma as a devDependency ==> ```pnpm i -D prisma```
- ```pnpx prisma init``` ==> This will setup prisma
- After that setup PlanetScale -> signup, create new database,
- Once database is created, Copy the database url and paste in your .env folder
- And overwrite schema.prisma content from planetScale into your local schema.prisma
- Now create one model of your own
  - Whenever you create or modify your model don't forget to do:
    1. ```pnpx prisma generate```  --> This will create types, functions for your new model
    2. ```pnpx prisma db push``` --> After this make sure you restart your application
- ```pnpm i @prisma/client``` --> To use prisma on your app
