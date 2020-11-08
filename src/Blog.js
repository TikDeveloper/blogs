import React from 'react';

import { Table,TableHead,TableBody,TableRow,TableCell} from '@material-ui/core';
import BlogItem from './BlogItem';




function Blog(props) {


    const blogs = props.info;




    return (
        
            





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
                            blogs.map((blog) => <BlogItem key={blog.id} info={blog}/> )
                        }
                    </TableBody>
                </Table>







           
       
    )
}

export default Blog
