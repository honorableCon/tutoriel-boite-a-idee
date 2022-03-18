import { useState } from "react";
import axios from "axios";

const Formulaire = (props) => {
    const longueurMax = 130;
    const [contenuSaisi, setContenuSaisi] = useState("");
    const [reste, setReste] = useState(longueurMax);
    const [titre, setTitre] = useState("");

    const handleChangeDescription = (e) => {
        setContenuSaisi(e.target.value);
        setReste(longueurMax - contenuSaisi.length);
    }

    const handleChangeTitre = (e) => {
        setTitre(e.target.value);
    }

    const handleSbmit = (e) => {
        e.preventDefault();
        axios.post("https://api-boite-idee.herokuapp.com/api/idee/",
            {titre:titre, description:contenuSaisi, statut:true},
            {
                headers: { 
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                }
            }
        )
    }

    return(
        <form onSubmit={handleSbmit}>
            <div className="mb-3">
                <label htmlFor="titre" className="form-label">Titre</label>
                <input
                    type="text"
                    className="form-control"
                    name="titre"
                    placeholder="Ex : Brief......"
                    aria-describedby="titreHelp"
                    onChange={handleChangeTitre}
                />
                <div className="form-text">
                    Merci de donner un titre clair pourla
                    catégorisation
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="suggestion" className="form-label">
                Suggestion</label>
                <textarea
                    className="form-control"
                    id="suggestion"
                    name="suggestion"
                    rows="3"
                    onChange={handleChangeDescription}
                ></textarea>
                <p style={{color: (reste < 0) ? "red" : "green"}}>
                    Contenu saisi {contenuSaisi.length} / 130
                </p>
                <p id="text-restant">Il vous reste {reste}</p>
            </div>
            <button
                type="submit"
                id="btn-suggestion"
                className="btn btn-danger float-end"
                style={{backgroundColor: "#ce0033"}}
            >
                Envoyer
            </button>
        </form>
    );
}

export default Formulaire;