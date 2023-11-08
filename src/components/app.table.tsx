'use client'
/* eslint-disable react/jsx-key */
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
import Link from "next/link";
import { toast } from 'react-toastify';
import { mutate } from "swr"




interface IProps {
  blogs: IBlog[]
}
function AppTable(props: IProps) {
  const {blogs} = props;

  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false); 
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [showViewModal, setShowViewModal] = useState<boolean>(false);
  const [viewedBlog, setViewedBlog] = useState<IBlog | null>(null);

  const handleDeleteBlog = (id: number) => {
    if (confirm(`Do you want to delete this blog (id = ${id})`)) {
      fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },

        })
        .then(res => {
            console.log("Response status:", res.status); // In trạng thái phản hồi

            if (res.status === 200 || res.status === 204) {
                toast.success("Delete blog succeed !");
                mutate("http://localhost:8000/blogs");
            } else {
                // Xử lý lỗi nếu cần thiết
                console.error("Delete request failed with status:", res.status);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    } 
  }

  const handleViewBlog = (id: number) => {
      fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
          }).then(res => res.json())
          .then(res => {
              if (res) {
                  toast.success("View blog succeed !");
                  setViewedBlog(res);
                  setShowViewModal(true);
                  mutate("http://localhost:8000/blogs");
              } 
          });
  }


  return (
    <>
      <div
          className='mb-3'
          style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Table Blogs</h3>
          <Button variant="secondary"
              onClick={() => setShowModalCreate(true)}
          >Add New</Button>
      </div>     
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td> 
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.content}</td>   
                  <td>
                    <Button variant='primary' className='mx-3' >
                        <Link
                            href={`/blogs/${item.id}`}
                            style={{ color: 'white', textDecoration: 'none' }}
                            onClick={() => {
                              handleViewBlog(item.id);                             
                          }}
                        >View</Link>
                    </Button>
                    <Button variant='warning' className='mx-3'
                        onClick={() => {
                          setBlog(item);
                          setShowModalUpdate(true);
                      }}
                    >Edit</Button>
                    <Button variant='danger' className='mx-3'
                        onClick={() => {
                          handleDeleteBlog(item.id);
                      }}
                    >Delete</Button>
                  </td>
                </tr>
              )
          })}
        </tbody>
      </Table>
      <CreateModal
          showModalCreate={showModalCreate}
          setShowModalCreate={setShowModalCreate}
      />

      <UpdateModal
          showModalUpdate={showModalUpdate}
          setShowModalUpdate={setShowModalUpdate}
          blog={blog}
          setBlog={setBlog}
      />
      
    </>

  );
}

export default AppTable;