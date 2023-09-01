import { Container, Box, Button, TextField } from "@mui/material"
import Logo from "./logo.svg"
import Ilustracao from "./ilustracao.svg"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const users = [
            { username: 'edonog', password: '509157' },
            { username: 'user2', password: 'password2' },
        ];

        const isValidUser = users.some(
            (user) => user.username === username && user.password === password
        )

        if (isValidUser) {
            navigate('/adm/listaconteudos')
        } else {
            alert("Login Incorreto!")
        }
    }

    return (
        <Container
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 10,
            }}
        >
            <Box>
                <img
                    src={Ilustracao}
                    alt="Ilustração"
                    width={500}
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#E9ECEF",
                    padding: 6,
                    borderRadius: 2,
                }}
            >
                <img
                    src={Logo}
                    alt="Logo"
                    height={75}
                />

                <TextField
                    required
                    fullWidth
                    margin="normal"
                    autoFocus

                    label="Nome de Usuário"
                    id="username"
                    name="username"
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                    required
                    fullWidth
                    margin="normal"

                    label="Senha"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                    onClick={handleLogin}

                    sx={{
                        width: 280,
                        my: 2,
                        backgroundColor: "#0C2D8A",
                        color: "#BECBEA",
                        boxShadow: "none",
                        '&:hover': {
                            backgroundColor: "#BECBEA",
                            color: "#0C2D8A",
                            boxShadow: "none",
                        }
                    }}
                    variant="contained"
                >
                    Login
                </Button>
            </Box>
        </Container>
    )
}

export default Login