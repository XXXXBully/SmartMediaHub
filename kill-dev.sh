#!/bin/bash

echo "正在查找并终止前端和后端开发进程..."

# 杀死Vite/React前端进程
frontend_pids=$(ps aux | grep -E 'vite|react-scripts' | grep -v grep | awk '{print $2}')
if [ -n "$frontend_pids" ]; then
  echo "终止前端进程: $frontend_pids"
  kill -9 $frontend_pids
else
  echo "未找到前端进程"
fi

# 杀死nodemon/Node后端进程
backend_pids=$(ps aux | grep -E 'nodemon|node app.ts' | grep -v grep | awk '{print $2}')
if [ -n "$backend_pids" ]; then
  echo "终止后端进程: $backend_pids"
  kill -9 $backend_pids
else
  echo "未找到后端进程"
fi

echo "所有相关开发进程已终止。" 