<p align="center">
  <a href="https://github.com/aiseall/SmartMediaHub">
    <img src="assets/logo.jpeg" alt="Logo" width="300">
  </a>

  <br>
  <a href="https://github.com/iamgio/quarkdown/wiki"><img alt="Wiki" src="https://img.shields.io/badge/wiki-read-darkcyan"></a>
  <a href="https://quarkdown.com/docs"><img alt="Docs" src="https://img.shields.io/badge/docs-read-blue"></a>
  <a href="https://github.com/iamgio/quarkdown/releases/latest"><img alt="Release" src="https://img.shields.io/github/v/release/iamgio/quarkdown?color=mediumseagreen"></a>
  <a href="https://pinterest.github.io/ktlint"><img alt="FMT: Ktlint" src="https://img.shields.io/badge/fmt-ktlint-7f52ff?logo=kotlin&logoColor=f5f5f5"></a>
  <a href="https://www.codefactor.io/repository/github/iamgio/quarkdown"><img alt="CodeFactor" src="https://www.codefactor.io/repository/github/iamgio/quarkdown/badge/main"></a>
  <br>
  <br>
    <strong>Download</strong>
  <br>
  <a href="https://github.com/aiseall/SmartMediaHub/releases/tag/latest">Latest</a>
  &nbsp; | &nbsp;
  <strong><a href="https://github.com/aiseall/SmartMediaHubreleases/latest">Stable</a></strong>&nbsp;
  <br>
  <hr>
</p>


# 智媒通（SmartMediaHub）

![SmartMediaHub Logo](smartmedialgog.jpeg)

## 项目简介
智媒通是一个智能自媒体管理平台，支持头条号、公众号、抖音、小红书、哔哩哔哩一键发布，定时发布，阅读状态，用户活动等智能管理。平台深度集成了 DeepSeek、Qwen（通义千问）、OpenAI（GPT-3.5/4、DALL·E）、Gemini（Google Gemini）等主流大模型，支持智能生成文本、图片等多模态内容，实现一句话创作爆款自媒体文章和视频，并可一键分发到各大内容平台。

## 项目特点
- **多大模型集成**：支持 DeepSeek、Qwen、OpenAI、Gemini 等主流大模型，统一接口，灵活切换。
- **多模态内容生成**：支持文本生成、文本生成图片（AIGC）、未来可扩展文本生成音频、视频等。
- **一键多平台分发**：文章、图片、音频、视频可单独或组合一键分发到头条、抖音、公众号、视频号、小红书、哔哩哔哩等。
- **依赖管理能力**：内置依赖包管理页面，支持依赖可视化、安装、升级、卸载、安全检测（npm audit），提升开发者体验。
- **一键启动与终止脚本**：支持 Linux/MacOS（start-dev.sh、kill-dev.sh）和 Windows（start-dev-win.bat、kill-dev-win.bat）一键启动和终止前后端服务。
- **功能全面**: 提供从内容创作、一键发布、定时管理到数据统计分析的全链条自媒体运营支持。
- **智能集成**: 深度融合主流大模型，助力用户高效创作爆款内容。
- **易用性强**: 界面美观，操作流程简洁，降低自媒体运营门槛。
- **社区与支持**: 我们致力于构建活跃的开发者和用户社区，提供持续的技术支持和功能更新。
  - **即时交流**: 欢迎加入我们的社区进行技术交流和问题反馈。
  - **持续迭代**: 项目将保持活跃的开发节奏，不断完善功能和提升用户体验。
  - **开放合作**: 欢迎通过GitHub Issues和Pull Requests参与项目贡献。

## 技术栈
- 前端：React + TypeScript + Vite
- 后端：Node.js + Express + TypeScript
- 数据库：MongoDB
- 其他：JWT、bcrypt、cors、mongoose、axios

## 功能模块
1. 用户管理：注册、登录
2. 平台账号管理：添加、删除平台账号
3. 内容发布：文章和视频发布
4. 定时发布：定时任务管理
5. 数据统计：展现量、阅读量、粉丝数、收益统计
6. 数据分析：平台数据趋势分析
7. **AI内容生成**：
   - 文本生成（DeepSeek/Qwen/OpenAI/Gemini）
   - 图片生成（DeepSeek/Qwen/OpenAI）
   - 未来可扩展音频、视频生成
8. **多平台分发**：支持主流内容平台一键分发
9. **依赖管理**：
   - 依赖包可视化、安装、升级、卸载
   - 一键安全检测（npm audit）
10. **一键启动与终止脚本**：
    - Linux/MacOS：`start-dev.sh`（启动）、`kill-dev.sh`（终止）
    - Windows：`start-dev-win.bat`（启动）、`kill-dev-win.bat`（终止）

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

### 一键启动与终止
#### Linux/MacOS
```bash
./start-dev.sh   # 启动前后端
./kill-dev.sh    # 终止前后端
```
#### Windows
```
start-dev-win.bat   # 启动前后端
kill-dev-win.bat    # 终止前后端
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
- **AI内容生成**：
  - DeepSeek：POST /api/deepseek/text, /api/deepseek/image
  - Qwen：POST /api/qwen/text, /api/qwen/image
  - OpenAI：POST /api/openai/text, /api/openai/image
  - Gemini：POST /api/gemini/text
- **依赖管理**：
  - 获取依赖列表：GET /api/deps/list
  - 安装依赖：POST /api/deps/install
  - 升级依赖：POST /api/deps/upgrade
  - 卸载依赖：POST /api/deps/remove
  - 依赖安全检测：GET /api/deps/audit

## 贡献
欢迎提交Issue和Pull Request。

## 许可证
MIT 

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=aiseall/SmartMediaHub&type=Date)](https://www.star-history.com/#aiseall/SmartMediaHub&Date)
