import React, { Fragment, useState, useEffect } from 'react';
import Footer from './Footer.jsx'
import menus from '../menu.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt}  from '@fortawesome/free-solid-svg-icons';


const InfoOrder = ({ infoInput, getInput }) => {
  const updateNewTaskValue = e => getInput(e.target.value);
  return (
    <div className="containerCliente" >
      <label>Cliente: <input type="text"
        value={infoInput}
        onChange={updateNewTaskValue}
      />
      </label>
    </div>
  );
}

const Request = ({ showName, getOrder, setNewOrder, newBreakItem, addRequest, setName }) => {

  let totalOrder = getOrder.reduce((sum, value) => (typeof value.Price == "number" ? sum + value.Price : sum), 0);


  const initialStateValues = {
    name: showName,
    order: getOrder,
    total: totalOrder
  }

  const [values, setValues] = useState(initialStateValues)

  const sendOrder = () => {
    addRequest({
      name: showName,
      order: getOrder,
      total: totalOrder
    })
    totalOrder = 0;
    setNewOrder([]);
    setName("");
  }

  const deleted = (id) => {
    const deletedOrder = getOrder.filter ((item) => item.id === !item);
    setNewOrder(deletedOrder)
}

  return (
    <div className="containerRequest">
      <div className="nameClients">
        <h3>Cliente: {showName}</h3>
      </div>
      {
        getOrder.map(element =>
          <h4 key={element.id}>
            <div className="containerOrder">
              {element.Item}
              <div className="containerPrice">
                {element.Us} {element.Price}
              </div>
              <div><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleted(element.id)}/></div>
            </div>
          </h4>
        )
      }
      <div className="totalPrice">Total = $ {totalOrder}</div>
      <div className="divEnviar"><button className="enviar" onClick={sendOrder}>Enviar</button></div>
    </div>
  );
}


const MenuLunch = ({ updateOrder, showItemLunch, showLunchPrice, showLunchUs, showTaste }) => {

  return (
    <Fragment>
      {
        < div onClick={() => updateOrder({
          Item: showItemLunch,
          Us: showLunchUs,
          Price: showLunchPrice
        })}
          className="itemsLunch"> {showItemLunch}
          < div className="itemsPrice" >
            {showLunchUs} {showLunchPrice}
            <div>
              {showTaste}
            </div>
          </div >
        </div >
      }
    </Fragment>
  );
}

const BackgroundPizza = () => {

  const [newTaskName, setNewTaskName] = useState("")

  const [itemMenu, setItemMenu] = useState(menus)
  const [itemPrice, setItemPrice] = useState(menus)

  const [order, setOrder] = useState([])
  const [orderComplete, setCompleteOrder] = useState([])

  const updateOrder = (newItemBreak) => {
    setOrder(prevState => {
      return [...prevState, newItemBreak]
    })
  }

  return (
    <Fragment>
      <div className="containerGlobal">
        <div className="menuBreak">
          <InfoOrder infoInput={newTaskName} getInput={setNewTaskName} />
          <div className="containerMenuPizza">
            <div className="containerTitulo">
              <h3 className="Titulo">PIZZAS CLASICAS</h3>
            </div>
            {
              itemMenu.pizzaClasica.map(e =>
                <MenuLunch updateOrder={updateOrder} key={e.id} showItemLunch={e.name} showLunchPrice={e.price} showLunchUs={e.us} showTaste={e.taste} />)
            }
          </div>
        </div>
        <Request showName={newTaskName} setName={setNewTaskName} getOrder={order} setNewOrder={setOrder} newBreakItem={itemMenu} />
      </div>
      <Footer />
    </Fragment>
  )
}
export default BackgroundPizza