import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Signup({ addStudent }) {
    const navigate = useNavigate();
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onBlur" 
    });

    const onSubmit = (data) => {
        addStudent(data);
        navigate("/success");
    };

    const onError = () => {
        alert("Validation failed. Clearing form...");
        reset(); 

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
                <label>Name:</label>
                <input {...register("name", { 
                    required: "Name is required.",
                    pattern: { value: /^[A-Za-z\s]+$/, message: "Names can only contain letters." },
                    minLength: { value: 2, message: "Name must be at least 2 characters long." }
                })} />
                {errors.name && <p style={{ color: 'red', margin: 0 }}>{errors.name.message}</p>}
            </div>

            <div>
                <label>Username:</label>
                <input {...register("username", { 
                    required: "Username is required.",
                    pattern: { value: /^[A-Za-z0-9._-]+$/, message: "Invalid characters in username." }
                })} />
                {errors.username && <p style={{ color: 'red', margin: 0 }}>{errors.username.message}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input type="password" {...register("password", { 
                    required: "Password is required.",
                    minLength: { value: 8, message: "Too short (min 8)." },
                    maxLength: { value: 16, message: "Too long (max 16)." },
                    validate: {
                        hasLower: v => /[a-z]/.test(v) || "Missing lowercase letter.",
                        hasUpper: v => /[A-Z]/.test(v) || "Missing uppercase letter.",
                        hasNumber: v => /\d/.test(v) || "Missing a number.",
                        hasSpecial: v => /[\W_]/.test(v) || "Missing special character."
                    }
                })} />
                {errors.password && <p style={{ color: 'red', margin: 0 }}>{errors.password.message}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input type="email" {...register("email", { 
                    required: "Email is required.",
                    pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid." }
                })} />
                {errors.email && <p style={{ color: 'red', margin: 0 }}>{errors.email.message}</p>}
            </div>

            <button type="submit">Signup</button>
        </form>
    );
}
}

export default Signup;
