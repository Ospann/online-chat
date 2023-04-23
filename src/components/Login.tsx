import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Context } from "../index";
import { useContext } from 'react'


const Login = () => {
    const { auth, firebase } = useContext(Context);

    const hadleClick = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
        console.log(user);
    }

    return (
        <Container>
            <Button variant="outlined" onClick={hadleClick}>С помощью гугл</Button>
        </Container>
    )
}

export default Login;