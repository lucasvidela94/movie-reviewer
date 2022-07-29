import React,{ useState,useEffect,Fragment} from 'react'
import axios from 'axios'

const Movies = () => {
  const [movies,setMovies] = useState([])

  useEffect(()=>{
    axios.get("/api/v1/movies.json")
    .then(res => {
      setMovies(res.data.data)
      console.log(movies)
    } )
    .catch(err => console.log(err))
  },[movies.length])

  const list = movies.map(item => {
    return <li key={item.id}>{item.attributes.name}</li>
  })

  return (
      <Fragment> 
        <h1>Esta son las peliculas listas</h1>
        <ul>{list}</ul>
      </Fragment>
    
  )
}

export default Movies