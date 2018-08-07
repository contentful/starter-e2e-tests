#!/bin/sh

echo "\nPreparing config for starter-gatsby-blog"
echo '{
  "spaceId": "k8uv0ye3wclt",
  "accessToken": "b670cd14de3cca80eb98c6e729ed94bf8a237a26b4fc0b976de71ce4f96ed043"
}
' > .contentful.json

echo "\nBuilding starter-gatsby-blog"
npm run build
