#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

# 判断是否传入参数
if [ "$1" = "win" ]; then
  build_cmd="build"
else
  build_cmd="build:mac"
fi

push_addr=https://github.com/lampeggiante/leonBlog.git # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
commit_info=`git describe --all --always --long`
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=gh-pages # 推送的分支

# 生成静态文件
npm run $build_cmd

# 进入生成的文件夹
cd $dist_path
git init
git add -A
git commit -m "deploy, $commit_info"
git remote add origin $push_addr
git branch -M master
git push -f $push_addr HEAD:$push_branch
cd -
rm -rf $dist_path