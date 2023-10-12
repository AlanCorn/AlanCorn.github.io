# cd /home/alancorn/Documents/Repository/AlanCorn.github.io || exit
nvm use
yarn install
yarn build

cd dist
git init 
git branch -m static
git remote add origin https://github.com/AlanCorn/AlanCorn.github.io.git

git add *
git commit -m ":rocket: deploy"
git push origin static --force