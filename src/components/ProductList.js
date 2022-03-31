import React, { useState } from 'react'
import AddProduct from './AddProduct'
import { Footer } from './Footer'
import { Product } from './Product'
export const ProductList = (props) => {

    let product = []
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
        // console.log(newProducts);
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
        // console.log("item removed", index);

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
        // console.log(newProducts);
    }
    const addItem = (name, price, quantity) => {
        let newProducts = [...productItem];
        let newTotalAmount = totalAmount;
        if (newProducts == null) {
            newProducts = []
        } else {
            newProducts.push({
                name: name,
                price: price,
                quantity: quantity
            })
        }
        setProductItem(newProducts);
        newTotalAmount = 0;
        newProducts.forEach((index) => {
            newTotalAmount += (index.price * index.quantity);
        })
        setTotalAmount(newTotalAmount)
        props.showAlert("Item added successfully", "success")
    }

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : '#d0c0c059', }} >
                <h1 className='text-center' style={{ color: props.mode === 'dark' ? 'white' : 'black', padding: "5px" }} >ADD ITEM IN YOUR BAG</h1>
            </div>
            <AddProduct addItem={addItem} mode={props.mode} />
            <div className=" align-self-center ">
                <hr style={{ color: props.mode === 'dark' ? 'white' : 'black', }} className='mx-1 hrElement' />
            </div>
            {productItem.length > 0 ? <h2 className='my-3 text-center' style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : '#d0c0c059', padding: "8px" }} > Items you purchased</h2> : <div className="container text-center" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <div className="container my-4">
                </div>
                <h1 style={{ marginTop: "50px" }} >YOUR BAG IS EMPTY</h1>
                <div className="container text-center my-1" >
                    <div className="card" style={{ marginTop: "40px" }} >
                        <div className="card-body" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : '#d0c0c059' }}>
                            <h2 className="card-title"><b>ShopKart</b></h2>
                            <p className=" card-text my-1">~Aashu Singh</p>
                            <p className=" card-text my-1"><strong>Thank You for visiting</strong> </p>
                        </div>
                    </div>
                </div>
            </div>}
            {productItem.length > 0 ? <div className="row my-2 mx-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="col-1 align-self-center " style={{ padding: "1px" }}><strong>Sno</strong> </div>
                <div className="col-3 mx-1"><strong>Item</strong> </div>
                <div className="col-4 "><strong >Qantity</strong></div>
                <div className="col-2 mx-1 "><strong>Total</strong> </div>
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
