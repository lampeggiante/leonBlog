set -e

commit_info=`git describe --all --always --long`

git add -A
git commit -m "deploy, $commit_info"
git push
