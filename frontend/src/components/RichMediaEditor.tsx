import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box, Button, Stack, Tooltip, Dialog, DialogTitle, DialogContent, TextField, DialogActions, IconButton } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import MovieIcon from '@mui/icons-material/Movie';
import MicIcon from '@mui/icons-material/Mic';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const toolbarStyle = {
  background: 'linear-gradient(90deg, #0ff 0%, #09f 100%)',
  borderRadius: 12,
  padding: 8,
  marginBottom: 16,
  boxShadow: '0 2px 12px #0ff3',
  display: 'flex',
  gap: 12,
  alignItems: 'center',
};

const RichMediaEditor: React.FC = () => {
  const quillRef = useRef<any>(null);
  // 弹窗状态
  const [imgOpen, setImgOpen] = useState(false);
  const [imgPrompt, setImgPrompt] = useState('');
  const [audioOpen, setAudioOpen] = useState(false);
  const [audioPrompt, setAudioPrompt] = useState('');
  const [asrOpen, setAsrOpen] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [img2VideoOpen, setImg2VideoOpen] = useState(false);
  const [img2VideoUrl, setImg2VideoUrl] = useState('');
  const [img2VideoPrompt, setImg2VideoPrompt] = useState('');
  const [localImgOpen, setLocalImgOpen] = useState(false);
  const [localImgFile, setLocalImgFile] = useState<File | null>(null);
  const [fileOpen, setFileOpen] = useState(false);
  const [fileType, setFileType] = useState<'audio'|'video'|'md'|'doc'|'pdf'|''>('');
  const [fileObj, setFileObj] = useState<File|null>(null);
  // AI生成图片
  const handleAIGenerateImage = async () => {
    const res = await fetch('/api/multimodal-image/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: imgPrompt, provider: 'openai' })
    });
    const data = await res.json();
    const quill = quillRef.current.getEditor();
    quill.insertEmbed(quill.getSelection().index, 'image', data.url || data.data?.[0]?.url);
    setImgOpen(false);
    setImgPrompt('');
  };
  // AI生成语音
  const handleAIGenerateAudio = async () => {
    const res = await fetch('/api/tts/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: audioPrompt })
    });
    const blob = await res.blob();
    const audioUrl = URL.createObjectURL(blob);
    const quill = quillRef.current.getEditor();
    quill.insertEmbed(quill.getSelection().index, 'audio', audioUrl);
    setAudioOpen(false);
    setAudioPrompt('');
  };
  // 语音转文字
  const handleASR = async () => {
    if (!audioFile) return;
    const formData = new FormData();
    formData.append('audio', audioFile);
    const res = await fetch('/api/asr/openai', { method: 'POST', body: formData });
    const data = await res.json();
    const quill = quillRef.current.getEditor();
    quill.insertText(quill.getSelection().index, data.text || data.result || '');
    setAsrOpen(false);
    setAudioFile(null);
  };
  // 图片转视频
  const handleImage2Video = async () => {
    const res = await fetch('/api/video-gen/image2video', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl: img2VideoUrl, prompt: img2VideoPrompt, apiUrl: '', apiKey: '' })
    });
    const data = await res.json();
    const quill = quillRef.current.getEditor();
    quill.insertEmbed(quill.getSelection().index, 'video', data.videoUrl || data.url);
    setImg2VideoOpen(false);
    setImg2VideoUrl('');
    setImg2VideoPrompt('');
  };
  // 本地图片上传处理
  const handleLocalImgUpload = async () => {
    if (!localImgFile) return;
    const reader = new FileReader();
    reader.onload = () => {
      const quill = quillRef.current.getEditor();
      quill.insertEmbed(quill.getSelection().index, 'image', reader.result as string);
      setLocalImgOpen(false);
      setLocalImgFile(null);
    };
    reader.readAsDataURL(localImgFile);
  };
  const handleFileUpload = async () => {
    if (!fileObj) return;
    const quill = quillRef.current.getEditor();
    if (fileType === 'audio') {
      const url = URL.createObjectURL(fileObj);
      quill.insertEmbed(quill.getSelection().index, 'audio', url);
    } else if (fileType === 'video') {
      const url = URL.createObjectURL(fileObj);
      quill.insertEmbed(quill.getSelection().index, 'video', url);
    } else if (fileType === 'md') {
      const text = await fileObj.text();
      quill.insertText(quill.getSelection().index, text);
    } else if (fileType === 'doc' || fileType === 'docx' || fileType === 'pdf') {
      const url = URL.createObjectURL(fileObj);
      quill.insertText(quill.getSelection().index, `[${fileObj.name}](${url})`);
    }
    setFileOpen(false);
    setFileObj(null);
    setFileType('');
  };
  return (
    <Box sx={{ background: '#101c2c', borderRadius: 4, boxShadow: '0 4px 24px #0ff2', p: 3 }}>
      <Stack direction="row" sx={toolbarStyle}>
        <Tooltip title="AI生成图片" arrow>
          <IconButton color="primary" onClick={() => setImgOpen(true)}><ImageIcon /></IconButton>
        </Tooltip>
        <Tooltip title="AI生成语音" arrow>
          <IconButton color="primary" onClick={() => setAudioOpen(true)}><VolumeUpIcon /></IconButton>
        </Tooltip>
        <Tooltip title="语音转文字" arrow>
          <IconButton color="primary" onClick={() => setAsrOpen(true)}><MicIcon /></IconButton>
        </Tooltip>
        <Tooltip title="图片转视频" arrow>
          <IconButton color="primary" onClick={() => setImg2VideoOpen(true)}><MovieIcon /></IconButton>
        </Tooltip>
        <Tooltip title="本地图片上传" arrow>
          <IconButton color="primary" onClick={() => setLocalImgOpen(true)}><PhotoCamera /></IconButton>
        </Tooltip>
        <Tooltip title="上传文件" arrow>
          <IconButton color="primary" onClick={() => setFileOpen(true)}><AttachFileIcon /></IconButton>
        </Tooltip>
        {/* 未来可扩展：文字转视频 */}
      </Stack>
      <ReactQuill ref={quillRef} theme="snow" style={{ minHeight: 320, background: '#18243a', color: '#fff', borderRadius: 8 }} />
      {/* AI生成图片弹窗 */}
      <Dialog open={imgOpen} onClose={() => setImgOpen(false)}>
        <DialogTitle>AI生成图片</DialogTitle>
        <DialogContent>
          <TextField label="请输入图片描述" fullWidth value={imgPrompt} onChange={e => setImgPrompt(e.target.value)} autoFocus sx={{ mt: 2 }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setImgOpen(false)}>取消</Button>
          <Button variant="contained" onClick={handleAIGenerateImage}>生成并插入</Button>
        </DialogActions>
      </Dialog>
      {/* AI生成语音弹窗 */}
      <Dialog open={audioOpen} onClose={() => setAudioOpen(false)}>
        <DialogTitle>AI生成语音</DialogTitle>
        <DialogContent>
          <TextField label="请输入要转为语音的文字" fullWidth value={audioPrompt} onChange={e => setAudioPrompt(e.target.value)} autoFocus sx={{ mt: 2 }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAudioOpen(false)}>取消</Button>
          <Button variant="contained" onClick={handleAIGenerateAudio}>生成并插入</Button>
        </DialogActions>
      </Dialog>
      {/* 语音转文字弹窗 */}
      <Dialog open={asrOpen} onClose={() => setAsrOpen(false)}>
        <DialogTitle>语音转文字</DialogTitle>
        <DialogContent>
          <Button variant="outlined" component="label" sx={{ mt: 2 }}>
            上传音频文件
            <input type="file" accept="audio/*" hidden onChange={e => setAudioFile(e.target.files?.[0] || null)} />
          </Button>
          {audioFile && <Box sx={{ mt: 1, color: '#0ff' }}>{audioFile.name}</Box>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAsrOpen(false)}>取消</Button>
          <Button variant="contained" onClick={handleASR} disabled={!audioFile}>识别并插入</Button>
        </DialogActions>
      </Dialog>
      {/* 图片转视频弹窗 */}
      <Dialog open={img2VideoOpen} onClose={() => setImg2VideoOpen(false)}>
        <DialogTitle>图片转视频</DialogTitle>
        <DialogContent>
          <TextField label="图片URL" fullWidth value={img2VideoUrl} onChange={e => setImg2VideoUrl(e.target.value)} sx={{ mt: 2 }} />
          <TextField label="视频描述" fullWidth value={img2VideoPrompt} onChange={e => setImg2VideoPrompt(e.target.value)} sx={{ mt: 2 }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setImg2VideoOpen(false)}>取消</Button>
          <Button variant="contained" onClick={handleImage2Video} disabled={!img2VideoUrl}>生成并插入</Button>
        </DialogActions>
      </Dialog>
      {/* 本地图片上传弹窗 */}
      <Dialog open={localImgOpen} onClose={() => setLocalImgOpen(false)}>
        <DialogTitle>本地图片上传</DialogTitle>
        <DialogContent>
          <Button variant="outlined" component="label" sx={{ mt: 2 }}>
            选择图片文件
            <input type="file" accept="image/*" hidden onChange={e => setLocalImgFile(e.target.files?.[0] || null)} />
          </Button>
          {localImgFile && <Box sx={{ mt: 1, color: '#0ff' }}>{localImgFile.name}</Box>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLocalImgOpen(false)}>取消</Button>
          <Button variant="contained" onClick={handleLocalImgUpload} disabled={!localImgFile}>插入图片</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={fileOpen} onClose={() => setFileOpen(false)}>
        <DialogTitle>上传文件</DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button variant={fileType==='audio'?'contained':'outlined'} onClick={()=>setFileType('audio')}>音频</Button>
            <Button variant={fileType==='video'?'contained':'outlined'} onClick={()=>setFileType('video')}>视频</Button>
            <Button variant={fileType==='md'?'contained':'outlined'} onClick={()=>setFileType('md')}>Markdown</Button>
            <Button variant={fileType==='doc'?'contained':'outlined'} onClick={()=>setFileType('doc')}>Word</Button>
            <Button variant={fileType==='pdf'?'contained':'outlined'} onClick={()=>setFileType('pdf')}>PDF</Button>
          </Stack>
          <Button variant="outlined" component="label" sx={{ mt: 2 }}>
            选择文件
            <input
              type="file"
              accept={
                fileType==='audio' ? 'audio/*' :
                fileType==='video' ? 'video/*' :
                fileType==='md' ? '.md' :
                fileType==='doc' ? '.doc,.docx' :
                fileType==='pdf' ? '.pdf' : '*'
              }
              hidden
              onChange={e => setFileObj(e.target.files?.[0] || null)}
            />
          </Button>
          {fileObj && <Box sx={{ mt: 1, color: '#0ff' }}>{fileObj.name}</Box>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFileOpen(false)}>取消</Button>
          <Button variant="contained" onClick={handleFileUpload} disabled={!fileObj || !fileType}>插入</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RichMediaEditor; 