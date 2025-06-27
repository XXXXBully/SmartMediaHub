#!/bin/bash

# 启动前端
cd frontend
if [ ! -d "node_modules" ]; then
  echo "[前端] 安装依赖..."
  npm install
fi
nohup npm run dev > ../frontend.log 2>&1 &
cd ..

# 启动后端
cd backend
if [ ! -d "node_modules" ]; then
  echo "[后端] 安装依赖..."
  npm install
fi
if ! command -v nodemon &> /dev/null; then
  echo "[后端] 安装 nodemon..."
  npm install -g nodemon
fi
nohup npx nodemon app.ts > ../backend.log 2>&1 &
cd ..

echo "前端: http://localhost:5173"
echo "后端: http://localhost:3001"
echo "日志: frontend.log, backend.log" 