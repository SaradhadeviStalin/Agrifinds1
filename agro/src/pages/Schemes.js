import React, { useState } from 'react';
import './Schemes.css';

const Scheme = ({ title, details, image }) => {
  return (
    <div className="scheme-card">
      <div className="scheme-card-header">
        <h2>{title}</h2>
      </div>
      <div className="scheme-card-body">
        <img src={image} alt={title} className="scheme-image" />
        <p>{details}</p>
        <button className="select-button" onClick={() => window.location.href = '/experts'}>
          Select
        </button>
      </div>
    </div>
  );
};

const Schemes = () => {
  const schemesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const schemes = [
    {
      title: 'Pradhan Mantri Fasal Bima Yojana',
      details: 'Provides comprehensive crop insurance against natural calamities, pests, and diseases to ensure farmers\' financial stability.',
      image: 'https://tse2.mm.bing.net/th?id=OIP.BB944ZORWCwbnv6YMEPaSQHaD5&pid=Api&P=0&h=180',
    },
    {
      title: 'Pradhan Mantri Krishi Sinchai Yojana',
      details: 'Focuses on improving irrigation infrastructure to enhance agricultural productivity by providing financial assistance for irrigation facilities.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.jdLb1zikij0qSOqp6B4FZQHaDt&pid=Api&P=0&h=180',
    },
    {
      title: 'National Agricultural Market (e-NAM)',
      details: 'Creates a unified national market for agricultural commodities, offering a digital platform for better price discovery and transparency.',
      image: 'https://tse4.mm.bing.net/th?id=OIP.81p1_02GQu5_sgSVZssAIgHaEK&pid=Api&P=0&h=180',
    },
    {
      title: 'Soil Health Management Scheme',
      details: 'Improves soil health through testing, balanced fertilization, and organic farming practices. Financial assistance is provided for soil health.',
      image: 'https://cmv360.s3.ap-southeast-1.amazonaws.com/Soil_Health_card_features_cdc9724bd1.jpg',
    },
    {
      title: 'Kisan Credit Card Scheme',
      details: 'Provides easy access to credit for agricultural operations at affordable interest rates, helping farmers meet their short-term credit needs.',
      image: 'https://tse3.mm.bing.net/th?id=OIP.gOkCqhVQsCjzbZJewXuvGgHaEK&pid=Api&P=0&h=180',
    },
    {
      title: 'Deen Dayal Upadhyaya Gram Jyoti Yojana',
      details: 'Aims to provide 24x7 electricity to rural areas to improve agricultural productivity by upgrading power infrastructure.',
      image: 'https://tse2.mm.bing.net/th?id=OIP.VXoNA8dWm50txEvmULQkKwHaEO&pid=Api&P=0&h=180',
    },
    {
      title: 'Pradhan Mantri Krishi Sinchai Yojana',
      details: 'Provides financial assistance for irrigation infrastructure and water management select it now bring it better.',
      image: 'https://tse4.mm.bing.net/th?id=OIP.C9qbuIufBuW9IoVZ3_1nkgHaEK&pid=Api&P=0&h=180',
    },
    {
      title: 'National Food Security Mission',
      details: 'Aims to improve food security by increasing production of rice, wheat, pulses, and coarse cereals.',
      image: 'https://tse2.explicit.bing.net/th?id=OIP.gRdEJ2-2_1tuJ3idPSUyOQAAAA&pid=Api&P=0&h=180',
    },
    {
      title: 'Integrated Nutrient Management',
      details: 'Promotes the use of organic and inorganic fertilizers to maintain soil fertility and enhance crop yield.',
      image: 'https://tse3.mm.bing.net/th?id=OIP.-X-ogLJdJCKiaizyPI4BIwHaEK&pid=Api&P=0&h=180',
    },
    {
      title: 'National Mission on Sustainable Agriculture',
      details: 'Focuses on promoting sustainable farming practices and increasing productivity through soil health and water management.',
      image: 'https://tse4.mm.bing.net/th?id=OIP.U_J0x5gaDT6Oz6BSXP5o3wHaEJ&pid=Api&P=0&h=180',
    },
    {
      title: 'Rural Infrastructure Development Fund',
      details: 'Supports the development of rural infrastructure, including irrigation projects, roads, and bridges.',
      image: 'https://tse4.mm.bing.net/th?id=OIP.ycW8Pr9T7qt5jae23N8gVAHaEK&pid=Api&P=0&h=180',
    },
    {
      title: 'Agricultural Technology Management Agency',
      details: 'Facilitates the dissemination of agricultural technologies and practices to farmers for improved productivity.',
      image: 'https://tse4.mm.bing.net/th?id=OIP.r9nFZjw0MAwm5L2xanphWAHaEK&pid=Api&P=0&h=180',
    },
    {
      title: 'Mission Organic Value Chain Development for North Eastern Region',
      details: 'Promotes organic farming and value chain development in the North Eastern region of India.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.jQKDqft2Kzkre_Dk6tjQgwHaEK&pid=Api&P=0&h=180',
    }
  ];

  const indexOfLastScheme = currentPage * schemesPerPage;
  const indexOfFirstScheme = indexOfLastScheme - schemesPerPage;
  const currentSchemes = schemes.slice(indexOfFirstScheme, indexOfLastScheme);

  const nextPage = () => {
    if (currentPage < Math.ceil(schemes.length / schemesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="schemes">
      <h1>Our Agricultural Schemes</h1>
      <div className="scheme-grid">
        {currentSchemes.map((scheme, index) => (
          <Scheme key={index} title={scheme.title} details={scheme.details} image={scheme.image} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(schemes.length / schemesPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Schemes;
