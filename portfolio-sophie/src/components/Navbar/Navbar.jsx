import {NavLink} from "react-router-dom";
import { HashLink } from "react-router-hash-link";


export default function Navbar() {
  return (
	<header>
		<NavLink to="/">
			<h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
		</NavLink>
		<nav>
			<ul>
				<li>
					<HashLink smooth to={"/#portfolio"}>Projets</HashLink>
				</li>
				<li>
					<HashLink smooth to={"/#contacts"}>Contact</HashLink>
				</li>
				<NavLink to={"/login"}>
					<li>Login</li>
				</NavLink>
				<NavLink to={"https://www.instagram.com/"} target="_blank">
					<li><img className="img-instagram" src="/instagram.png" alt="Instagram" /></li>
				</NavLink>
			</ul>
		</nav>
	</header>
  )
}
