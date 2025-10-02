import { useState } from "react";
import ButtonsProjet from "../ButtonsProjet/ButtonsProjet";
import ImagesProjet from "../ImagesProjet/ImagesProjet";


export default function Projets() {

	const [selectedCategory, setSelectedCategory] = useState("Tous");

  return (
	<section id="portfolio">
		<h2>Mes Projets</h2>
		<ButtonsProjet onCategoryChange={setSelectedCategory} />
		<ImagesProjet selectedCategory={selectedCategory} />
	</section>
  )
}
