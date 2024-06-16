"use client"

import React, { useEffect, useState } from 'react';
import './page.css';
import { Menu } from "../../components/basic/Menu"

const allItems = [
    'ED Tulip', 'Felicia Tank', 'Bracelet Tom', 'DOMINIC', 'Bientot graphic tee', 'Inca jumper', 'Wendy jersey top',
    'CSP Hackney tank', 'Glans tunic', 'SIRPA', 'Stork fancy', 'Cat Tee', 'Boulevard TOP PRODUCT', 'Lolly', 'Jess oversize LS',
    'FOG tanktop', 'Slurp long tregging', 'Space 5 pkt tregging', 'HOPPER 9.99', 'Linni tee', 'Fiona Wide', 'Skinny L.W Bargain (1)',
    'Lola Lace-Up', 'W YODA KNIT OL OFFER', 'RICHIE PELATED SKIRT', 'Lauper Sweater', 'Thomas paperbag wide', '2P LS GIRLY PJ',
    'HM+ Katie skatedress', 'EDC LAURA LACE TOP', 'Valentino', 'Nora Cardigan', 'Cosy tunic', 'Polly pencil case', 'Irma SL-set print (J)',
    'Dolly hood', 'Keyring fluff', 'ED Madison Skinny HW', 'Håkan half zip CC', 'Mary fancy LS', 'MIST muscle tank', 'Kai tunic',
    'Latte slacks (1)', 'HM+ Glans tunic', 'Swift Dress', 'Janet SL-set (W)', 'Drew Cardigan', 'India PJ (W)', 'Glans SS', 'SC - MAJOR boot low',
    'Greta Shortie (Daisy Mid) 3p', 'Jenner waist belt', 'Atlanta Push Body Harlow', 'Svea Cropped Tank', 'Inca Jumper', 'lennart dress',
    'EDC ROMAN BLOUSE', 'SORRENTO trousers', 'Liza Superpush (Andes) 2pk', 'Mini Trainer 5p Socks', 'Rae Push (Melbourne) 2p', 'Perrie trash',
    'Dawn trousrer', 'TVP Henry trouser', 'Gyda!', 'Tempest TVP', 'A-band unicorn PU', 'Cindererlla', 'Charlotte Brazilian Aza.Low 2p',
    'CSP Smock Top', 'Fall graphic tee', 'Rebecca or Delphine shirt', 'Henry polo. (1)'
];

export default function App() {
    const [selectedItem, setSelectedItem] = useState('');
    const [recommendedItem, setRecommendedItem] = useState('');

    useEffect(() => {
        // This effect runs once to set the default selected item
        if (allItems.length > 0) {
            setSelectedItem(allItems[0]);
        }
    }, []);

    const handleSelectChange = async (event) => {
        const selectedItem = event.target.value;
        setSelectedItem(selectedItem);

        const item1 = "Inca Jumper"; // Replace with your actual logic to get the first cart item
        const item2 = "Felicia Tank"; // Replace with your actual logic to get the second cart item
        const itemsArray = [item1, item2, selectedItem];

        // Call the API for recommendation
        const app = await client("https://hughiephan-item-based-cosine-similarity-recommend.hf.space");
        const result = await app.predict("/predict", [itemsArray]);
        const arrayResult = JSON.parse(result.data[0].replace(/'/g, '"'));

        setRecommendedItem(arrayResult.join(', '));
    };

    return (
        <div>
            <main className="flex flex-col items-center justify-center p-24">
                <Menu> </Menu>
            </main>
            <div className="app">
                <div className="header">
                    <div className="logo-wrapper">
                        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png" alt="H&M Logo" />
                    </div>
                    <div className="header-info">
                        <span className="brand">H&M Fashion</span>
                        <span className="clothes">Clothes</span>
                    </div>
                </div>
                <div className="subheader-wrapper">
                    <div className="subheader">
                        <h1 className="subheader-title">Recommendation System</h1>
                        <span className="subheader-description">Using Item-based Cosine Similarities</span>
                    </div>
                </div>
                <div className="cart">
                    <h2 className="cart-title">Cart:</h2>
                    <ul className="cart-list">
                        <li className="cart-item">
                            <span className="index">1</span>
                            <span className="item-name">Inca Jumper</span>
                        </li>
                        <li className="cart-item">
                            <span className="index">2</span>
                            <span className="item-name">Felicia Tank</span>
                        </li>
                        <li className="cart-item">
                            <span className="index">3</span>
                            <select className="select borderless" id="itemSelect" value={selectedItem} onChange={handleSelectChange}>
                                {allItems.map((item, index) => (
                                    <option key={index} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </li>
                        <li className="cart-item"></li>
                    </ul>
                </div>
                <div className="footer">
                    <span>Recommend item: {recommendedItem}</span>
                </div>
            </div>
        </div>

    );
};