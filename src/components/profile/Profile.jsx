import {Avatar, Button} from "@mui/material";
import default_user from "../../static/images/default_user.jpg"
import {useNavigate} from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
    const defaultUserImg = default_user;

    const navMain = () => {
        navigate("/");
    }
    return (
        <div>
            <Button onClick={navMain}>Назад</Button>
            <Avatar
                alt="User"
                src={defaultUserImg}
                sx={{width: 56, height: 56, margin: "20vh auto"}}
            />
        </div>
    );
}

export default Profile;
