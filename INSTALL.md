# 智媒通（SmartMediaHub） 安装部署与开发说明

## 一、环境准备

1. **Node.js**：建议版本 >= 18.x
2. **npm**：随 Node.js 一起安装
3. **MongoDB**：建议本地或云端 MongoDB 服务
4. **Git**（可选）：用于代码管理

## 二、项目结构
```
SmartMediaHub/
├── backend/      # Node.js + Express 后端
├── frontend/     # React + Vite 前端
├── README.md     # 项目说明
├── INSTALL.md    # 安装部署与开发说明
└── ...
```

## 三、后端安装与启动

1. 进入后端目录：
   ```bash
   cd backend
   ```
2. 安装依赖：
   ```bash
   npm install
   ```
3. 配置环境变量（可选）：
   - 新建 `.env` 文件，配置如下内容：
     ```env
     PORT=3001
     MONGODB_URI=mongodb://localhost:27017/smartmediahub
     JWT_SECRET=your_jwt_secret
     ```
4. 启动后端服务：
   ```bash
   npm run dev
   ```
   默认服务地址为：http://localhost:3001

## 四、前端安装与启动

1. 进入前端目录：
   ```bash
   cd frontend
   ```
2. 安装依赖：
   ```bash
   npm install
   ```
3. 启动前端开发服务器：
   ```bash
   npm run dev
   ```
   默认访问地址为：http://localhost:5173

## 五、开发调试

- 前端代码修改后自动热更新。
- 后端建议使用 nodemon 实现自动重启（已在 dev 脚本中配置）。
- 前后端接口联调时，注意跨域（CORS）配置。
- 推荐使用 Postman 或 Apifox 测试后端 API。

## 六、常见问题

1. **端口冲突**：如 3001 或 5173 被占用，请修改 `.env` 或 `package.json` 中的端口配置。
2. **MongoDB 连接失败**：请确保 MongoDB 服务已启动，且连接字符串正确。
3. **依赖安装慢/失败**：可尝试更换 npm 源，如 `npm config set registry https://registry.npmmirror.com`。
4. **前后端接口不通**：检查后端服务是否正常启动，前端请求地址是否正确。

## 七、生产部署建议

- 后端可使用 pm2、Docker、云服务器等方式部署。
- 前端可使用 Vercel、Netlify、阿里云OSS、腾讯云静态托管等。
- 数据库建议使用云 MongoDB 服务，保障数据安全与高可用。

## 八、联系方式与支持

如有问题或建议，欢迎通过 GitHub Issue 反馈，或加入社区交流群。 