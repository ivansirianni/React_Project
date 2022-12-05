import Cards from './Cards';
import React from "react";
import './Cards.css'

export default function ProductList(){  
    const products = [
        {
            id: 1,
            name: "Adidas Shoes",
            price: 300,
            image: "https://www.highsnobiety.com/static-assets/thumbor/ii6srwtsXIItQMU6nrSizUkDqQI=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2022/03/23165950/south-park-adidas-shoes-release-date-collection-13.jpg"
        },
        {
            id: 2,
            name: "Pollo al disco",
            price: 1890,
            image: "https://tomassanchezcocina.com/wp-content/uploads/2013/08/592-Pollo-al-disco.jpg"
        },
        {
            id: 3,
            name: "Balde",
            price: 75,
            image: "https://puntoprofesionalonline.com/wp-content/uploads/2020/05/646-balde-1.jpg"
        },
        {
            id: 4,
            name: "Carbon",
            price: 50,
            image: "https://img.freepik.com/fotos-premium/carbon-barbacoa-cerca-endecha-plana_296586-31.jpg?w=2000"
        },
        {
            id: 5,
            name: "Heladera",
            price: 420,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEroogLjHZ2nfkS0H7QLHhqGVBJMgKXSNx7A&usqp=CAU"
        },
        {
            id: 6,
            name: "Albondigas con salsa",
            price: 500,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSs98XeNvFRvwi8RJ220bVpD2qwv-9EX2Vfg&usqp=CAU"
        },
    ];
    return(
        <div className="div-conainer">
            <div className='cards-container'>
                {products.map(({name, price, id, image}) => (
                    <div className="cards" key={id}>
                        <Cards name={name} price={price} image={image} id={id} />
                    </div>
                ))}
            </div>
        </div>
    )
    
}


