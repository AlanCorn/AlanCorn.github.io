#!/bin/bash

npm run build

cd ./public

git add --all --

git commit -m "update"

git push origin main