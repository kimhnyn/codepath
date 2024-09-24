import React from "react";
import Card from "./Card";
import delina from '../assets/images/delina.jpg';
import bloom from '../assets/images/bloom.jpg';
import bt from '../assets/images/bluetalisman.jpg';
import floating from '../assets/images/floating.jpg';
import jasmine from '../assets/images/jasmineofathens.jpg';
import melplace from '../assets/images/melroseplace.jpg';
import vwoods from '../assets/images/vwoods.webp';
import wrice from '../assets/images/whiterice.jpg';
import flowerbomb from '../assets/images/flowerbomb.webp';
import cscents from '../assets/images/cscents.jpg';
// Fragrance Name
// Fragrance House
// Fragrantica Link
// Next time, have json with info for name, brand, link and do a for loop that
// goes through and creates cards with the info
const Catalog = () => {
    return (
        <div >
            <div className='container'>
                <Card 
                    name='Delina'
                    brand='Parfums De Marly'
                    link='https://www.fragrantica.com/perfume/Parfums-de-Marly/Delina-43871.html'
                    img={delina}
                />
                <Card 
                    name='Floating'
                    brand='Liis'
                    link='https://www.fragrantica.com/perfume/Liis/Floating-74127.html'
                    img={floating}
                />
                <Card 
                    name='Blue Talisman'
                    brand='Ex Nihilo'
                    link='https://www.fragrantica.com/perfume/Ex-Nihilo/Blue-Talisman-84224.html'
                    img={bt}
                />
                <Card 
                    name='Bloom'
                    brand='Gucci'
                    link='https://www.fragrantica.com/perfume/Gucci/Gucci-Bloom-44894.html'
                    img={bloom}
                />
                <Card 
                    name='Jasmine of Athens'
                    brand='Theodoros Kalotinis'
                    link='https://www.fragrantica.com/perfume/Theodoros-Kalotinis/Jasmine-of-Athens-66737.html'
                    img={jasmine}
                />
                <Card 
                    name='Melrose Place'
                    brand='Ouai'
                    link='https://www.fragrantica.com/perfume/OUAI/Melrose-Place-52552.html'
                    img={melplace}
                />
                <Card 
                    name='Vanilla Woods'
                    brand='7 Virtues'
                    link='https://www.fragrantica.com/perfume/The-7-Virtues/Vanilla-Woods-52560.html'
                    img={vwoods}
                />
                <Card 
                    name='White Rice'
                    brand="D'Annam"
                    link='https://www.fragrantica.com/perfume/d-Annam/White-Rice-89243.html'
                    img={wrice}
                />
                <Card 
                    name='Flowerbomb'
                    brand='Viktor and Rolf'
                    link='https://www.fragrantica.com/perfume/Viktor-Rolf/Flowerbomb-1460.html'
                    img={flowerbomb}
                />
                <Card 
                    name='Tea Service'
                    brand='Chasing Scents'
                    link='https://www.fragrantica.com/perfume/Chasing-Scents/Tea-Service-73356.html'
                    img={cscents}
                />
            </div>
        </div>
    )
}

export default Catalog;