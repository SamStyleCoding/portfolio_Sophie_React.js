export default function Login() {
  return (
	<div className="login">
		<h1 className="log-in">Log in</h1>
		<form className="form-login" action="#" method="post">
			<label htmlFor="email">E-mail</label>
			<input type="text" id="email" />
			<label htmlFor="password">Mot de passe</label>
			<input type="password" id="password" />
			<button className="connecter" type="submit">Se connecter</button>
			<p className="p-form">Mot de passe oublié</p>
		</form>
	</div>
  )
}
