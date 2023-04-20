const initialState = {
    invoiceDetails:[]
}
const invoiceDeatilReducer = (state = initialState, action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'ADD_LIST': return {
            ...state,
            invoiceDetails:[...state.invoiceDetails,action.payload]
        }
        case 'DELETE_LIST': return {
            ...state,
            invoiceDetails:state.invoiceDetails.filter((invoiceDetail)=>invoiceDetail !== action.payload)
        }
        case 'EDIT_LIST': return {
            ...state,
            invoiceDetails:state.invoiceDetails.map((invoiceDetail)=>{
                if(invoiceDetail.invoiceNumber === action.payload.invoiceNumber){
                    invoiceDetail=action.payload.newInvoice
                }
                return invoiceDetail;
            })
        }
    }
    return state;
}

export default invoiceDeatilReducer;