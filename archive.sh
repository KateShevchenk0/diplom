rm -rf ./.git
rm latest.zip
git init
git add --all
git config user.name example
git config user.email example@example.com
git commit -m init
git archive --format=zip -o latest.zip HEAD
