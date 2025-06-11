import React, { useState } from 'react';

interface ScheduledTask {
  id: string;
  title: string;
  platforms: string[];
  scheduledTime: string;
}

const ScheduledPublish: React.FC = () => {
  const [tasks, setTasks] = useState<ScheduledTask[]>([]);
  const [title, setTitle] = useState('');
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [scheduledTime, setScheduledTime] = useState('');

  const handlePlatformChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setPlatforms([...platforms, value]);
    } else {
      setPlatforms(platforms.filter(p => p !== value));
    }
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: ScheduledTask = {
      id: Date.now().toString(),
      title,
      platforms,
      scheduledTime,
    };
    setTasks([...tasks, newTask]);
    setTitle('');
    setPlatforms([]);
    setScheduledTime('');
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>定时发布</h2>
      <form onSubmit={handleAddTask}>
        <div>
          <label>标题:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>选择平台:</label>
          <div>
            <input
              type="checkbox"
              value="头条号"
              onChange={handlePlatformChange}
            /> 头条号
            <input
              type="checkbox"
              value="微信公众号"
              onChange={handlePlatformChange}
            /> 微信公众号
            <input
              type="checkbox"
              value="抖音"
              onChange={handlePlatformChange}
            /> 抖音
            <input
              type="checkbox"
              value="哔哩哔哩"
              onChange={handlePlatformChange}
            /> 哔哩哔哩
          </div>
        </div>
        <div>
          <label>定时时间:</label>
          <input
            type="datetime-local"
            value={scheduledTime}
            onChange={(e) => setScheduledTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">添加定时任务</button>
      </form>
      <h3>定时任务列表</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.platforms.join(', ')} - {task.scheduledTime}
            <button onClick={() => handleDeleteTask(task.id)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduledPublish; 