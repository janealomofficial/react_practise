import { useState, useMemo } from 'react';

const UseInvoice = () => {
    // State for different sections of the invoice
    const [companyInfo, setCompanyInfo] = useState({ name: '', address: '', contact: '' });
    const [customerInfo, setCustomerInfo] = useState({ name: '', address: '', contact: '' });
    const [invoiceMeta, setInvoiceMeta] = useState({ date: new Date().toISOString().slice(0, 10), invoiceNo: 'INV-001' });
    const [items, setItems] = useState([{ id: Date.now(), description: '', qty: 1, unitPrice: 0 }]); // ইউনিক id যোগ করা হয়েছে
    const [financials, setFinancials] = useState({ discount: 0, tax: 0, vat: 0 });
    const [signature, setSignature] = useState({ person: '', title: '', date: new Date().toISOString().slice(0, 10), contacts: '' });

    // Generic handler to update state objects
    const createHandler = (setter) => (e) => {
        const { name, value } = e.target;
        setter(prev => ({ ...prev, [name]: value }));
    };

    // Specific handlers
    const handleCompanyChange = createHandler(setCompanyInfo);
    const handleCustomerChange = createHandler(setCustomerInfo);
    const handleInvoiceMetaChange = createHandler(setInvoiceMeta);
    const handleFinancialsChange = createHandler(setFinancials);
    const handleSignatureChange = createHandler(setSignature);

    // Handlers for invoice items (সংশোধিত)
    const handleItemChange = (index, e) => {
        const { name, value } = e.target;
        const list = items.map((item, i) => {
            if (i === index) {
                // ইনপুটের ভ্যালুকে সংখ্যায় রূপান্তর করা হচ্ছে
                const parsedValue = (name === 'qty' || name === 'unitPrice') ? parseFloat(value) || 0 : value;
                return { ...item, [name]: parsedValue }; // State mutate না করে নতুন অবজেক্ট তৈরি করা হচ্ছে
            }
            return item;
        });
        setItems(list);
    };

    const handleAddItem = () => {
        setItems([...items, { id: Date.now(), description: '', qty: 1, unitPrice: 0 }]); // নতুন আইটেমে ইউনিক id যোগ করা হয়েছে
    };

    const handleRemoveItem = (index) => {
        const list = [...items];
        list.splice(index, 1);
        setItems(list);
    };

    // useMemo ব্যবহার করে হিসাব আরও কার্যকর করা হয়েছে
    const calculations = useMemo(() => {
        const subtotal = items.reduce((acc, item) => acc + (item.qty * item.unitPrice), 0);
        const discountAmount = (subtotal * parseFloat(financials.discount || 0)) / 100;
        const subtotalAfterDiscount = subtotal - discountAmount;
        const taxAmount = (subtotalAfterDiscount * parseFloat(financials.tax || 0)) / 100;
        const vatAmount = (subtotalAfterDiscount * parseFloat(financials.vat || 0)) / 100;
        const grandTotal = subtotalAfterDiscount + taxAmount + vatAmount;
        
        return { subtotal, discountAmount, taxAmount, vatAmount, grandTotal };
    }, [items, financials]);

    // Print handler
    const handlePrint = () => window.print();

    return {
        companyInfo, handleCompanyChange,
        customerInfo, handleCustomerChange,
        invoiceMeta, handleInvoiceMetaChange,
        items, handleItemChange, handleAddItem, handleRemoveItem,
        financials, handleFinancialsChange,
        signature, handleSignatureChange,
        calculations,
        handlePrint
    };
};

export default UseInvoice;