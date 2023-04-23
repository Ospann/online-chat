import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";

interface IMessage {
    uid: string;
    displayName: string;
    photoURL: string;
    text: string;
}


const Message = ({uid, photoURL,displayName,text}:IMessage) => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <Box
            sx={{
                margin: '10px',
                marginLeft: user?.uid === uid ? "auto" : "10px",
                width: "fit-content",
                padding:'15px',
                borderRadius:'15px',
                backgroundColor:'#282E33',
                color:'#fff'                
            }}
        >
            <Grid container>
                <Avatar src={photoURL} />
                <div>{displayName}</div>
            </Grid>
            <div>{text}</div>
        </Box>
    )
}

export default Message;