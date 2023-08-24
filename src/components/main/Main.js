import './Main.css';
import {Button, Stack} from "@mui/material";
import {styled} from '@mui/material/styles';
import {red} from '@mui/material/colors';
import {useNavigate} from "react-router-dom";


function Main() {
    const navigate = useNavigate();
    const RedButton = styled(Button)(({theme}) => ({
        color: theme.palette.getContrastText(red[200]),
        backgroundColor: red[200],
        '&:hover': {
            backgroundColor: red[500],
        },
    }));

    const navProfile = () => {
        navigate("/profile");
    }
    return (
        <div className="App">
            <header className="App-header">

                <Stack spacing={2} direction="column">
                    <RedButton variant="contained" size="large" onClick={navProfile}>
                        Мой тариф
                    </RedButton>
                    <RedButton variant="contained" size="large">Все тарифы</RedButton>
                    <RedButton variant="contained" size="large">FAQ</RedButton>
                </Stack>
            </header>
        </div>
    );
}

export default Main;
