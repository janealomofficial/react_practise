import React from 'react';
import './InvoiceComponent.css'; // স্টাইল করার জন্য CSS ফাইল
import UseInvoice from './UseInvoice'; // আমরা লজিক আলাদা ফাইল থেকে আনছি

const InvoiceComponent = () => {
    const {
        companyInfo, handleCompanyChange,
        customerInfo, handleCustomerChange,
        invoiceMeta, handleInvoiceMetaChange,
        items, handleItemChange, handleAddItem, handleRemoveItem,
        financials, handleFinancialsChange,
        signature, handleSignatureChange,
        calculations,
        handlePrint
    } = UseInvoice();

    return (
        <div className="invoice-container">
            <header className="invoice-main-header">
                <h1>Invoice</h1>
            </header>

            <section className="invoice-details">
                <div className="company-details">
                    <input type="text" name="name" value={companyInfo.name} onChange={handleCompanyChange} placeholder="Company Name" className="editable-input" />
                    <input type="text" name="address" value={companyInfo.address} onChange={handleCompanyChange} placeholder="Address/City/ZIP Code" className="editable-input" />
                    <input type="text" name="contact" value={companyInfo.contact} onChange={handleCompanyChange} placeholder="Contact" className="editable-input" />
                </div>
                <div className="invoice-meta">
                    <div className="meta-item">
                        <label>Date:</label>
                        <input type="date" name="date" value={invoiceMeta.date} onChange={handleInvoiceMetaChange} className="editable-input" />
                    </div>
                    <div className="meta-item">
                        <label>Invoice No.:</label>
                        <input type="text" name="invoiceNo" value={invoiceMeta.invoiceNo} onChange={handleInvoiceMetaChange} className="editable-input" />
                    </div>
                    <div className="invoice-total-box">
                        <label>Invoice Total:</label>
                        <span>৳{calculations.grandTotal.toFixed(2)}</span>
                    </div>
                </div>
            </section>

            <section className="customer-info">
                <h4>Amount Recieved To:</h4>
                <input type="text" name="name" value={customerInfo.name} onChange={handleCustomerChange} placeholder="Name" className="editable-input" />
                <input type="text" name="address" value={customerInfo.address} onChange={handleCustomerChange} placeholder="Address" className="editable-input" />
                <input type="text" name="contact" value={customerInfo.contact} onChange={handleCustomerChange} placeholder="Contact" className="editable-input" />
            </section>

            <table className="items-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Amount</th>
                        <th className="print-hide"></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={item.id}> {/* এখানে index এর পরিবর্তে item.id ব্যবহার করা হয়েছে */}
                            <td><input type="text" name="description" value={item.description} onChange={(e) => handleItemChange(index, e)} placeholder="Item description" /></td>
                            <td><input type="number" name="qty" value={item.qty} onChange={(e) => handleItemChange(index, e)} /></td>
                            <td><input type="number" name="unitPrice" value={item.unitPrice} onChange={(e) => handleItemChange(index, e)} /></td>
                            <td>৳{(item.qty * item.unitPrice).toFixed(2)}</td>
                            <td className="print-hide"><button onClick={() => handleRemoveItem(index)} className="remove-btn">✕</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleAddItem} className="add-item-btn print-hide">+ Add Item</button>

            <section className="invoice-summary">
                <div className="calculation-inputs">
                    <div>
                        <label>Discount (%):</label>
                        <input type="number" name="discount" value={financials.discount} onChange={handleFinancialsChange} className="summary-input" />
                    </div>
                    <div>
                        <label>Tax (%):</label>
                        <input type="number" name="tax" value={financials.tax} onChange={handleFinancialsChange} className="summary-input" />
                    </div>
                     <div>
                        <label>VAT (%):</label>
                        <input type="number" name="vat" value={financials.vat} onChange={handleFinancialsChange} className="summary-input" />
                    </div>
                </div>
                <div className="total-amount-section">
                    <p><strong>Subtotal:</strong> ৳{calculations.subtotal.toFixed(2)}</p>
                    <p><strong>Discount:</strong> - ৳{calculations.discountAmount.toFixed(2)}</p>
                    <p><strong>Tax:</strong> + ৳{calculations.taxAmount.toFixed(2)}</p>
                    <p><strong>VAT:</strong> + ৳{calculations.vatAmount.toFixed(2)}</p>
                    <hr />
                    <p className="total-amount-final"><strong>Total Amount:</strong> ৳{calculations.grandTotal.toFixed(2)}</p>
                </div>
            </section>

            <footer className="invoice-footer">
                <div className="signature-fields">
                    <div className="field">
                        <input type="text" id="auth-person" name="person" value={signature.person} onChange={handleSignatureChange} className="editable-input" />
                        <label htmlFor="auth-person">Authorized Person</label>
                    </div>
                    <div className="field">
                        <input type="text" id="auth-title" name="title" value={signature.title} onChange={handleSignatureChange} className="editable-input" />
                         <label htmlFor="auth-title">Title</label>
                    </div>
                     <div className="field">
                        <input type="date" id="auth-date" name="date" value={signature.date} onChange={handleSignatureChange} className="editable-input" />
                         <label htmlFor="auth-date">Date</label>
                    </div>
                    <div className="field">
                        <input type="text" id="auth-contacts" name="contacts" value={signature.contacts} onChange={handleSignatureChange} className="editable-input" />
                         <label htmlFor="auth-contacts">Contacts</label>
                    </div>
                    <div className="field signature-line">
                         <label>Authorized Signature</label>
                    </div>
                </div>
                 <button onClick={handlePrint} className="print-btn print-hide">🖨️ Print Invoice</button>
            </footer>
        </div>
    );
};

export default InvoiceComponent;
