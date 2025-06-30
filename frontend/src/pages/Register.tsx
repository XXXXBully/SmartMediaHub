import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, TextField, Button, Typography, Container, Box, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('两次输入的密码不一致');
            return;
        }
        try {
            await axios.post('/api/users/register', { email, password });
            navigate('/login');
        } catch (error) {
            console.error('注册失败', error);
            // 这里可以添加错误提示
        }
    };

    return (
        <Box sx={{ 
            minHeight: '100vh', 
            width: '100vw', 
            maxWidth: '100vw', 
            overflowX: 'hidden', 
            background: 'linear-gradient(120deg, #101c2c 60%, #0ff 100%)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            p: { xs: 2, md: 4 } 
        }}>
            <Container component="main" maxWidth="xs">
                <Card sx={{ 
                    bgcolor: '#18243a', 
                    color: '#fff', 
                    borderRadius: 3, 
                    boxShadow: '0 8px 32px 0 rgba(0, 255, 255, 0.37)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography component="h1" variant="h5" align="center" sx={{ color: '#0ff', fontWeight: 700, mb: 3 }}>
                            智媒通-注册
                        </Typography>
                        <Box component="form" onSubmit={handleRegister} noValidate>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="邮箱地址"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                InputLabelProps={{ sx: { color: '#0ff' } }}
                                sx={{ 
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#0ff' },
                                        '&:hover fieldset': { borderColor: '#fff' },
                                        '&.Mui-focused fieldset': { borderColor: '#0ff' },
                                        color: '#fff',
                                    },
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="密码"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputLabelProps={{ sx: { color: '#0ff' } }}
                                sx={{ 
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#0ff' },
                                        '&:hover fieldset': { borderColor: '#fff' },
                                        '&.Mui-focused fieldset': { borderColor: '#0ff' },
                                        color: '#fff',
                                    },
                                }}
                            />
                             <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="确认密码"
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                InputLabelProps={{ sx: { color: '#0ff' } }}
                                sx={{ 
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#0ff' },
                                        '&:hover fieldset': { borderColor: '#fff' },
                                        '&.Mui-focused fieldset': { borderColor: '#0ff' },
                                        color: '#fff',
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ 
                                    mt: 3, 
                                    mb: 2, 
                                    bgcolor: '#0ff', 
                                    color: '#101c2c', 
                                    fontWeight: 'bold',
                                    '&:hover': { bgcolor: '#fff' }
                                }}
                            >
                                注 册
                            </Button>
                            <Typography variant="body2" align="center">
                                <MuiLink component={RouterLink} to="/login" sx={{ color: '#0ff' }}>
                                    已有账户？ 返回登录
                                </MuiLink>
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default Register; 