#基于 node:latest 镜像而构建的
FROM node
#指定工作目录
WORKDIR /usr/src/app
#COPY 指令将从构建上下文目录中 <源路径> 的文件/目录复制到新的一层的镜像内的 <目标路径> 位置。
COPY package*.json ./
#安装依赖
RUN npm install
#将所有文件copy到工作目录
COPY . .
#声明运行时容器提供服务端口
EXPOSE 8082
#指定默认的容器主进程的启动命令
CMD [ "npm", "start" ]
