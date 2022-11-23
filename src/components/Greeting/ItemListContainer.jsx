import './ItemListContainer.css'

function Greeting({nombre, apellido, planeta}) {
    return (
        <div>
            <h1 className='main-title'>
                Bienvenido {nombre} {apellido}
            </h1>
            <h2 className='main-sub'>
                Habitante del planeta {planeta}
            </h2>

        </div>
    )
}

export default function App(){
    const user = {nombre: "Iván", apellido: "Sirianni", planeta: "tierra"};

    return (
        <div>
            <Greeting {...user} />
        </div>
    )
}