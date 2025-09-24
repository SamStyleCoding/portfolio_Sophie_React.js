import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login({ handleLogin }) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const [remember, setRemember] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	
	const navigate = useNavigate();

	useEffect(() => {
			const savedEmail = localStorage.getItem("email");
			const savedPassword = localStorage.getItem("password");
			if (savedEmail && savedPassword) {
				setEmail(savedEmail);
				setPassword(savedPassword);
				setRemember(true);
			}
		}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:5678/api/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({email, password}),
			})

			if (!response.ok) {
				throw new Error("Erreur lors de la connexion");
			}

			const data = await response.json();

			localStorage.setItem("token", data.token);
			
			handleLogin(data.token);
			navigate("/");

		}

		catch (err) {
			setError(err.message);
		}

		if (remember) {
		localStorage.setItem("email", email);
		localStorage.setItem("password", password);
		}
		else {
			localStorage.removeItem("email");
			localStorage.removeItem("password");
		}

	}

  return (
	<div className="login">
		<h1 className="log-in">Log in</h1>
		<form className="form-login" onSubmit={handleSubmit}>
			{error && <p style={{color: "red" , margin: "18px"}}>Veuillez vérifier votre email et password</p>}
			<label htmlFor="email">E-mail</label>
			<input 
			type="text" 
			id="email" 
			value={email} 
			onChange={(e) => setEmail(e.target.value)}
			/>
			<label htmlFor="password">Mot de passe</label>
			<input 
			type={showPassword ? "text" : "password"} 
			id="password" 
			value={password} 
			onChange={(e) => setPassword(e.target.value)} 
			/>
			<div className="check-pass">
				<input 
				className="checkbox" 
				type="checkbox" 
				checked={remember} 
				onChange={(e) => setRemember(e.target.checked)} 
				/>
				<span
				className="show-pass"
				onClick={() => setShowPassword(!showPassword)}
				>
					{
					showPassword ? 
					<i className="fa-solid fa-lock-open"></i> :
					<i className="fa-solid fa-lock"></i>
					}
				</span>
			</div>
			<button className="connecter" type="submit">Se connecter</button>
				<p className="p-form">Mot de passe oublié</p>
		</form>
	</div>
  )
}
