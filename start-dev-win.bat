@echo off
chcp 65001 >nul

REM 启动前端
cd frontend
if not exist node_modules (
  echo [前端] 安装依赖...
  npm install
)
start cmd /k "npm run dev"
cd ..

REM 启动后端
cd backend
if not exist node_modules (
  echo [后端] 安装依赖...
  npm install
)
where nodemon >nul 2>nul
if %errorlevel% neq 0 (
  echo [后端] 安装 nodemon...
  npm install -g nodemon
)
start cmd /k "npx nodemon app.ts"
cd ..

echo 前端: http://localhost:5173
echo 后端: http://localhost:3001
echo 请在新打开的命令行窗口查看日志
pause 