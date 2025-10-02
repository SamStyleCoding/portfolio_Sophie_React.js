import { useEffect, useState } from "react";


export default function ImagesProjet({selectedCategory}) {

	const [works, setWorks] = useState([]);
	const [error, setError] = useState(null);

	const token = localStorage.getItem("token");
	
	useEffect(() => {

		if (!token) {
			setError("Vous devez être connecté pour voir les projets");
			return;
		}

		fetch("http://localhost:5678/api/works")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Erreur réseau");
			}
			return response.json();
		})
		.then((data) => setWorks(data))
		.catch((error) => setError(error.message))
	}, [token]);

	if (error) {
		return <div>Erreur: {error}</div>;
	}

	const filteredWorks = selectedCategory === "Tous" 
	? works
	: works.filter((work) => work.category.name === selectedCategory); 

  return (
	<div>
	  <div className="gallery">
		{
			token && filteredWorks.map((work) => (
				<figure key={work.id}>
					<img src={work.imageUrl} alt={work.title}/>
					<p>{work.title}</p>
				</figure>
			))
		}
		</div>
	</div>
  )
}
