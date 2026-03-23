import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, username, password, email);

        navigate("/success");
    }


    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => 
                    setname(e.target.value)} />
            </div>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => 
                    setusername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => 
                    setpassword(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => 
                    setemail(e.target.value)} />
            </div>
            <button type="submit">Signup</button>
        </form>
    )
}

export default Signup;