import { useEffect, useState } from "react";


export default function ImagesProjet() {

	const [works, setWorks] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("http://localhost:5678/api/works")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Erreur réseau");
			}
			return response.json();
		})
		.then((data) => setWorks(data))
		.catch((error) => setError(error.message))
	}, []);

	if (error) {
		return <div>Erreur: {error}</div>;
	}

  return (
	<div>
	  <div className="gallery">
		{
			works.map((work) => (
				<figure key={work.id}>
					<img src={work.imageUrl} alt="Abajour Tahina"/>
					<p>{work.title}</p>
				</figure>
			))
		}
		</div>
	</div>
  )
}
