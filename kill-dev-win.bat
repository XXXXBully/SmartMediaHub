@echo off
chcp 65001 >nul

echo 正在查找并终止前端和后端开发进程...

REM 终止Vite/React前端进程
for /f "tokens=2" %%i in ('tasklist /FI "IMAGENAME eq node.exe" /V /FO LIST ^| findstr /I "vite react-scripts"') do (
  echo 终止前端进程 PID: %%i
  taskkill /F /PID %%i
)

REM 终止nodemon/Node后端进程
for /f "tokens=2" %%i in ('tasklist /FI "IMAGENAME eq node.exe" /V /FO LIST ^| findstr /I "nodemon app.ts"') do (
  echo 终止后端进程 PID: %%i
  taskkill /F /PID %%i
)

echo 所有相关开发进程已终止。
pause 