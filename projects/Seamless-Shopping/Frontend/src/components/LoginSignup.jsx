import React, { useState } from 'react';

const LoginSignup = ({ setUser, closeModal }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you can add your login/signup logic
        if (isLogin) {
            setUser({ username }); // Update parent component's user state
        } else {
            // Handle signup logic here
            setUser({ username }); // Assuming a successful signup
        }

        // Close the modal after login/signup
        closeModal();
    };

    return (
        <div>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {!isLogin && (
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                )}
                <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </button>
        </div>
    );
};

export default LoginSignup;
