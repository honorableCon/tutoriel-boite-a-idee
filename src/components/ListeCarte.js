import React, { useEffect, useState } from 'react'
import Carte from './Carte'
import axios from "axios";
import { useRecoilState } from 'recoil';
import { suggestions, metrique } from "../atoms/suggestions";

const ListeCarte = () => {
    const [data, setData] = useRecoilState(suggestions);
    const [metriques, setMetrique] = useRecoilState(metrique);
    let [accepte, refuse] = [0,0];
    
    useEffect( ()=> {
        axios.get("https://api-boite-idee.herokuapp.com/api/idee")
        .then( response => setData(response.data));
    }, []);

    useEffect( ()=> {
        setMetrique({accepte, refuse});
    }, [accepte, refuse, data])
    
  return (
    <div className="row">
        {data && data.map( idee => {
            idee.statut ? accepte++ : refuse++;
            return <Carte key={idee.id} idee={idee}/>
            })
        }
    </div>
  )
}

export default ListeCarte