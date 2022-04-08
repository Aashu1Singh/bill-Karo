import React, { useState } from 'react'

const AddProduct = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('')
        setPrice('')
        setQuantity('')
    }
    const [name, setName] = useState("");
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    return (

        <form onSubmit={handleSubmit} className='row my-3 mb-2' style={{ color: props.mode === 'dark' ? 'white' : 'black'}} >
            <div className="mb-3 col-md-4"  >
                <label htmlFor="item" className="form-label input-tag"><strong>Name</strong> </label>
                <input type="text" className="form-control" id="item" aria-describedby="emailHelp" name="name" onChange={(e) => { setName(e.currentTarget.value); }} value={name} />
            </div>
            <div className="mb-3 col-md-4">
                <label htmlFor="price" className="form-label input-tag"><strong>Price</strong></label>
                <input type="number" className="form-control" min="1" id="price" name="price" value={price} onChange={(e) => { setPrice(Number(e.currentTarget.value))}} />
            </div>
            <div className="mb-3 col-md-4">
                <label htmlFor="quantity" className="form-label input-tag"><strong>Quantity</strong></label>
                <input type="number" className="form-control" min="1" id="quantity" name="quantity" value={quantity} onChange={(e) => { setQuantity(Number(e.currentTarget.value))}} />
            </div>
            <div className="row mx-1">
                <button type="submit" disabled={!(name.length >0 )} className={`btn btn-outline-${props.mode=== 'dark'? 'light' : 'dark'} btn-lg col-md-3 input-btn-tag `} onClick={() => { return props.addItem(name, Number(price), Number(quantity)) }}><strong > Add Item</strong></button>
            </div>
        </form>
    )
}

export default AddProduct