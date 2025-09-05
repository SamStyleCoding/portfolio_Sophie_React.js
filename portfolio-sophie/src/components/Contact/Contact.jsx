import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';



export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formsubmit.co/hhesamradinfar@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success("Votre message a été envoyé avec succès !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        e.target.reset();
      } else {
        toast.error("Une erreur s'est produite lors de lenvoi du message. Veuillez réessayer", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		});
      }
    } catch (error) {
		toast.warn('Une erreur est survenue. Veuillez vérifier votre connexion internet.', {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
			transition: Bounce,
		});
    }
  };


  return (
    <div>
      <section className="contact">
        <h2 id="contacts">Contactez-moi</h2>
        <p>Vous avez un projet ? Je serais ravi d’en discuter avec vous !</p>
      </section>

      <form onSubmit={handleSubmit}>

        <input type="hidden" name="_captcha" value="false" />
        
        <input
          type="text"
          name="FirstName"
          placeholder="Prénom"
          required
          maxLength={80}
        />
        
        <input
          type="text"
          name="LastName"
          placeholder="Nom de famille"
          required
          maxLength={100}
        />
        
        <input
          type="email"
          name="Email"
          placeholder="Adresse e-mail"
          required
        />
        
        <input
          type="tel"
          name="MobileNumber"
          placeholder="Numéro de téléphone"
          required
          minLength={6}
          maxLength={14}
          pattern="[0-9]{6,14}"
          title="Veuillez entrer un numéro valide (6 à 14 chiffres)"
        />
        
        <select name="Title" required>
          <option value="Mr">Monsieur</option>
          <option value="Mrs">Madame</option>
          <option value="Miss">Mademoiselle</option>
        </select>
        
        <input
          type="text"
          name="Message"
          placeholder="Votre message"
          required
        />
        
        <input type="submit" value="Envoyer" />
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
