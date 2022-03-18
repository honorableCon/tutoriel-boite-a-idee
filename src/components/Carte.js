import React, {useState} from 'react';
import StyledCard from './style/carte';
import axios from "axios";


const Carte = ({idee}) => {
    const [statut, setStatut] = useState(idee.statut);

    const handleValidClick = () => {
        axios.patch(
            `https://api-boite-idee.herokuapp.com/api/idee/${idee.id}`,
            {statut: true}
        )
        .then( () => setStatut(true))
    }
    const handleUndoClick = () => {
        axios.patch(
            `https://api-boite-idee.herokuapp.com/api/idee/${idee.id}`,
            {statut: false}
        )
        .then( () => setStatut(false))
    }
    
  return (
    <StyledCard 
        className="card card-idea m-2"
        etat={statut}
        >
        <div className="card-body flex-column d-flex justify-content-between">
            <div className="card-block-titre">
                <h5 className="card-title fw-bold">{idee.titre}</h5>
                <h6 className="card-subtitle mb-2 text-gris">
                    {statut ? "approuvée" : "réfusée"}
                </h6>
            </div>
            <p className="card-text">{idee.description} </p>
            <div className="d-flex justify-content-between">
                <i
                    id={"approuve"}
                    className="bi bi-check-circle text-success card-link btn"
                    style={{fontSize: "2rem"}}
                    onClick={handleValidClick}
                ></i>
                <i
                    id={"desapprouve"}
                    className="bi bi-x-circle card-link btn"
                    style={{fontSize: "2rem", color: "#ce0033"}}
                    onClick={handleUndoClick}
                ></i>
            </div>
        </div>
    </StyledCard>
  )
}

export default Carte