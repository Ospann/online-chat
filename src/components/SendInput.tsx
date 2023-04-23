import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import { useContext, useState } from 'react';
import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';

const SendInput = () => {
    const { auth, firestore, firebase } = useContext(Context);
    const [user] = useAuthState(auth);
    const handleButtonClick = async () => {
        if (value === '') {
            return;
        }
        firestore.collection("messages").add({
            uid: user?.uid,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setValue("");
    };

    const [value, setValue] = useState<string>("");

    return (
        <TextField
            fullWidth
            inputProps={{ style: { color: 'gray' } }}
            placeholder='Написать сообщение...'
            variant="outlined"
            onChange={(e) => setValue(e.target.value)}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton sx={{ color: 'gray' }} onClick={handleButtonClick}>
                            <SendIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    )
}

export default SendInput;