export  const addInvoiceList = (invoiceList) => {
    return (dispatch , getState)=>{
        dispatch({type: 'ADD_LIST', payload:invoiceList});
    }
}
export const deleteInvoiceList = (invoiceList) => {
    return (dispatch , getState)=>{
        dispatch({type: 'DELETE_LIST', payload:invoiceList});
    }
}
export const editInvoiceList = (invoiceNumber,newInvoice) => {
    return (dispatch , getState)=>{
        dispatch({type: 'EDIT_LIST', payload:{invoiceNumber:invoiceNumber,newInvoice:newInvoice}});
    }
}

