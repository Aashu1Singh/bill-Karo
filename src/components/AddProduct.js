import React, { useState } from 'react'

const AddProduct = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0)
    return (

        <form onSubmit={handleSubmit} className='row my-3 mb-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
            <div className="mb-3 col-md-6"  >
                <label htmlFor="item" className="form-label">Item Name</label>
                <input type="text" className="form-control" id="item" aria-describedby="emailHelp" name="name" onChange={(e) => { setName(e.currentTarget.value); }} value={name} />
            </div>
            <div className="mb-3 col-md-6">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" name="price" value={price} onChange={(e) => {
                    setPrice(Number(e.currentTarget.value))
                }} />
            </div>
            <div className="row">
                <button type="submit" className="btn btn-success btn-sm col-md-1 mx-3" onClick={() => { return props.addItem(name, Number(price)) }}>Add Item</button>
            </div>
        </form>
    )
}

export default AddProduct