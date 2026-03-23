import { useParams } from "react-router-dom";

function Profile() {
    const { id } = useParams();
    return(
        <div>
            <h1>Profile Page for User {id}</h1>
        </div>
    )
}

export default Profile;