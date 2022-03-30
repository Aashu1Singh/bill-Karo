import React, { useState } from 'react'

const AddProduct = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('')
        setPrice('')
    }
    const [name, setName] = useState("");
    const [price, setPrice] = useState('')
    return (

        <form onSubmit={handleSubmit} className='row my-3 mb-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
            <div className="mb-3 col-md-5 mx-3"  >
                <label htmlFor="item" className="form-label"><strong>Item Name</strong> </label>
                <input type="text" className="form-control" id="item" aria-describedby="emailHelp" name="name" onChange={(e) => { setName(e.currentTarget.value); }} value={name} />
            </div>
            <div className="mb-3 col-md-4">
                <label htmlFor="price" className="form-label"><strong>Price</strong></label>
                <input type="number" className="form-control" min="1" id="price" name="price" value={price} onChange={(e) => {
                    setPrice(Number(e.currentTarget.value))
                }} />
            </div>
            <div className="row mx-1">
                <button type="submit" disabled={!(name.length >0 )} className="btn btn-secondary btn-sm col-md-3 mx-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} onClick={() => { return props.addItem(name, Number(price)) }}><strong > Add Item</strong></button>
            </div>
        </form>
    )
}

export default AddProduct