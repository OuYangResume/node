#!/bin/sh
:<<EOF
    docker 运行脚本
    shell
    author:oouyang
EOF
# `解释器 !# 而不用在终端之前输入sh, bash.`
#!/bin/sh

##### 查看所有镜像 docker image ls
##### 查看所有容器 docker container ls -a
##### 启动已终止容器 docker container start  containerID
####   查看单个容器信息  docker inspect containerID
##### 进入容器 docker exec -it containerID bash

HOME=/Users/oouyang/Desktop/github/node
echo "输入1查看所有镜像"
echo "输入2 运行nginx"
echo "输入3 查看所有容器并选择删除"
echo "输入4 删除镜像"
echo "输入5 查看容器信息"
read -p $'\n\n请选择你要的操作:' aNum

case $aNum in
    1)  
        echo '所有镜像'
        docker image ls
        ;;
    2) 
        echo '查看所有容器'
        docker container ls -a
        read -p $'\n\n请输入您要运行的镜像：' imageName
        if [[ $imageName = 'nginx' || $imageName = 'vuenginxcontainer' ]]
        then
            read -p $'\n\n请输入映射端口：' -n 6 -t 5 -s ipCode 
            #-p 输入提示文字
            #-n 输入字符长度限制(达到6位，自动结束)
            #-t 输入限时
            #-s 隐藏输入内容
            docker run -p $ipCode:80 -d \
            --mount type=bind,source=$HOME/vueclidemo/nginx,target=/etc/nginx/conf.d \
            --mount type=bind,source=$HOME/vueclidemo/dist,target=/usr/share/nginx/html \
            $imageName
            echo -e "\n请访问localhost:$ipCode" #echo 后面是双引号
        fi
        ;;
    3)  
        echo '查看所有容器'
        docker container ls -a
        read -p $'\n\n请输入您要删除的容器：' containerName
        docker container stop $containerName
        docker container rm $containerName
        echo "\n删除 $containerName容器成功！"
        ;;
    4)  
        echo '查看所有镜像'
        docker image ls
        read -p $'\n\n请输入您要删除的镜像:' imageName
        docker image rm $imageName
        ;;
    5)
        echo '查看所有容器信息'
        docker container ls -a
        read -p $'\n\n请输入您要查看的容器名称:' containerName1
        docker inspect $containerName1
        ;;
    *)  echo '你没有输入 1 到 5 之间的数字'
    ;;
esac


