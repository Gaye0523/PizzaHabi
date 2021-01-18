import React from 'react';
import { useHistory } from "react-router-dom";
const { Fragment } = require("react");

const Ingreso = () => {
  const history = useHistory();
  return (
    <Fragment>
      <div className="welcome">
        <h2>PIZZA</h2>
        <h1>HABI</h1>
        <button className="startOrder" onClick={() => history.push("/pizza", { from: "/" })}>Iniciar</button>
      </div>
    </Fragment>
  );
}

function LoginView() {
  return (
    <Fragment>
    <div className="background">
    <Ingreso/>
    </div>
    </Fragment>
  )
}
export default LoginView;