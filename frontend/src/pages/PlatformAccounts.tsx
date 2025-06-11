import React, { useState } from 'react';

interface PlatformAccount {
  id: string;
  platform: string;
  username: string;
}

const PlatformAccounts: React.FC = () => {
  const [accounts, setAccounts] = useState<PlatformAccount[]>([]);
  const [platform, setPlatform] = useState('');
  const [username, setUsername] = useState('');

  const handleAddAccount = (e: React.FormEvent) => {
    e.preventDefault();
    const newAccount: PlatformAccount = {
      id: Date.now().toString(),
      platform,
      username,
    };
    setAccounts([...accounts, newAccount]);
    setPlatform('');
    setUsername('');
  };

  const handleDeleteAccount = (id: string) => {
    setAccounts(accounts.filter(account => account.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>平台账号管理</h2>
      <form onSubmit={handleAddAccount}>
        <div>
          <label>平台:</label>
          <input
            type="text"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            required
          />
        </div>
        <div>
          <label>用户名:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <button type="submit">添加账号</button>
      </form>
      <h3>账号列表</h3>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>
            {account.platform} - {account.username}
            <button onClick={() => handleDeleteAccount(account.id)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformAccounts; 