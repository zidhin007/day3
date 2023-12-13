import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const ToDo = () => {
    const [names,setNames]=useState()
    const [data,setData]=useState([])

    const  inputhandler=(e)=>{//to take the typed value
        setNames(e.target.value)
    }

    const  addhandler= ()=>{
       setData((data=>[...data,names]))
       setNames('')
    }
  return (
    <div>
        <TextField variant="outlined" placeholder='enter anything' onChange={inputhandler}/> <br /><br />
        <Button variant='contained' onClick={addhandler}> Submit</Button>

        <ul>
            {data.map((value,index)=>{
                return(
                    <li>{value}</li>
                )
            })}
            
        </ul>

    </div>
  )
}

export default ToDo