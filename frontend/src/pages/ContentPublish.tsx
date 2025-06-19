import React from 'react';
import RichMediaEditor from '../components/RichMediaEditor';

const ContentPublish: React.FC = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px' }}>
      <h2 style={{ fontWeight: 700, fontSize: 28, color: '#0ff', letterSpacing: 2, marginBottom: 24 }}>智能富媒体内容创作</h2>
      <RichMediaEditor />
    </div>
  );
};

export default ContentPublish; 