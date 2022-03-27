import React, { useState, useEffect } from 'react'
import AddProduct from './AddProduct'
import { Footer } from './Footer'
import { Product } from './Product'
export const ProductList = (props) => {

    let product = [{
        name: "Cake",
        price: 50,
        quantity: 0,

    },
    {
        name: "Shampoo",
        price: 5,
        quantity: 0,

    },
    {
        name: "Pencil",
        price: 15,
        quantity: 0,

    }]
    let [productItem, setProductItem] = useState(product)
    const [totalAmount, setTotalAmount] = useState(0);

    const increaseQnty = (index) => {
        let newProducts = [...productItem];
        let newTotalAmount = totalAmount;
        newProducts[index].quantity++;
        newTotalAmount += newProducts[index].price;
        setTotalAmount(newTotalAmount)
        setProductItem(newProducts);
        props.showAlert("Quantity increased by 1", "success")
    }
    const decreaseQnty = (index) => {
        let newProducts = [...productItem];
        let newTotalAmount = totalAmount;
        if (newProducts[index].quantity > 0) {
            newProducts[index].quantity--;
            newTotalAmount -= newProducts[index].price;
            // console.log(newProducts);
        }
        setTotalAmount(newTotalAmount)
        setProductItem(newProducts);
        props.showAlert("Quantity decreased by 1", "danger")
    }
    const reset = () => {
        let newProducts = [...productItem];
        newProducts.map((product) => {
            product.quantity = 0;
        })
        setProductItem(newProducts)
        setTotalAmount(0)
        props.showAlert("All quantities reset", "success")
    }
    const removeItem = (index) => {
        let newProducts = [...productItem];
        let newTotalAmount = totalAmount;
        newProducts.splice(index, 1);
        setProductItem(newProducts);
        newTotalAmount = 0;
        setTotalAmount(newTotalAmount)
        newProducts.forEach((index) => {
            newTotalAmount += (index.price * index.quantity);
        })
        setTotalAmount(newTotalAmount)
        props.showAlert("Item removed successfully", "danger")
    }
    const addItem = (name, price) => {
        let newProducts = [...productItem];
        if (newProducts == null) {
            newProducts = []
        } else {
            newProducts.push({
                name: name,
                price: price,
                quantity: 0
            })
        }
        setProductItem(newProducts);
        props.showAlert("Item added successfully", "success")
    }

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>ADD ITEM IN YOUR BAG</h1>
            </div>
            <AddProduct addItem={addItem} mode={props.mode} />
            <hr style={{ color: props.mode === 'dark' ? 'white' : 'black' }} />
            {productItem.length > 0 ? <h2 className='my-3 text-center' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} > Items you purchased</h2> : <div className="container text-center" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} ><h2>Bag is empty</h2></div>}
            {productItem.length > 0 ? <div className="row my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="col-md-1 ">Sno</div>
                <div className="col-md-3 ">Items</div>
                <div className="col-md-3 ">Qantity</div>
                <div className="col-md-3 ">Total </div>
            </div> : ""}
            {productItem.map((product, i) => {
                return <Product product={product} key={i} addItem={addItem} removeItem={removeItem} increaseQnty={increaseQnty} decreaseQnty={decreaseQnty} index={i} mode={props.mode} />
            })}
            {productItem.length > 0 ? <div className='my-3  text-center'>
                <Footer totalAmount={totalAmount} mode={props.mode} reset={reset} />
            </div> : ""}
        </>
    )
}
