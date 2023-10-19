'use client'

import {useRouter} from "next/navigation";
import {Button} from "react-bootstrap";

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
                <Button variant='danger' onClick={ () => handleBtnAdmin()}>Back Blogs</Button>

                <Button variant='warning' onClick={ () => handleBtn()}> Back Home</Button>
            </div>
        </div>
    )
}

export default ViewDetailBlog;