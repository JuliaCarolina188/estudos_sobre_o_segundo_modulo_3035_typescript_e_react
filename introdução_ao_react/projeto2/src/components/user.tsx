import React from "react";

type Props = {
    nome: string
    idade: number
    email: string
}

export function User({nome='', idade=0, email=''}:Props) {
    return (
        <div>
            <h1>Informações do usuário: </h1>
            <p>Nome: {nome}</p>
            <p>Idade: {idade} </p>
            <p>Email: {email} </p>
        </div>
    )
}