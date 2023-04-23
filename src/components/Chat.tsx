import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { Context } from "../index";
import Loader from "./Loader";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";
import Box from "@mui/material/Box";
import SendInput from "./SendInput";

interface IMessage {
    uid: string;
    displayName: string;
    photoURL: string;
    text: string;
    createdAt: Date;
}

const Chat = (): JSX.Element => {
    const { firestore } = useContext(Context);

    const [messages, loading] = useCollectionData<IMessage>(
        firestore.collection("messages").orderBy("createdAt")
    );

    if (loading) {
        return <Loader />;
    }

    return (
        <Container>
            <Grid
                sx={{ marginTop: 10 }}
            >
                <Box className="chat">
                    {messages?.map((message, index) => (
                        <Message key={index}
                            uid={message.uid}
                            photoURL={message.photoURL}
                            displayName={message.displayName}
                            text={message.text} />
                    ))}
                </Box>
                <SendInput />
            </Grid>
        </Container>
    );
};

export default Chat;
