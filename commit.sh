set -e

commit_info=`git describe --all --always --long`

git add -A
git commit -m "feat: $commit_info"
git push
