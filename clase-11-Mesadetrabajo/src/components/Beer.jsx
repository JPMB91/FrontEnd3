import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const Beer = () => {

  const [beer, setBeer] = useState([])
  const navigate = useNavigate()
  
  const params = useParams()
  console.log(params, "params");

  const getBeer = async()=>{
      //Deberas completar este fetch con el parametro correspondiente
      const res = await fetch(`https://api.sampleapis.com/beers/ale/${params.id}`)
      const data = await res.json()
      setBeer(data)
      console.log(data);
  }

  useEffect(()=>{
      getBeer()
  },[])
  
return (
  <div>
      <h2>Cerveza numero: {`${beer?.id}`}</h2>
      <div className='card'>
          <img src={beer?.image} alt="beer-detail" />
          <p>{beer?.name}</p>
          <p>{beer?.price}</p>
          {/* <p>Rating: {beer.rating.average} </p> */}
      </div>
      <button onClick={() => navigate(-1)}>Go back</button>
  </div>

)

}
