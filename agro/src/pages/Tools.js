// src/pages/Tools.js
import React, { useState } from 'react';
import './Products.css';

const toolProducts = [
    { id: 1, name: 'Hand Tiller', price: '₹500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5ndBIINKwE6pN_t1CVqhoZKECNuDVcwLug&s' },
    { id: 2, name: 'Garden Hoe', price: '₹600', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwn_Uyvf9bRcdA5rfJeKyUPh-H7Key2wpFw&s' },
    { id: 3, name: 'Pruning Shears', price: '₹400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0jJhy7UOiY4usarobY5uMXbIx9K0qVBFew&s' },
    { id: 4, name: 'Watering Can', price: '₹350', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYlIVKEIsTK3I0ebVhPqZqGXODmJRzpDVQ9w&s' },
    { id: 5, name: 'Fertilizer Spreader', price: '₹700', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsE4lXd4Js2wKC3xtFuQ73nXvsD1SFmN1YPQ&s' },
    { id: 6, name: 'Rake', price: '₹450', image: 'https://gomulch.com/cdn/shop/products/RakeFG.jpg?v=1632951149&width=1200' },
    { id: 7, name: 'Spade', price: '₹550', image: 'https://image.made-in-china.com/202f0j00YfeUbLuaVicB/Steel-Shovel-with-Wooden-Handle-for-Farming-Tools.jpg' },
    { id: 8, name: 'Garden Fork', price: '₹600', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ38TAbERFh6B3HjN9UW3O6dPMG2ogj67GrWQ&s' },
    { id: 9, name: 'Weeder', price: '₹650', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6P8QqmN4jgXpaO25KnTB3ILb2hgq0OSu7g&s' },
    { id: 10, name: 'Irrigation Tool', price: '₹750', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSro310En_hjO_Rj9Os8EfEzX_5s8IG3Iz2HA&s' },
    // Add additional 7 tools here
    { id: 11, name: 'Garden Shears', price: '₹800', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZE4sY5MIhKDNIeHV3bT3bGlOtyt2Sk041EA&s' },
    { id: 12, name: 'Leaf Blower', price: '₹850', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_iWQpwHLxiEPojI3hgQ4oaShveuaNKg9pQ&s' },
    { id: 13, name: 'Hedge Trimmer', price: '₹900', image: 'https://images-cdn.ubuy.co.in/633b13f106203e68ab3697aa-40v-24-in-cordless-battery-hedge.jpg' },
    { id: 14, name: 'Lawn Mower', price: '₹950', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnusbDEXXGPpDcFraVNWbUqEHSEkIUKGuXJw&s' },
    { id: 15, name: 'Chainsaw', price: '₹1000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxep_T3mHE6UtnSgNKmtv74ezkq5mNeHTcAw&s' },
    { id: 16, name: 'Electric Tiller', price: '₹1050', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZylCdX3QNFk4xG10mGg9SUg1Jeu2dnzHBuw&s' },
    { id: 17, name: 'Post Hole Digger', price: '₹1100', image: 'https://www.kisankraft.com/wp-content/uploads/2019/07/KK-PPDE-62.jpg' },
    { id: 18, name: 'Cultivator', price: '₹1150', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIch-ZLhnuTUWM3g35KxX56o9FIH6d34_GCA&s' },
    { id: 19, name: 'Tractor', price: '₹1200', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34X-s4WRAeBkk2F9U13qmiy3CBMTffet1Jw&s' },
    { id: 20, name: 'Plow', price: '₹1250', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_v4rfL9pdUIKbpnz4u2V5TpcrCh9UvsJeIw&s' }
];

const Tools = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 10;

    const filteredProducts = toolProducts.filter(product =>
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
                placeholder="Search tools..."
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

export default Tools;
