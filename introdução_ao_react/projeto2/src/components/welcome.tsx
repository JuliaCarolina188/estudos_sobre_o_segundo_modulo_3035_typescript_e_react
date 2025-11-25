import React from "react"

type Props = {
    name: string
}

export function Welcome ({name = ''}: Props) {
    return <h1>Bem vindo {name}!!</h1>
}