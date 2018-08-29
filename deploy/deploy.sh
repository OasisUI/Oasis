#!/usr/bin/env sh

rm -rf web Oasis
mkdir web

git clone -b master https://$CI_TOKEN@github.com/OasisUI/Oasis.git web

cd web

pwd

VERSION=$(node -p "require('./packages/oasis/package.json').version")

if [ -z "$VERSION" ]
then
	echo 'no version info'
	exit 1
fi

echo 'VERSION:' $VERSION

npm install
npm run bootstrap
npm run test:unit
npm run build
npm run build:doc

cd ..
git clone -b gh-pages https://$CI_TOKEN@github.com/OasisUI/Oasis.git

cp -rf web/docs/* ./Oasis
cd Oasis

echo 'www.oasisui.org' > CNAME

echo '\r\nstart deploying...'

git add .
git commit -m "Build $VERSION"

# git push origin gh-pages
