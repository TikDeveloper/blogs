import React, {useState} from 'react'


import {TableRow,TableCell,IconButton,Modal,FormControl,Button,Input,InputLabel } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { makeStyles } from '@material-ui/core/styles';





import db from './firebase';


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top:'30%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border:'none',
        outline:'none',
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
  }));





function BlogItem(props) {

    const classes = useStyles();
    const [open,setOpen] = useState(false)
    const [desc, setDesc] = useState(props.info.blog.desc)
    const [name, setName] = useState(props.info.blog.name)



    const updateBlog = () =>{

        db.collection('blogs').doc(props.info.id).set({
            name,
            desc
        },{ merge: true })

        setOpen(false)
    }



    const modalBody = (
        <div className={classes.paper}>
            <div>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel>Description</InputLabel>
                    <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
                </FormControl>
            </div>
            <Button onClick={ updateBlog } variant="contained" color="primary">Update</Button>
        </div>
    )




    
    return (
        <>
            <Modal
                open={open}
                onClose={(e) => setOpen(false)}
            >
                {modalBody}
            </Modal>




        
            <TableRow>
                <TableCell> {props.info.blog.name} </TableCell>
                <TableCell> {props.info.blog.desc} </TableCell>
                <TableCell> <IconButton onClick={ (e) => setOpen(true) }> <EditIcon /> </IconButton> </TableCell>
                <TableCell> <IconButton onClick={ (e) => db.collection('blogs').doc(props.info.id).delete() }><DeleteIcon /></IconButton> </TableCell>
            </TableRow>

        </>
    )
}

export default BlogItem
