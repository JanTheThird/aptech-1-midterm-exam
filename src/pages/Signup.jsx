import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!/^[A-Za-z]+$/.test(name)) {
            newErrors.name = "Names can only contain letters.";
            }
        if (!/^.{2,}$/.test(name)) {
            newErrors.name = "Name must be at least 2 characters long.";
            }
        if (!/^[A-Za-z0-9._-]+$/.test(username)) newErrors.username 
            = "The text must be at least one character long and can only contain letters, numbers, dots, underscores, or hyphens.";
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/.test(password)) newErrors.password = "Password is required";
        
        if (!/^.{8,16}$/.test(password)) {
        newErrors.password = "Password must be between 8 and 16 characters.";
        }

        if (!/[a-z]/.test(password)) {
        newErrors.password = "Password must contain at least one lowercase letter.";
        }

        if (!/[A-Z]/.test(password)) {
        newErrors.password = "Password must contain at least one uppercase letter.";
        }

        if (!/\d/.test(password)) {
        newErrors.password = "Password must contain at least one number.";
        }

        if (!/[\W_]/.test(password)) {
        newErrors.password = "Password must contain at least one special character.";
        }

        if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
        };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log(name, username, password, email);
        }
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