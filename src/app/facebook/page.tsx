'use client'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap';

const Facebook = () => {

    const router = useRouter()
    const handleBtn = () => {
        // alert(" Trở về trang chủ");
        router.push('/')
    }

    const handleBtnAdmin = () => {
        // alert(" Trở về trang admin");
        router.push('/admin/hoidanit')
    }
    return (
        <div>
            Facebook
            <div>

                <Button variant='danger' onClick={ () => handleBtnAdmin()}>Hỏi dân it</Button>

                <Button variant='warning' onClick={ () => handleBtn()}> Back Home</Button>
            </div>
        </div>
        
    )
}

export default Facebook; // /admin/facebook 