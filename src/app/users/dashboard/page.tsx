'use client'
import { useRouter } from 'next/navigation'
import { Button, Col, Row, Container, ToastContainer } from 'react-bootstrap';

const Dashboard = () => {

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
        <Container style={{ border: '2px solid #000', padding: '20px', borderRadius: '10px' }}>
          <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
          <Row>
            <Col md={4}>
              <div style={{ border: '2px solid #000', padding: '20px', margin: '10px', borderRadius: '10px' }}>
                <h2>Câu hỏi 1</h2>
                <p>This is the content of section 1.</p>
              </div>
            </Col>
            <Col md={4}>
              <div style={{ border: '2px solid #000', padding: '20px', margin: '10px', borderRadius: '10px' }}>
                <h2>Câu hỏi 2</h2>
                <p>This is the content of section 2.</p>
              </div>
            </Col>
            <Col md={4}>
              <div style={{ border: '2px solid #000', padding: '20px', margin: '10px', borderRadius: '10px' }}>
                <h2>Câu hỏi 3</h2>
                <p>This is the content of section 3.</p>
              </div>
            </Col>
          </Row>
        </Container>
      );
    };

export default Dashboard;


