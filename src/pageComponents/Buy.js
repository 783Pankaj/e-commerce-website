import React, { useState } from "react";
import '../Styles/buy.css'
import Navbar from "../components/Navbar";
const Buy = (props) => {
    const {price} = props;
    console.log("pamkaj---------------------------",price)
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [adress, setAdress] = useState('');
    const [pin, setPin] = useState('');
    const [refer, setRefer] = useState('');
    const [submit, setSubmit] = useState([]);
    const handleChange = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleContactChange = (e) => {
        setContact(e.target.value);
    }
    
    const handleAddressChange = (e) => {
        setAdress(e.target.value);
    }

    const handlePinChange = (e) => {
        setPin(e.target.value)
    }

    const handleReferChange = (e) => {
        setRefer(e.target.value);
    }

    const handleSubmitFunction=()=>{
        if(name && contact && adress && pin){
            alert('order has been booked ')
            setSubmit([...submit, name, contact, adress, pin, refer]);
            setName('');
            setContact('');
            setAdress('');
            setPin('');
            setRefer('');
        }else{
            alert('plese fill the full form')
        }  
    }
    return (
        <>
            <div>
                <Navbar />
            </div>
            <form  className="product-buy-form" onSubmit={handleChange} >
            <span>Fill Details for Shoping</span>
            <h1>{props.title}</h1>
                <label htmlFor="name">Enter Name :</label>
                <input type="text"  placeholder="eg:-pankaj pal"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    required
                />

                <label>Enter Contact Number :</label>
                <input type="number" placeholder="eg:-29462849"
                    id="contact"
                    name="contact"
                    value={contact}
                    onChange={handleContactChange}
                    required
                />

                <label>Enter Full Address :</label>
                <textarea type="text" placeholder="eg:-pani tanki, dehri on sonn, bihar"
                    id="address"
                    name="address"
                    value={adress}
                    onChange={handleAddressChange}
                    required
                />

                <label>Enter pin number :</label>
                <input type="number" placeholder="eg:-29462849"
                    id="pin"
                    name="pin"
                    value={pin}
                    onChange={handlePinChange}
                    required
                />

                <label>Enter Refer code</label>
                <input type="text" placeholder="eg:-cjd@434ch"
                    id="refre"
                    name="refer"
                    value={refer}
                    onChange={handleReferChange}
                />
                <button type="submit" 
                   onClick={handleSubmitFunction}
                >Buy</button>
            </form>
           <h1> {submit}</h1>

        </>
    );
}
export default Buy;