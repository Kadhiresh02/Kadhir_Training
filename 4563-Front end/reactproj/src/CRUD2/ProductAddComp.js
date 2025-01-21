import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const ProductAddComp2 = () => {
    const nav=useNavigate();
    const [product,setProduct] = useState({
        pname:"",
        pprice:"",
        pcompany:"",
        pquantity:""

    });
    const inputChangeHandler=(event)=>{
        const {type,name,value}=event.target;
        setProduct({...product,[name]:value});
    }
    const addProduct=(event)=>{
        event.preventDefault();
        axios.post(`http://localhost:8848/products`,product).then(()=>{
            window.alert("Product Added Successfully");
            nav('/mainDashboard/productdash');
        }).catch((error)=>{})
    }
    return (
        <div>
            <h2>This is Add comp 2</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={addProduct}>
                        <label className='form-label'>Enter Product Name :</label>
                        <input type='text' name='pname' onChange={inputChangeHandler} value={product.pname} className='form-control'/>

                        <label className='form-label'>Enter Product Price :</label>
                        <input type='text' name='pprice' onChange={inputChangeHandler} value={product.pprice} className='form-control'/>

                        <label className='form-label'>Enter Product Company :</label>
                        <input type='text' name='pcompany' onChange={inputChangeHandler} value={product.pcompany} className='form-control'/>

                        <label className='form-label'>Enter Product Quantity :</label>
                        <input type='text' name='pquantity' onChange={inputChangeHandler} value={product.pquantity} className='form-control'/>

                        <button type='submit' className='btn btn-primary mt-2'>Add</button>
                    </form>
                </div>
                <div className='col-sm-3'></div>
            </div>
        </div>
    )
}

export default ProductAddComp2
