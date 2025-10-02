import { useEffect, useState } from "react";
import Modal from "react-modal";

export default function ModeEdition({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const [works, setWorks] = useState([]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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

  return (
    <>
      {isLoggedIn && (
        <div className="mode-edition" onClick={openModal} style={{ cursor: "pointer" }}>
          <p className="edition">Mode édition</p>
        </div>
      )}
      
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            border: '1px solid black',
            background: 'rgba(0, 0, 0, 0.4)',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            padding: '20px',
          }
        }}
      >
		<form className="form-galerie" action="#">
			<button type="button" className="Fermer" onClick={closeModal}>
				<i className="fa-solid fa-xmark"></i>
			</button>
			<p className="p-galerie">Galerie photo</p>
			<div className="container-galerie">
				{
          works.map((work) => (
          <figure key={work.id}>
            <img 
            className="img-galerie" 
            src={work.imageUrl} 
            alt={work.title}
            />
            <p>{work.title}</p>
          </figure>
          ))
        }
			</div>
		</form>
      </Modal>
    </>
  );
}
