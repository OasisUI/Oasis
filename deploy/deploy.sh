#!/usr/bin/env sh

rm -rf web Oasis
mkdir web

git clone -b master https://$CI_TOKEN@github.com/oasisui-org/oasis-ui.git web

cd web

pwd

VERSION=$(node -p "require('./packages/oasis/package.json').version")

if [ -z "$VERSION" ]
then
	echo 'no version info'
	exit 1
fi

echo 'VERSION:' $VERSION

npm install || exit 1
npm run bootstrap || exit 1
npm run build || exit 1
npm run build:doc || exit 1

cd ..
git clone -b gh-pages https://$CI_TOKEN@github.com/oasisui-org/oasis-ui.git

cp -rf web/docs/* ./oasis-ui
cp icon/favicon.png ./oasis-ui
cd oasis-ui

echo 'www.oasisui.org' > CNAME

echo '\r\nstart deploying...'

git add .
git commit -m "Build $VERSION"

git push origin gh-pages
