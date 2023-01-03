import React from "react";
import Button from 'react-bootstrap/Button';

export default function Boton(props) {

    const { saludarFn, user } = props
    const { name = 'Anónimo', age } = user

    return (
        <Button variant="primary" onClick={() => saludarFn(name, age)}>Saludar</Button>
    )
}