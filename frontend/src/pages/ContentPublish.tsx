import React, { useState } from 'react';

interface ContentForm {
  title: string;
  content: string;
  platforms: string[];
  file?: File;
}

const ContentPublish: React.FC = () => {
  const [form, setForm] = useState<ContentForm>({
    title: '',
    content: '',
    platforms: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePlatformChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setForm({ ...form, platforms: [...form.platforms, value] });
    } else {
      setForm({ ...form, platforms: form.platforms.filter(p => p !== value) });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm({ ...form, file: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 实现内容发布逻辑
    console.log('发布内容:', form);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>内容发布</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>标题:</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>内容:</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleInputChange}
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
          <label>上传文件:</label>
          <input
            type="file"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">发布</button>
      </form>
    </div>
  );
};

export default ContentPublish; 