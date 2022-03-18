import React, { useEffect, useState } from 'react'
import Carte from './Carte'
import axios from "axios";

const ListeCarte = () => {
    const [data, setData] = useState(null);

    useEffect( ()=> {
        axios.get("https://api-boite-idee.herokuapp.com/api/idee")
        .then( response => setData(response.data));
    }, []);
    
  return (
    <div className="row">
        {data && data.map( idee => <Carte key={idee.id} idee={idee}/>)}
    </div>
  )
}

export default ListeCarte