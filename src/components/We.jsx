import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const We = () => {
  

    const [civilizations, setCivilizations] = useState(null);

    useEffect(() => {
        GetApiData();
    }, [])

    const GetApiData = async () => {
        const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
        const aoe = await data.json()
        setCivilizations(aoe.civilizations)
        console.log(aoe.civilizations)
    }

  return (
    <div>
        <h3>Hello We</h3>
        <ul>
        {   
                civilizations && civilizations.map(item => (
                    <li key={item.id}>
                        <Link to={`/civilization/${item.id}`}>
                            {item.name} - {item.expansion}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default We