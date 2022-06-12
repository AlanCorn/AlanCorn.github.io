#!/bin/bash
cd /home/alancorn/Documents/Repository/AlanCorn.github.io || exit

npm run build

git add docs
git commit -m ":rocket: deploy"
git push origin main