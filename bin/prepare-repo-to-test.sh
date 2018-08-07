#!/bin/sh

# Set default values
TEST_BRANCH=${TEST_BRANCH:-"master"}
TEST_CMD_INSTALL=${TEST_CMD_INSTALL:-"npm i"}
TEST_CMD_BUILD=${TEST_CMD_BUILD:-"npm run build"}

echo ""
echo "Starting to prepare target repository:"
echo ""
echo "Repo: $TEST_REPO"
echo "Branch: $TEST_BRANCH"
echo "Install command: $TEST_CMD_INSTALL"
echo "Build command: $TEST_CMD_BUILD"

echo "\nCloning $TEST_REPO:"
rm -rf target
git clone --single-branch -b $TEST_BRANCH https://github.com/$TEST_REPO target
cd target

echo "\nInstalling $TEST_REPO:"
eval $TEST_CMD_INSTALL

# Some details about the installation
echo "\nInstalled dependencies:"
npm list --depth=0

echo "\nBuilding $TEST_REPO:"
eval $TEST_CMD_BUILD

echo "\nDirectory sizes:"
du -sh node_modules
du -sh .
