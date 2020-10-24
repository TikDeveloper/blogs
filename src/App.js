import React,{useState,useEffect} from 'react'
import './App.css';
import Blog from './Blog'
import { withStyles } from '@material-ui/core/styles';
import {    
    FormGroup,
    FormControl,
    InputLabel,
    Input,
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    

} from '@material-ui/core';

import { green } from '@material-ui/core/colors';

import db from './firebase';
import firebase from 'firebase';


const AddButton = withStyles((theme) => ({
    root: {
      color: 'white',
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
  }))(Button);
  






function App() {

    
    const [desc, setDesc] = useState('')
    const [name, setName] = useState('')
    const [blogs,setBlogs] = useState([])


    useEffect(() => {
        db.collection('blogs').orderBy('timestamp','desc').onSnapshot(snapshot => {
            
            setBlogs(snapshot.docs.map(doc => {
                return {id:doc.id,blog:doc.data()}
            }))

        })
    }, [])



    const addBlog = () =>{
       
        

        setName('')
        setDesc('')

        db.collection('blogs').add({
            name,
            desc,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })

    }

    

    return (
        <div className='app'>
           
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input value={name} onChange={(e) => setName(e.target.value)}/>
                </FormControl>

                <FormControl>
                    <InputLabel >Description</InputLabel>
                    <Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </FormControl>
                <AddButton disabled={!name||!desc} variant="contained" onClick={addBlog}>Add Blog</AddButton>
            </FormGroup>
            
            
            




            
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Update</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            blogs.map((blog) => <Blog key={blog.id} info={blog}/> )
                        }
                    </TableBody>
                </Table>
            
            
        </div>
    )
}

export default App
