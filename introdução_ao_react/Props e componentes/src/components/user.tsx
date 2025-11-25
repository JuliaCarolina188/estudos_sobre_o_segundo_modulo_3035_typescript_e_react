import React from "react";

type Props = {
    nome: string
    idade: number
    email: string
}

export function User({nome='', idade=0, email=''}:Props) {
    return (
        <div>
            <h2>Informações do usuário: </h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade} </p>
            <p>Email: {email} </p>
        </div>
    )
}