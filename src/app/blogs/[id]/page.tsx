'use client'

import {useRouter} from "next/navigation";
import {Button, Card} from "react-bootstrap";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {

    const router = useRouter()
    const handleBtn = () => {
        // alert(" Trở về trang chủ");
        router.push('/')
    }

    const handleBtnAdmin = () => {
        // alert(" Trở về trang admin");
        router.push('/blogs')
    }

    console.log(">> check id:", params.id)
    return (
        <div>
            Vieu detail with hoidanit = {params.id}
            <div>
                <Card className="text-center">
                    <Card.Header>Title</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Author</Card.Footer>
                </Card>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Button variant='danger' onClick={ () => handleBtnAdmin()}>Back Blogs</Button>

                <Button variant='warning' onClick={ () => handleBtn()}> Back Home</Button>
            </div>
        </div>
    )
}

export default ViewDetailBlog;