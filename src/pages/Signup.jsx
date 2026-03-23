import { useState } from 'react';

// this is the useNavigate hook from react-router-dom, which allows 
// us to programmatically navigate to a different route 
// (this is automatic message)
import { useNavigate } from 'react-router-dom';

function Signup({ addStudent }) {
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!name) {
            newErrors.name = "Name is required.";
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            newErrors.name = "Names can only contain letters.";
        } else if (name.length < 2) {
            newErrors.name = "Name must be at least 2 characters long.";
        }

        if (!/^[A-Za-z0-9._-]+$/.test(username)) {
            newErrors.username = "Invalid characters in username.";
        }
        if (!/^.{8,16}$/.test(password)) {
            newErrors.password = "Password must be 8-16 characters.";
        } else if (!/[a-z]/.test(password)) {
            newErrors.password = "Missing a lowercase letter.";
        } else if (!/[A-Z]/.test(password)) {
            newErrors.password = "Missing an uppercase letter.";
        } else if (!/\d/.test(password)) {
            newErrors.password = "Missing a number.";
        } else if (!/[\W_]/.test(password)) {
            newErrors.password = "Missing a special character.";
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            addStudent({ name, username, password, email });
            //this navigates to the success page after successful validation and adding the student.
            navigate("/success");
        } else {
            setname("");
            setusername("");
            setpassword("");
            setemail("");
            alert("Validation failed. Please try again.");
        }
    };

    const handleChange = (setter, field) => (e) => {
        setter(e.target.value);
        if (errors[field]) {
            setErrors({ ...errors, [field]: "" });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={handleChange(setname, 'name')} />
                {errors.name && <p style={{ color: 'red', margin: 0 }}>{errors.name}</p>}
            </div>

            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={handleChange(setusername, 'username')} />
                {errors.username && <p style={{ color: 'red', margin: 0 }}>{errors.username}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handleChange(setpassword, 'password')} />
                {errors.password && <p style={{ color: 'red', margin: 0 }}>{errors.password}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleChange(setemail, 'email')} />
                {errors.email && <p style={{ color: 'red', margin: 0 }}>{errors.email}</p>}
            </div>

            <button type="submit" disabled={!name || !username || !password || !email}>
                Signup
            </button>
        </form>
    );
}

export default Signup;