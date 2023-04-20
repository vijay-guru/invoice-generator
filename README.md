# Invoice Generator - React App

<h5>An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses jspdf-react to capture the data from the modal and covert it from canvas -> pdf.</h5>

<h3>Live Demo</h3>
https://invoicegenerator-vijayg.netlify.app/
<br/>

<h3>Screenshots : </h3>

<img src="/public/images/1.png" />
<img src="/public/images/2.png" />
<img src="/public/images/3.png" />
<img src="/public/images/4.png" />
<img src="/public/images/5.png" />
<img src="/public/images/6.png" />
<img src="/public/images/7.png" />
<br/>


<h3>Installation</h3>
<br/>
<ul>
  <li>git clone https://github.com/vijay-guru/invoice-generator.git</li>

<li>npm install</li>

<li>npm start / npm run build</li>
  </ul>
  
<h3>Changes done in UI</h3>

<ul>
  <li>Implemented redux for state management [Created , Edit , Delete]</li>
  <li>Added home page component for listing all the created invoices </li>
  <li>Implemented routing feature</li>
  <li>Buttons changes dynamically for Send / Edit invoices in Modal</li>
  <li>Buttons changes dynamically for Add / Update invoice in Invoice form page</li>
  <li> Added feature : Invoice number must be created in unique manner . App does not allow to create invoice by giving same invoice number repeatedly.</li>
  <li>If user clicks Edit Invoice from Homepage modal --> All that particular invoice's data are copied and shown in those particular field in invoice to make a changes.</li>
  </ul>
  
  
