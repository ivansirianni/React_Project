import './ItemListContainer.css'

function Greeting() {
    const user = {  nombre: "Iván", 
                    apellido: "Sirianni", 
                    planeta: "tierra"};
    return (
        <div>
            <h1 className='main-title'>
                Bienvenido {user.nombre} {user.apellido}
            </h1>
            <h2 className='main-sub'>
                Habitante del planeta {user.planeta}
            </h2>

        </div>
    )
}

export default Greeting;


//Otra forma de hacerlo pero menos recomendada por tutor
// export default function App(){
//     const user = {nombre: "Iván", apellido: "Sirianni", planeta: "tierra"};

//     return (
//         <div>
//             <Greeting {...user} />
//         </div>
//     )
// }