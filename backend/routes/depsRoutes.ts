import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const router = Router();
const pkgPath = path.resolve(__dirname, '../../package.json');

// 获取依赖列表
router.get('/list', (req, res) => {
  fs.readFile(pkgPath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    const pkg = JSON.parse(data);
    const deps = Object.entries(pkg.dependencies || {}).map(([name, version]) => ({ name, version }));
    res.json(deps);
  });
});

// 升级依赖
router.post('/upgrade', (req, res) => {
  const { name } = req.body;
  exec(`npm install ${name}@latest`, { cwd: path.resolve(__dirname, '../../') }, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: stderr });
    res.json({ message: stdout });
  });
});

// 安装依赖
router.post('/install', (req, res) => {
  const { name } = req.body;
  exec(`npm install ${name}`, { cwd: path.resolve(__dirname, '../../') }, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: stderr });
    res.json({ message: stdout });
  });
});

// 卸载依赖
router.post('/remove', (req, res) => {
  const { name } = req.body;
  exec(`npm uninstall ${name}`, { cwd: path.resolve(__dirname, '../../') }, (err, stdout, stderr) => {
    if (err) return res.status(500).json({ error: stderr });
    res.json({ message: stdout });
  });
});

// 依赖安全检测
router.get('/audit', (req, res) => {
  exec('npm audit --json', { cwd: path.resolve(__dirname, '../../') }, (err, stdout, stderr) => {
    if (err && !stdout) return res.status(500).json({ error: stderr });
    res.json(JSON.parse(stdout));
  });
});

export default router; 