import React, {useState, useMemo} from 'react'

import './styles.css'
import camera from '../../Assets/camera.svg'
import api from '../../Services/api'
export default function Create() {
  
  const [ title, setTitle ] = useState('')
  const [ descs, setDescs ] = useState('')
  const [ thumbnail, setThumbnail ] = useState(null)

  const [succes, setSucces] = useState('')

  const preview = useMemo(
    () => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null 
    },
    [thumbnail]
  )

  async function handleSubmit(e) {
 
    e.preventDefault()

      const data = new FormData()
       
      data.append('file', thumbnail)
      data.append('title', title)
      data.append('descs', descs)

      const response = await api.post('/projects',data)
      
      setSucces(response.data.succses)
      

      setThumbnail(null)
      setTitle('')
      setDescs('')
  }

  return (
    <div className = "content">
      <form onSubmit = {handleSubmit}>
        <label
          id = "thumbnail" 
          style = {{backgroundImage: `url(${preview})`}} 
          className = {thumbnail ? 'has-thumb': ''}
        >
          <input 
            type = "file" onChange = {e => setThumbnail(e.target.files[0])}/>
          <img src = {camera} alt="thumbnail"/>
        </label>

        <label htmlFor = "title"> * Título do projeto: </label>
        <input 
          id = "title"
          placeholder = "Título..."
          value = {title}
          onChange = {(e)=> {setTitle(e.target.value)}}
        />

        <label htmlFor = "descs"> * Descrições do projeto: <span>(separada por " - ")</span></label>
        
        <input 
          id = "descs"
          placeholder = "Descrições..."
          value = {descs}
          onChange = {(e)=> {setDescs(e.target.value)}}
        />

        <button type = "submit" className = "btn">Cadastrar projeto</button>
      
      </form>
      {succes && <div className = "success-msg" ><strong>{succes}</strong></div>}
    </div>
  )
}

