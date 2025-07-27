# git 使用指南

git 是一个版本管理工具，使用命令行完成代码协作的相关功能。

## 初始化项目

```sh
git init
git add .
git commit -m "first commit"
git branch -M main
```

## 查看配置

```sh
# 查看配置的用户名和邮箱
git config user.name
git config user.email

# 查看全局配置
git config --global user.name
git config --global user.email
```

## 修改配置

```sh
git config --global user.name "your_name"
git config --global user.email "your_email"
```
