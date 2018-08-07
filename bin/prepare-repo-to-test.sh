#!/bin/sh

TEST_REPO=${TEST_REPO:-"contentful/starter-gatsby-blog"}
TEST_BRANCH=${TEST_BRANCH:-"master"}
TEST_CMD_INSTALL=${TEST_CMD_INSTALL:-"npm i"}
TEST_CMD_BUILD=${TEST_CMD_BUILD:-"sh ../tests/starter-gatsby-blog/build-repo.sh"}

echo ""
echo "Starting to prepare target repository:"
echo ""
echo "Repo: $TEST_REPO"
echo "Branch: $TEST_BRANCH"
echo "Install command: $TEST_CMD_INSTALL"
echo "Build command: $TEST_CMD_BUILD"

if [ -d "target" ]
then
  echo "\nUpdating existing $TEST_REPO:"
  cd target
  git fetch
  git checkout .
  git checkout $TEST_BRANCH
  git pull
else
  echo "\nCloning $TEST_REPO:"
  git clone --single-branch -b $TEST_BRANCH https://github.com/$TEST_REPO target
  cd target
fi

echo "\nInstalling $TEST_REPO:"
# eval $TEST_CMD_INSTALL

echo "\nBuilding $TEST_REPO:"
eval $TEST_CMD_BUILD
