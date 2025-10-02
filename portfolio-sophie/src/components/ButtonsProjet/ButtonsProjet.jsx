import { useEffect, useState } from "react";


export default function ButtonsProjet({onCategoryChange}) {

	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(null);
	const categoryClass = {
		"Objets": "button-p",
		"Appartements": "button-p-app",
		"Hotels & restaurants": "button-p-hr"
	};

	const token = localStorage.getItem("token");

	useEffect(() => {
		fetch("http://localhost:5678/api/categories")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Erreur réseau");
			}
			return response.json();
		})
		.then((data) => setCategories(data))
		.catch((error) => setError(error.message));
	}, []);

	if (error) {
		return <p>Une erreur est survenue: {error}</p>
	}

  return (
	<div className="buttons-projet">
		<button 
		className="button-p"
		onClick={() => onCategoryChange("Tous")}
		>
		Tous
		</button>
		{
			token && categories.map((cat) => (
				<button 
				key={cat.id} 
				className={categoryClass[cat.name]}
				onClick={() => onCategoryChange(cat.name)}
				>
				{cat.name}
				</button>
			))
		}
	</div>
  )
}
