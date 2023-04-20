import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function EmptyInvoiceList() {
  return (
      <Row>
        <Col>
            <h5 className='text-center mt-5'>Streamline your invoicing process with ease!</h5>
            <h3 className='text-center mt-5'>Click ' Create Invoice '  to continue !!!</h3>
        </Col>
      </Row>
  )
}

export default EmptyInvoiceList
