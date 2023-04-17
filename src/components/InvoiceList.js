import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { BiPaperPlane, BiCloudDownload } from "react-icons/bi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function InvoiceList() {
  return (
    <div className='p-1'>
          <div id="invoiceList" className=' bg-light'>
            <div className="flex-row justify-content-between align-items-start w-100 p-2">
            <div className='row'>
              <div className="col-md- w-50">
                <h6 className="fw-bold text-secondary mb-1"> Invoice #: 1</h6>
                <h5 className="fw-bold my-2">John Uberbacher</h5>
              </div>
              <div className="col-md-2">
                <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due:</h6>
                <h6 className="fw-bold text-secondary"> "Curr : 500"</h6>
              </div>
              <div className="col-md-2">
              <Button variant="primary" type="submit" className="d-block w-100 h-40">View</Button>
              </div>
              <div className="col-md-2">
              <Button variant="secondary" type="submit" className="d-block w-100 h-40">Delete</Button>
              </div>
              </div>
            </div>
            <div className="p-2">
              <Row className="mb-4">
                <Col md={4}>
                  <div className="fw-bold">Billed to:</div>
                  <div>Vijay Guru</div>
                  <div>Address of Vijay</div>
                  <div>vjguru40@gmail.com</div>
                </Col>
                <Col md={4}>
                  <div className="fw-bold">Billed From:</div>
                  <div>Vijay Guru</div>
                  <div>Address of Vijay</div>
                  <div>vjguru40@gmail.com</div>
                </Col>
                <Col md={4}>
                  <div className="fw-bold mt-2">Date Of Issue:</div>
                  <div>17/04/2023</div>
                </Col>
              </Row>
        </div>
        </div>
        </div>
  )
}

export default InvoiceList
