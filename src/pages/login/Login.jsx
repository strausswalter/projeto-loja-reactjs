import '../../assets/css/auth.css'; 
import cover from '../../assets/img/cover-login.jpg'
import logo from '../../assets/img/logo.png'

import { Link } from 'react-router-dom';

import { 
    Grid, 
    Box, 
    TextField, 
    Button,
    Stack,
    FormControl,
    InputLabel,
} from '@mui/material'; 
import LoginIcon from '@mui/icons-material/Login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
    return (
        <>
    <Grid container spacing={2} style={{
        height: '100vh'
    }}>
        <Grid className='left-size' item sx={{
            padding:'10px',
            boxSizing:'border-box',
        }} xs={0} md={7} lg={8}>
            <Stack spacing={2} style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItem: 'center'
                }} >
                <img src={cover} style={{
                    width: '100%',
                }} alt="Logo" />
            </Stack>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
                
        <Stack spacing={2} style={{
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 16,
                        paddingRight: 16,
                        boxSizing: 'border-box'
                    }}><img src={logo} style={{
                        width: '150px',
                    }} alt="Logo" />
                    
                <h1>Entre com seu usuário</h1>
                <Grid container>
                    <Grid item xs={12} sx={{marginBottom: '16px'}} ><TextField fullWidth label="E-mail" type="email" variant="outlined" /></Grid>
                    <Grid item xs={12} sx={{marginBottom: '16px'}} ><TextField fullWidth label="Senha" type="password" variant="outlined" /></Grid>
                    <Grid item xs={12} sx={{marginBottom: '16px'}} ><Button fullWidth variant="contained" endIcon={<LoginIcon />}>Entrar</Button></Grid>
                    <Link style={{
                        textAlign: 'center',
                        display: 'block',
                        width: '100%'
                    }} to="/register">Criar conta</Link>
                </Grid>
            </Stack>
        </Grid>
    </Grid>
    </>
)
}

export default Login;