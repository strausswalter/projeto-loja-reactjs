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
    InputAdornment,
    OutlinedInput,
    FilledInput,
    IconButton,
    FormControl,
    InputLabel,
} from '@mui/material'; 
import LoginIcon from '@mui/icons-material/Login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const Register = () => {
    const [visibilityToggle, setVisibilityToggle] = useState(false);
    const [form, setForm] = useState({}); //passando objeto vazio como conteúdo inicial


    const toggleVisibility = () => {
        setVisibilityToggle(!visibilityToggle);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    //Enviar dados, do form, para o backend
    const handleSubmit = async () => {
        if(form.senha !== form.checkSenha){

           toast.error("As senhas não batem!");
                
            // alert("As senhas não batem!");
            // return;
        } 
        try {
            await axios.post("http://localhost:3001/user-api/user", form);
            setForm({});

        } catch (error) {
            alert("Erro na conexão com o servidor. Tente novamente."); 
        }
    }

    return (
        <><pre>{JSON.stringify(form, null, 2)}</pre>

    <Grid container spacing={2} style={{
        height: '100vh'
    }}>
        <Grid className='leftSide' item sx={{
            padding:'10px',
            boxSizing:'border-box',
        }} xs={0} md={7} lg={8}>
            <Stack spacing={2} style={{
                    height: '100%',
                    justifyContent: 'center',
                    alignItem: 'center'
                }}>
                <img src={cover} style={{
                    width: '60vw',
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
                    
                <h1>Cadastre seu usuário</h1>
                <Grid container>
                            <Grid item xs={12} sx={{marginBottom: '16px'}}><TextField fullWidth label="Nome" type="text" variant="outlined" onChange={handleChange} name="nome" value={form.nome || ""} /></Grid> 
                            {/* TODO: Condirmar codigo: onChange={(event) => handleChange(event)} */}
                            <Grid item xs={12} sx={{marginBottom: '16px'}}><TextField fullWidth label="Sobrenome" type="text" variant="outlined" onChange={handleChange} name="sobrenome" value={form.sobrenome || ""} /></Grid>
                            <Grid item xs={12} sx={{marginBottom: '16px'}}><TextField fullWidth label="E-mail" type="email" variant="outlined" onChange={handleChange} name="email" value={form.email || ""} /></Grid>
                            <Grid item xs={12} sx={{marginBottom: '16px'}}><FormControl sx={{ width: '100%' }}><InputLabel>Senha</InputLabel>
                                    <OutlinedInput  
                                        color="primary"
                                        fullWidth 
                                        label="Senha"
                                        onChange={handleChange}
                                        name= "senha"
                                        value={form.senha || ""} 
                                        type={visibilityToggle ? 'text' : 'password'}
                                        endAdornment={<InputAdornment position="end">
                                            <IconButton
                                            aria-label="Clique para exibir"
                                            onClick={toggleVisibility}
                                            >
                                            {
                                                visibilityToggle ? <Visibility/> : <VisibilityOff/> 
                                            }
                                        </IconButton>
                                        </InputAdornment>}
                                        variant="outlined" />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sx={{
                                marginBottom: '16px'
                            }}>
                                <TextField  
                                    color="primary"
                                    fullWidth 
                                    label="Confirmar senha"
                                    type={visibilityToggle ? 'text' : 'password'}
                                    variant="outlined"
                                    onChange={handleChange}
                                    name= "checkSenha"
                                    value={form.checkSenha || ""}
                                    helperText={form?.senha !== form?.checkSenha ? "As senhas não batem": ""}
                                    error={form?.senha !== form?.checkSenha}
                                    />
                            </Grid>
                            <Grid item xs={12} sx={{
                                marginBottom: '16px'
                            }}>
                                <Button fullWidth variant="contained" onClick={handleSubmit} endIcon={<LoginIcon />} >Registrar</Button>
                            </Grid>
                            <Link 
                            style={{
                                textAlign: 'center',
                                display: 'block',
                                width: '100%'
                    }} to="/login">Entrar</Link>
                </Grid>
            </Stack>
        </Grid>
    </Grid>

    </>
)
}

export default Register;