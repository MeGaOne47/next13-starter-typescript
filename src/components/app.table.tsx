/* eslint-disable react/jsx-key */
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

interface IProps {
  blogs: IBlog[]
}
function AppTable(props: IProps) {
  const {blogs} = props;
  console.log(">>> Check props blogs:", blogs)
  return (
    <Table bordered hover size="sm">
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Author</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {blogs?.map(blog => {
            return (
              <tr key={blog.id}>
                <td>{blog.id}</td> 
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <Button variant='primary' className='mx-3'>View</Button>
                  <Button variant='warning' className='mx-3'>Edit</Button>
                  <Button variant='danger' className='mx-3'>Delete</Button>
                </td>
              </tr>
            )
        })}
        

        
      </tbody>
    </Table>
  );
}

export default AppTable;