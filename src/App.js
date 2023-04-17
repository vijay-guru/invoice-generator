import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import HomePage from './components/HomePage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
  return (
   
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <BrowserRouter>
          <Routes>
          <Route  path="/" element={<HomePage/>} exact></Route>
          <Route  path="/create" element={<InvoiceForm/>} ></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
    
  );
}}

export default App;
