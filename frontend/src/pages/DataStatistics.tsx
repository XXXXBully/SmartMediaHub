import React, { useState, useEffect } from 'react';

interface PlatformStats {
  platform: string;
  views: number;
  reads: number;
  fans: number;
  earnings: number;
}

const DataStatistics: React.FC = () => {
  const [stats, setStats] = useState<PlatformStats[]>([]);

  useEffect(() => {
    // 模拟数据，实际项目中应从后端API获取
    const mockData: PlatformStats[] = [
      { platform: '头条号', views: 1000, reads: 500, fans: 200, earnings: 100 },
      { platform: '微信公众号', views: 800, reads: 400, fans: 150, earnings: 80 },
      { platform: '抖音', views: 2000, reads: 1000, fans: 300, earnings: 200 },
      { platform: '哔哩哔哩', views: 1500, reads: 750, fans: 250, earnings: 150 },
    ];
    setStats(mockData);
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h2>数据统计</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>平台</th>
            <th>展现量</th>
            <th>阅读量</th>
            <th>粉丝数</th>
            <th>收益</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(stat => (
            <tr key={stat.platform}>
              <td>{stat.platform}</td>
              <td>{stat.views}</td>
              <td>{stat.reads}</td>
              <td>{stat.fans}</td>
              <td>{stat.earnings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataStatistics; 