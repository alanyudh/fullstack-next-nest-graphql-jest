# fullstack-next-nest-graphql-jest

A simple book gallery website to demonstrate monorepo of full stack nodejs using :

- NextJS
- NestJS
- GraphQL
- Jest
- Typescript
- MongoDB
- Antd
- Lerna

## Packages

This project is made up of 3 packages that share code using Yarn Workspaces.

- web (React NextJS website)
- server (NestJS GraphQL server)
- common (code shared between web and server)

## Installation

1. Clone project

```
git clone https://github.com/alanyudh/fullstack-next-nest-graphql-jest.git
```

2. Go into folder

```
cd fullstack-next-nest-graphql-jest
```

3. Download dependencies

```
yarn
```

4. Start your MongoDB server
5. Create database called `fullstack-books`
6. Import the sample data on `data-mocks.csv`
7. In `packages/server`, copy the `.env.example` to `env` and update the mongodb variables to match your configuration
8. Run `yarn build`

## Usage

### Start

```
# run web & server
yarn start

# run web only
cd packages/web
yarn start

# run server only
cd packages/server
yarn start
```

- to run on development mode, replace `yarn start` to `yarn start:dev`

### Test

To perform jest test :

```
# test web & server
yarn test

# test web only
cd packages/web
yarn test

# test server only
cd packages/server
yarn test
```

- to run coverage test, replace `yarn test` to `yarn test:cov`
- to run both lint, type-check, and jest test, replace `yarn test` to `yarn test-all`
