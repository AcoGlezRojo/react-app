import React from "react";

export default function Saludar(props) {

    return (
        <div>
            <h2>
                Hola {props.user.name}.
            </h2>
            <p>Tiene {props.user.age} años</p>
            <p>Color favorito: {props.user.color}</p>
        </div>
    )
}

