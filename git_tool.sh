
# 获取当前分支 =======
branch=$(git symbolic-ref --short HEAD)

# 拉去当前分支最新代码 =======
git pull origin "$branch"
echo -e "\n\n项目当前的分支为:   $branch"

read -p $'\n\n请确认分支，是否继续操作？y or n: ' isContinue
if [ "$isContinue" != 'y' ];then 
    exit
fi



# git提交 =======
git add .
read -p $'\n\n请输入您的commit信息： ' commitInfo
git commit -m ${commitInfo}
git push origin ${branch}