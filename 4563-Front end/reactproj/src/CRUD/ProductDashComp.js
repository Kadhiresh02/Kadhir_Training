import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, Outlet } from 'react-router-dom';
import ProductEditComp from './ProductEditComp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button, Modal } from 'react-bootstrap';
const ProductDashComp = () => {
    const [product, setProduct] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (val) => {
        setShow(true);
        setShow(val);
    };

    useEffect(() => {
        fetchData();


    }, [])
    const fetchData = () => {
        axios.get("http://localhost:8848/products").then((res) => {
            console.log(res.data);
            setProduct(res.data);
        }).catch((error) => { });
    }

    const deleteProduct = (id) => {
        // window.alert("HI");
        // console.log(id);
        if (window.confirm(`Are you sure want to delete with product id ${id}`)) {
            axios.delete(`http://localhost:8848/products/${id}`).then(() => {
                window.alert("Product deleted successfully");
                fetchData();
            }).catch((error) => { })
        }

    }
    return (
        <div>
            <h2>This is Dash Comp</h2>
            <Link to="/mainDashboard/productadd" className='btn btn-primary'>+Add</Link>
            <table className='table table-hover table-bordered table-stripped'>
                <thead>
                    <tr>
                        <th>Sr.no</th><th>Name</th><th>Price</th><th>Company</th><th>Quantity</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.length > 0 && product.map((val, index) => {
                            return <tr>
                                <td>{index + 1}</td>
                                <td>{val.pname}</td>
                                <td>{val.pprice}</td>
                                <td>{val.pcompany}</td>
                                <td>{val.pquantity}</td>
                                <td>
                                    <button type='button' onClick={() => handleShow(val)} className='btn' ><VisibilityIcon /></button>|
                                    <Link to={`/mainDashboard/productedit/${val.id}`} className='btn' ><EditIcon /></Link>|
                                    <button type="button" className='btn' onClick={() => deleteProduct(val.id)}><DeleteIcon /></button>

                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{show.pname}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Name:{show.pname}</span>
                    <span>Price:{show.pprice}</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProductDashComp
