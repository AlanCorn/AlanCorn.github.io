#!/bin/bash
cd /home/alancorn/Documents/Repository/AlanCorn.github.io || exit

npm run build

git add --all --
git commit -m ":pencil:update"
git push origin main