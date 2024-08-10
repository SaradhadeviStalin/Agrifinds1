// src/pages/Experts.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Experts.css';

const Experts = () => {
    // Indian experts
    const experts = [
        { id: 1, name: 'Dr. Arun Sharma', expertise: 'Crop Science', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNX5hlrUryTySAf0FvJx_gv752NdaQycaWjEbYZ1--8emc_fe8jihb4wn9EDG523dSW8&usqp=CAU', contact: 'arun.sharma@example.com',phone: '+912233445566' },
        { id: 2, name: 'Dr. Priya Patel', expertise: 'Soil Fertility', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1UUyvq6KQZ2leSESHAB6eGcnmvYrjGLSOw&s', contact: 'priya.patel@example.com',phone: '+915566778899' },
        { id: 3, name: 'Rajesh Kumar', expertise: 'Lab Technician', contact: 'rajesh.kumar@example.com', phone: '+911122334455', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrJKiCD1PbYyXv23ecgdlvRKC8dHU4koW0y7gkp4vPY5xBGGsGkOZFWH93aV9t3Z3spu4&usqp=CAU' },
        { id: 4, name: 'Anita Singh', expertise: 'Agricultural Expert', contact: 'anita.singh@example.com', phone: '+912233445566', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQFgRAf4oNYC5qPF8OZdrgJBXWoW0qE9wpQ&s' },
        { id: 5, name: 'Vikram Desai', expertise: 'Testing Specialist', contact: 'vikram.desai@example.com', phone: '+913344556677', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDa36JJRJAjoZ0CYPprhPbrgeeQ5G-0IT5DQ&s' },
        { id: 6, name: 'Sanya Kapoor', expertise: 'Pest Management', contact: 'sanya.kapoor@example.com', phone: '+914455667788', imageUrl: 'https://media.licdn.com/dms/image/D5603AQFR81B6nPTIPA/profile-displayphoto-shrink_200_200/0/1721122912242?e=2147483647&v=beta&t=3MiaOWqAfhs1_kuVFoesiMFOUwy9GMAOP9IHDtLJgUM' },
        { id: 7, name: 'Ravi Mehta', expertise: 'Fertilizer Expert', contact: 'ravi.mehta@example.com', phone: '+915566778899', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiBc32IVtOmqncHH-VTaX_x9UdF71c35GkA&s' },
        { id: 8, name: 'Neha Sharma', expertise: 'Irrigation Specialist', contact: 'neha.sharma@example.com', phone: '+916677889900', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV9p4PVlDfN-Hc2uo2mZzfLm86AFzFbvh4Q&s' },
        { id: 9, name: 'Arjun Reddy', expertise: 'Soil Scientist', contact: 'arjun.reddy@example.com', phone: '+917788990011', imageUrl: 'https://media.licdn.com/dms/image/D5603AQGfoF55bzanMQ/profile-displayphoto-shrink_200_200/0/1692040805475?e=2147483647&v=beta&t=BuxxHSjvmh8jaZ-W766Do94X1cpmxsyJmCuBLmn86ks' },
    ];

    return (
        <div className="experts-container">
            <h1>Meet Our Experts</h1>
            <div className="experts-list">
                {experts.map(expert => (
                    <div key={expert.id} className="expert-card">
                        <img src={expert.imageUrl} alt={expert.name} className="expert-image" />
                        <h2>{expert.name}</h2>
                        <p>{expert.expertise}</p>
                        <p>Contact: {expert.contact}</p>
                        <p>Phone: {expert.phone}</p>
                        <Link to="/about" className="know-more-button">Know More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experts;
