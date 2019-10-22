import React, {useState, useEffect} from 'react'

import api from '../../Services/api'

import './styles.css'

function List() {

  const [ projects, setProjects ] = useState([])
  
  useEffect(()=>{
  
    handleLoad()
  
  },[])

  async function handleLoad() {

    const response = await api.get('/projects')

    console.log(response.data);
    

    setProjects(response.data)

  }

  return (
    <div className = "main-container">
      <ul>
        {projects && projects.map(projct =>(
          <li key = {projct._id}>
            <img src = {projct.url} />
            <footer>
              <strong>{projct.title}</strong>
              {projct.descs.map(desc => <li><p>{desc}</p></li> )}          
            </footer>
          </li>
        ))}        
      </ul>
    </div>
  )
}

export default List
