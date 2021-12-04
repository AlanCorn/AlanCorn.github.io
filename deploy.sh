#!/bin/bash
cd /home/alancorn/Documents/Repository/AlanCorn.github.io

npm run build

git add --all --
git commit -m ":rocket:update"
git push origin main