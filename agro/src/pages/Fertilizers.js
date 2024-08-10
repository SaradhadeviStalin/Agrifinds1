// src/pages/Fertilizers.js
import React, { useState } from 'react';
import './Products.css';

const fertilizerProducts = [
    { id: 1, name: 'Nitrogen Fertilizer', price: '₹500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlFXGYy91XlUbX-R0X0pJTb3gQyLzwhVPGg&s' },
    { id: 2, name: 'Phosphate Fertilizer', price: '₹550', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC_p4k1XbCWaOdZDvj7CkJTcgt-Kbt3g5Mg&s' },
    { id: 3, name: 'Potassium Fertilizer', price: '₹600', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0sHN1Vh7yEqLR6rmH-HwsCW9Q0y86qKJRw&s' },
    { id: 4, name: 'Organic Compost', price: '₹650', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsl4XhoC8wBPToqKMaTw-_LXv-vrkmQJi37A&s' },
    { id: 5, name: 'All Purpose Fertilizer', price: '₹700', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVgauri5dlJQNFAwSrS9CUA-IvVdFJpg97A&s' },
    { id: 6, name: 'Micronutrient Mix', price: '₹750', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7f3Q4mvZniIKPm9FmY40BWG7fCHLT1u7TdA&s' },
    { id: 7, name: 'Bio-Fertilizer', price: '₹800', image: 'https://krishisevakendra.in/cdn/shop/files/400gm_31.webp?v=1721305389' },
    { id: 8, name: 'Liquid Fertilizer', price: '₹850', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKq9ib20tInLIyXRtjd30fPhThOaFK_YFDg&s' },
    { id: 9, name: 'Slow Release Fertilizer', price: '₹900', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdt5ha2p50UCzvTPfvo6Z7xpXkGzth4uBgIg&s' },
    { id: 10, name: 'Seaweed Fertilizer', price: '₹950', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ug7tqjtm2JlpLxZjJ9nus7kLJxWnsWECbg&s' },
    { id: 11, name: 'Worm Castings', price: '₹1000', image: 'https://m.media-amazon.com/images/I/81mgI1oAdRL._AC_UF1000,1000_QL80_.jpg' },
    { id: 12, name: 'Bone Meal', price: '₹1050', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_bctMGCH2vlAU8WUVLJK7AtOVZTKZEVwhg&s' },
    { id: 13, name: 'Fish Emulsion', price: '₹1100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEBPCy_-FAU8K9a21JG9msk9R11zRQFx7KA&s' },
    { id: 14, name: 'Compost Tea', price: '₹1150', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZvdh72UC6b9k4x3uD08yPPfX95Ab0ZQHSA&s' },
    { id: 15, name: 'Kelp Meal', price: '₹1200', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlW4ZT9NyOUKdazytNV_SkECtpYQZcq_RoUg&s' },
    { id: 16, name: 'Blood Meal', price: '₹1250', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjeM9mXLX_loIc6HNNEg3HvO90KNSP-z2sw&s' },
    { id: 17, name: 'Feather Meal', price: '₹1300', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAkrLEH56nqPKtdkA7ASNQvyg41OuRqpZkQ&s' },
    { id: 18, name: 'Green Manure', price: '₹1350', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZqePnIehMVfja4mjNDoA4gUJprrT6FN00g&s' },
    { id: 19, name: 'Plant Food', price: '₹1400', image: 'https://images-cdn.ubuy.co.in/647be78b30ff8d2058765e73-total-biome-vegetable-plant-food-125ml.jpg' },
    { id: 20, name: 'Poultry Manure', price: '₹1450', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeBQfpGeXtxpsKaaGtwOozvLzijRHVGJ4eg&s' },
    { id: 21, name: 'Humic Acid', price: '₹1500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4YZLqqSDPqb6kDw62JjSRZqIqKsg3lUZAg&s' },
    { id: 22, name: 'Biochar', price: '₹1550', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHA8v_-CVCJ4rtFnoZpOonejbABjgVBRDaA&s' },
    { id: 23, name: 'Greenhouse Fertilizer', price: '₹1600', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkUQYmzqRMk5d2cdLoPi6prWLX7_3Y1xM-Zw&s' },
    { id: 24, name: 'Flower Fertilizer', price: '₹1650', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHn9CfubnoqrhTaCv-qx_GftNK3Hs5HsbV_Q&s' },
    { id: 25, name: 'Fruit Fertilizer', price: '₹1700', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-9F4b-fIlooGJ7MeesZiRy7Swjhbno8yIQ&s' },
    { id: 26, name: 'Vegetable Fertilizer', price: '₹1750', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmplxRQ1j-3_074-oqdiJXskEeR1vl43MdA&s' },
    { id: 27, name: 'Herb Fertilizer', price: '₹1800', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1-Eft5vQqjOfsfC9r9qjfcGAsiMpnvX8azw&s' },
    { id: 28, name: 'Organic Fertilizer', price: '₹1850', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw0ojY2SUnvEUhTQU5Ul6lapcdS1GRekvqtQ&s' },
    { id: 29, name: 'All Natural Fertilizer', price: '₹1900', image: 'https://m.media-amazon.com/images/I/41MifZcnC6S._AC_UF1000,1000_QL80_.jpg' },
    { id: 30, name: 'Granular Fertilizer', price: '₹1950', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8s4x16MKuZaIWTLFKwxB1TVHNHAcSYyqiwA&s' },
    { id: 31, name: 'Liquid Organic Fertilizer', price: '₹2000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ014JylfEmyatt11y0SSVzGK5g-73Sz9ZMWA&s' },
    { id: 32, name: 'Powdered Fertilizer', price: '₹2050', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFohkgFZSXv_ohq412uunAXFTN0K-vdWPKVg&s' },
    { id: 33, name: 'Plant Booster', price: '₹2100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1cxmCeFkTszymibao0Ww2VLY3PpJK-QOPg&s' },
    { id: 34, name: 'Root Growth Fertilizer', price: '₹2150', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-WlMYfjSEsvg6jVJpiexTXH-gK6Jk-MsMg&s' },
    { id: 35, name: 'Flower Booster', price: '₹2200', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9a3yH0HJfinafoMWVJRgpDYVvNczl0J4PQ&s' },
    { id: 36, name: 'Fruit Booster', price: '₹2250', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRd65uMIgReMmDCgaNOFTJTG5dNSOzS2FPWw&s' },
];

const Fertilizers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 10;

    const filteredProducts = fertilizerProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="product-page">
            <input
                type="text"
                placeholder="Search fertilizers..."
                className="search-bar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="product-list">
                {currentItems.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <button className="add-to-cart-button">Add to Cart</button>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={index + 1 === currentPage ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Fertilizers;
