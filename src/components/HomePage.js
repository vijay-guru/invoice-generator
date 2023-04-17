import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InvoiceList from './InvoiceList';
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <Row>
        <Col>
          <Card className="p-4 my-3 my-4">
            <div className="row">
                  <div class="col-md-5">
                    <span className="fw-bold">Date:&nbsp;</span>
                    <span className="current-date">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="text-heading col-md-5">
                    <span className="fw-bold">WELCOME TO INVOICE GENERATOR</span>
                  </div>
                  <div className="col-md-2">
                    <Link to='/create'>
                    <Button variant="primary" type="submit" className="d-block w-100 h-40">Create Invoice</Button>
                    </Link>
                    </div>
            </div>
            <hr className="my-4"/>
            <div id='invoice-list'>
              <InvoiceList/>
              <InvoiceList/>
              <InvoiceList/>
            </div> 
            <hr className="my-4"/>
            <Form.Label className="fw-bold text-center">Thanks for your business!</Form.Label>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default HomePage
