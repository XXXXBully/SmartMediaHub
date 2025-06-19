import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, Stack, TextField, Divider, Alert } from '@mui/material';

const DependencyManager: React.FC = () => {
  const [deps, setDeps] = useState<{name: string, version: string}[]>([]);
  const [newDep, setNewDep] = useState('');
  const [audit, setAudit] = useState<any>(null);
  const [msg, setMsg] = useState('');

  const fetchDeps = () => {
    fetch('/api/deps/list').then(res => res.json()).then(setDeps);
  };
  useEffect(() => { fetchDeps(); }, []);

  const handleUpgrade = (name: string) => {
    fetch('/api/deps/upgrade', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name }) })
      .then(res => res.json()).then(data => { setMsg(data.message || data.error); fetchDeps(); });
  };
  const handleRemove = (name: string) => {
    fetch('/api/deps/remove', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name }) })
      .then(res => res.json()).then(data => { setMsg(data.message || data.error); fetchDeps(); });
  };
  const handleInstall = () => {
    fetch('/api/deps/install', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: newDep }) })
      .then(res => res.json()).then(data => { setMsg(data.message || data.error); setNewDep(''); fetchDeps(); });
  };
  const handleAudit = () => {
    fetch('/api/deps/audit').then(res => res.json()).then(setAudit);
  };

  return (
    <Box sx={{ maxWidth: 700, margin: '0 auto', p: 4, background: '#101c2c', borderRadius: 4, boxShadow: '0 4px 24px #0ff2' }}>
      <Typography variant="h5" sx={{ mb: 2, color: '#0ff' }}>依赖包管理</Typography>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <TextField label="安装新依赖" value={newDep} onChange={e => setNewDep(e.target.value)} size="small" sx={{ flex: 1 }} />
        <Button variant="contained" onClick={handleInstall}>安装</Button>
        <Button variant="outlined" onClick={handleAudit}>安全检测</Button>
      </Stack>
      {msg && <Alert severity="info" sx={{ mb: 2 }}>{msg}</Alert>}
      <List>
        {deps.map(dep => (
          <ListItem key={dep.name} secondaryAction={
            <Stack direction="row" spacing={1}>
              <Button size="small" variant="outlined" onClick={() => handleUpgrade(dep.name)}>升级</Button>
              <Button size="small" color="error" variant="outlined" onClick={() => handleRemove(dep.name)}>卸载</Button>
            </Stack>
          }>
            <ListItemText primary={dep.name} secondary={dep.version} />
          </ListItem>
        ))}
      </List>
      {audit && <>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" sx={{ color: '#0ff' }}>安全检测结果</Typography>
        <pre style={{ color: '#fff', background: '#222', padding: 12, borderRadius: 8, fontSize: 13, maxHeight: 300, overflow: 'auto' }}>{JSON.stringify(audit, null, 2)}</pre>
      </>}
    </Box>
  );
};

export default DependencyManager; 