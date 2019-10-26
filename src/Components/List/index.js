import React, {useState, useEffect} from 'react'
import { MdDelete } from 'react-icons/md'
import api from '../../Services/api'

import './styles.css'

function List() {

  const [ projects, setProjects ] = useState([])
  const [ destroy, setDestroy ] = useState(false)
  const [ deleteId, setId ] = useState()
  const [ success, setSuccess ] = useState()
  
  useEffect(()=>{
  
    handleLoad()
  
  },[])

  async function handleLoad() {

    const response = await api.get('/projects')
    
    setProjects(response.data)

  }

  async function deleteProject(id) {
    console.log(id);
    const response = await api.delete(`/projetcs/${id}/delete`)
    console.log(response);
    
    setDestroy(false)
    setSuccess(response.data.succses)
    handleLoad()
  }

  return (
    <div className = "main-container">
      {destroy && (
        <div>
          <p>Deseja realmente excluir o projeto?</p>
          <button onClick = {() => setDestroy(false)} className = "cancel">Cancelar</button>
          <button 
            onClick = {() => deleteProject(deleteId)}
            className = "destroy"
          >
            Ok
          </button>
        </div>
      )}
      {success && (
        <div className = "success-msg" ><strong>{success}</strong></div>
      )}
      <ul>
        {projects && projects.map(projct =>(
          <li key = {projct._id}>
            <img src = {projct.url} />
            <footer>
              <strong>{projct.title}</strong>
              {projct.descs.map(desc => <li><p>{desc}</p></li> )}
              <button 
                className = "btn"
                onClick = {() => {
                  setId(projct._id)
                  setDestroy(true)
                }}
              >
                <MdDelete color = "#FEFEFE" size = {28} />
              </button>
            </footer>
          </li>
        ))}        
      </ul>
    </div>
  )
}

export default List
