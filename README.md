# 智媒通（SmartMediaHub）

## 项目简介
智媒通是一个智能自媒体管理平台，支持头条号、公众号、抖音、小红书、哔哩哔哩一键发布，定时发布，阅读状态，用户活动等智能管理，集成DeepSeek、Qwen3、O3、Gemini2.0、Claude 4等主流大模型，实现一句话创作爆款自媒体文章和视频。

## 技术栈
- 前端：React + TypeScript + Vite
- 后端：Node.js + Express + TypeScript
- 数据库：MongoDB
- 其他：JWT、bcrypt、cors、mongoose

## 功能模块
1. 用户管理：注册、登录
2. 平台账号管理：添加、删除平台账号
3. 内容发布：文章和视频发布
4. 定时发布：定时任务管理
5. 数据统计：展现量、阅读量、粉丝数、收益统计
6. 数据分析：平台数据趋势分析

## 安装与运行
### 前端
```bash
cd frontend
npm install
npm run dev
```

### 后端
```bash
cd backend
npm install
npm run dev
```

## API文档
- 用户注册：POST /api/users/register
- 用户登录：POST /api/users/login
- 添加平台账号：POST /api/platform-accounts
- 删除平台账号：DELETE /api/platform-accounts/:id
- 添加内容：POST /api/contents
- 删除内容：DELETE /api/contents/:id
- 添加定时任务：POST /api/scheduled-publish
- 删除定时任务：DELETE /api/scheduled-publish/:id
- 获取数据统计：GET /api/statistics/:userId
- 更新数据统计：POST /api/statistics
- 获取数据趋势：GET /api/analytics/trends

## 贡献
欢迎提交Issue和Pull Request。

## 许可证
MIT 