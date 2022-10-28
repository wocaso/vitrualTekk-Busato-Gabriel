import React,{useState, useContext} from 'react'
import { useNavigate} from "react-router-dom";
import {sendBuyOrder} from "../../Services/firestore"
import {cartContext} from "../../context/cartContext"
import "./Checkout.css"

function Checkout() {
  const [dataForm, setDataForm] = useState({
    name:"",
    phone:"",
    email:""
  });

  const navigate = useNavigate();
  const context = useContext(cartContext);
  const {cart, getTotalPriceInCart} = context;

  function inputChangeHander(event){
    let inputName = event.target.name;
    let inputValue = event.target.value;


    const newDataForm = {...dataForm};
    newDataForm[inputName] = inputValue;
    setDataForm(newDataForm);
  }
  function handleSendData(event){
    event.preventDefault();
    const buyOrder = {
      buyer: dataForm,
      items:cart,
      total: getTotalPriceInCart(),
      date: new Date(),
    
    }
    sendBuyOrder(buyOrder).then(res=>{
      navigate(`/checkoutEnd/${res}`)
    })

  };


  return (
    <div >
      <form onSubmit={handleSendData} id="checkoutContainer">
        <div className='formItem'>
          <label htmlFor="name" className='labelForm texto'>Nombre</label>
        <input 
        value={dataForm.name}
        onChange={inputChangeHander}
        name="name"
        type="text" 
        placeholder='Nombre'
        required
        className='inputForm'
        id="inputName"/>

        </div>
        <div className='formItem'>
          <label htmlFor="name" className='labelForm texto'>Telefono</label>
        <input 
        value={dataForm.phone}
        onChange={inputChangeHander}
        name="phone"
        type="number" 
        placeholder='Telefono'
        required
        className='inputForm'/>

        </div>
        <div className='formItem texto'>
          <label htmlFor="email" className='labelForm'>Email</label>
        <input 
        value={dataForm.email}
        onChange={inputChangeHander}
        name="email"
        type="text" 
        placeholder='Email'
        required
        className='inputForm'/>

        </div>
        <button onClick={handleSendData}>Finalizar Compra</button>
        


      </form>

    </div>
  )
}

export default Checkout