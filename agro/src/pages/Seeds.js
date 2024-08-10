// src/pages/Seeds.js
import React, { useState } from 'react';
import './Products.css';

const seedProducts = [
    { id: 1, name: 'Tomato Seeds', price: '₹100', image: 'https://cdn.shopify.com/s/files/1/0722/2059/files/TOMATO-ARYAMAN-3500-SDS.jpg?v=1682425623' },
    { id: 2, name: 'Carrot Seeds', price: '₹120', image: 'https://4.imimg.com/data4/BI/TP/MY-2762704/carrot-seeds-500x500.jpg' },
    { id: 3, name: 'Cucumber Seeds', price: '₹150', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/c/w/c/200-xxl-5-cucumber-seeds-marketmore-200-seeds-vibex-original-imaggry9p6npt4th.jpeg?q=20&crop=false' },
    { id: 4, name: 'Lettuce Seeds', price: '₹110', image: 'https://media.istockphoto.com/id/1132854867/photo/a-heap-of-quality-seeds-of-lettuce-for-your-beautiful-garden-can-be-used-for-create-new.jpg?s=612x612&w=0&k=20&c=gTKty3f74hBz7xZDhehoi3OpY1GmY43vljm1YKOfOQM=' },
    { id: 5, name: 'Spinach Seeds', price: '₹130', image: 'https://shashingautam.in/wp-content/uploads/2019/12/Hybrid-Spinach-Seeds-available-with-Shashi-N-Gautam-Web-Shop.jpg' },
    { id: 6, name: 'Pea Seeds', price: '₹140', image: 'https://media.istockphoto.com/id/172437645/photo/green-peas.jpg?s=612x612&w=0&k=20&c=XteHXr-EAxHNwccUupGiCpxOARxVciI6B8Fztg8FTpU=' },
    { id: 7, name: 'Radish Seeds', price: '₹120', image: 'https://seed2plant.in/cdn/shop/products/42.png?v=1705038392&width=3840' },
    { id: 8, name: 'Chili Seeds', price: '₹160', image: 'https://5.imimg.com/data5/BD/ON/SD/SELLER-13580811/ll-500x500.jpg' },
    { id: 9, name: 'Bean Seeds', price: '₹170', image: 'https://5.imimg.com/data5/SELLER/Default/2021/9/ID/VU/WN/132767692/40026595-4-3-bb-royal-soya-bean-jpg-500x500.jpg' },
    { id: 10, name: 'Corn Seeds', price: '₹180', image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/312004581/SW/WI/QA/189628169/corn-seeds-1.jpeg' },
    { id: 11, name: 'Cabbage Seeds', price: '₹190', image: 'https://plantlane.com/cdn/shop/products/8190_q57pqL._SL1500_2d67c65b-dc6d-49be-bac3-c3e15af280e3.jpg?v=1681883662' },
    { id: 12, name: 'Beetroot Seeds', price: '₹200', image: 'https://growguru.co.za/cdn/shop/products/starke-ayres-beetroot-seeds-crimson-globe-28616100347993_500x500.jpg?v=1636715211' },
    { id: 13, name: 'Pumpkin Seeds', price: '₹210', image: 'https://satopradhan.com/cdn/shop/products/pumpkin-seeds-edible-raw-unsalted-kernels-200g-high-quality-natural-and-organic-without-additives-satopradhan-1-13266932957334.jpg?v=1696574810' },
    { id: 14, name: 'Zucchini Seeds', price: '₹220', image: 'https://agrijunction.s3.ap-south-1.amazonaws.com/uploads/products/meta/sg0rkW6g8Bf2gp6nwp3VnCpy5mjT8AUw8V0V3xT1.jpg' },
    { id: 15, name: 'Squash Seeds', price: '₹230', image: 'https://royalfantasy.in/cdn/shop/products/Green-Pumpkin-Seeds-1.jpg?v=1627729015' },
    { id: 16, name: 'Onion Seeds', price: '₹240', image: 'https://content.jdmagicbox.com/rep/b2b/bhima-super-onion-seed/bhima-super-onion-seed-3.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit' },
    { id: 17, name: 'Garlic Seeds', price: '₹250', image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/f/w/7/90-garlic-hybrid-vegetable-seeds-g1345-kanaya-original-imagk5yaq3vpgeeb.jpeg?q=90&crop=false' },
    { id: 18, name: 'Radish Seeds', price: '₹260', image: 'https://media.istockphoto.com/id/1087223634/photo/bunch-of-dry-raw-radish-seeds-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Rlic7Yrb4pDrAYZcNj-uxqKM1gQBmxSdp-fcavbmU9A=' },
    { id: 19, name: 'Kale Seeds', price: '₹270', image: 'https://4.imimg.com/data4/GV/LR/MY-20677493/beet-seed-500x500.jpg' },
    { id: 20, name: 'Turnip Seeds', price: '₹280', image: 'https://www.agrifarming.in/wp-content/uploads/2018/07/Turnip-Seeds..jpg' },
    { id: 21, name: 'Broccoli Seeds', price: '₹290', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2z9_FUjgwH_hJJMvnvnD9cmvI2x_gNxTbDw&s' },
    { id: 22, name: 'Cauliflower Seeds', price: '₹300', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyWGBJ7CeNt4C86b0Jpg9xqTyFeL49KUVpg&s' },
    { id: 23, name: 'Celery Seeds', price: '₹310', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrMqpWXfzgA1PlD87L_zbF-u4RsyP77FHvQ&s' },
    { id: 24, name: 'Beet Seeds', price: '₹320', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmNFWXAwlBOQaBtWTLVCN7QvjkMR81Kv0xQ&s' },
    { id: 25, name: 'Chard Seeds', price: '₹330', image: 'https://urjaseeds.com/cdn/shop/products/SIWSSHCHARDREDRUBY_300x.png?v=1631174449' },
    { id: 26, name: 'Mustard Seeds', price: '₹340', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lojqQG84sw3kGSUWlw8nzgv7dKnQHAzw2g&s' },
    { id: 27, name: 'Coriander Seeds', price: '₹350', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMYW-KKsZ-qOXq6u5uoWA8NH-UvXmaN7WXg&s' },
    { id: 28, name: 'Dill Seeds', price: '₹360', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYh_YNElkMugpOxzoC3tdKWOg9r0PBRNpVaw&s' },
    { id: 29, name: 'Fennel Seeds', price: '₹370', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSSDItLtMod2EiVjFcjIjUGXcFB-1NYn21gQ&s' },
    { id: 30, name: 'Thyme Seeds', price: '₹380', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTx-SnZCYf6c22K7K9eWErSonv1Hyeh7iHAQ&s' },
    { id: 31, name: 'Oregano Seeds', price: '₹390', image: 'https://www.ugaoo.com/cdn/shop/files/1_50eeefdf-7393-4856-9bef-a4e64c08afe1.jpg?v=1722592830&width=750' },
    { id: 32, name: 'Basil Seeds', price: '₹400', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIS6OzfvWQQ4XrOGa1goYz665aVuclBcenGQ&s' },
    { id: 33, name: 'Mint Seeds', price: '₹410', image: 'https://www.ugaoo.com/cdn/shop/files/1_50eeefdf-7393-4856-9bef-a4e64c08afe1.jpg?v=1722592830' },
    { id: 34, name: 'Chives Seeds', price: '₹420', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsMm53Cfwj7A3LtZhLuIa2270OXa_1_T8U1w&s' },
    { id: 35, name: 'Parsley Seeds', price: '₹430', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOlpm-5DZngHHRFi3p4LejkwyACI3cCeIkg&s' },
    { id: 36, name: 'Sage Seeds', price: '₹440', image: 'https://farmgokart.com/wp-content/uploads/2022/05/oregano-1.png' },
];

const Seeds = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 10;

    const filteredProducts = seedProducts.filter(product =>
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
                placeholder="Search seeds..."
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

export default Seeds;
