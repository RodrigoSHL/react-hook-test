import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Civilization = () => {

    const {id} = useParams();

    const [civilization, setCivilization] = useState(null);

    useEffect(() => {
        const GetApiData = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
            const aoe = await data.json()
            setCivilization(aoe)
        }
        GetApiData();
    }, [id])

 


  return (
    <div className='container'>
        <div className='row'>
            {
                civilization ? 
                    <div className='col-12'>
                        <h3>Civilization: {civilization.name}</h3>
                        <p><b>Expansion:</b> {civilization.expansion}</p>
                        <p><b>Army type:</b> {civilization.army_type}</p>
                        <p><b>Team bonus:</b> {civilization.team_bonus}</p>
                    </div>
                :
                    <div className='col-12'>
                        <p>Not have civilizations</p>
                    </div>
            }
        </div>
    </div>

  )
}

export default Civilization