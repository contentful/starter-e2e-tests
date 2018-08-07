# Contentful Starter Projects E2E Tests

This repository contains [cypress.io](https://www.cypress.io/) for Contentful Starter Projects.

## Clone and install test target repository

```sh
TEST_REPO="contentful/starter-foo" TEST_BRANCH="master" TEST_CMD_INSTALL="npm i" TEST_CMD_BUILD="npm run build" ./bin/prepare-repo-to-test.sh
```

* Default branch: `master`
* Default install cmd: `npm i`
* Default build cmd: `npm run build`

## Run test
```sh
CYPRESS_BASE_URL="http://localhost:8080" CYPRESS_INTEGRATION_FOLDER="tests/starter-gatsby-blog/integration" npm run test
```

## Run test dev environment
```sh
CYPRESS_BASE_URL="http://localhost:8080" CYPRESS_INTEGRATION_FOLDER="tests/starter-gatsby-blog/integration" npm run test:dev
```
