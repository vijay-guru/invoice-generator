import React, {useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InvoiceModal from './InvoiceModal';
import { useDispatch } from 'react-redux';
import { deleteInvoiceList } from '../store/actions/invoiceActions';


function InvoiceList({item}) {
  const [isOpen , setIsOpen]=useState(false);

  const dispatch = useDispatch()
  const deleteList = ()=>{
    dispatch(deleteInvoiceList(item))
    alert("Invoice deleted successfully !!!")
    window.location.reload()
  }
  const viewInvoice = ()=>{
    setIsOpen(true);
  }
  const closeInvoice = ()=> {
    setIsOpen(false);
  }
  return (
    <div className='p-1'>
          <div id="invoiceList" className=' bg-light'>
            <div className="flex-row justify-content-between align-items-start w-100 p-2">
            <div className='row'>
              <div className="col-md- w-50">
                <h6 className="fw-bold text-secondary mb-1"> Invoice #: {item.invoiceNumber}</h6>
                <h5 className="fw-bold my-2">{item.billFrom}</h5>
              </div>
              <div className="col-md-2">
                <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due: {item.total}</h6>
                <h6 className="fw-bold text-secondary"> Curr : {item.currency}</h6>
              </div>
              <div className="col-md-2">
              <Button variant="primary" onClick={viewInvoice} className=" w-100">View</Button>
                      <InvoiceModal showModal={isOpen} closeModal={closeInvoice} info={item} items={item.items} currency={item.currency} subTotal={item.subTotal} taxAmmount={item.taxAmmount} discountAmmount={item.discountAmmount} total={item.total} edit={true}/>
              </div>
              <div className="col-md-2">
              <Button variant="secondary" onClick={deleteList} className=" w-100">Delete</Button>
              </div>
              </div>
            </div>
            <div className="p-2">
              <Row className="mb-4">
                <Col md={4}>
                  <div className="fw-bold">Billed to:</div>
                  <div>{item.billTo}</div>
                  <div>{item.billToAddress}</div>
                  <div>{item.billToEmail}</div>
                </Col>
                <Col md={4}>
                  <div className="fw-bold">Billed From:</div>
                  <div>{item.billFrom}</div>
                  <div>{item.billFromAddress}</div>
                  <div>{item.billFromEmail}</div>
                </Col>
                <Col md={4}>
                  <div className="fw-bold mt-2">Date Of Issue:</div>
                  <div>{item.dateOfIssue}</div>
                </Col>
              </Row>
        </div>
        </div>
        </div>
  )
}

export default InvoiceList
