import React from 'react'
import ListeCarte from './ListeCarte'

const Filtre = () => {
  return (
    <div className='container'>
        <div className="d-flex justify-content-between align-items-center my-5">
            <h3>La liste des propostions</h3>
            <div>
                <button type="button" className="filtre-tous btn  me-2 btn-outline-secondary btn">Tous</button>
                <button type="button" className="filtre-refuse btn btn-outline-danger btn me-2">Refusée</button>
                <button type="button" className="filtre-accepte btn btn-outline-success btn">Acceptée</button>
            </div>
        </div>
        <ListeCarte/>
    </div>
  )
}

export default Filtre