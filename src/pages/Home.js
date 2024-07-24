import React from 'react';

const Home = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold">Welcome to Springdale Public School</h1>
      <p className="mt-4 text-lg">Nurturing young minds for a brighter future.</p>
      <div className="carousel mt-8">
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x300" alt="Sports Day" />
          <p className="mt-2">Annual Sports Day - Celebrating Excellence in Sports</p>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x300" alt="Science Exhibition" />
          <p className="mt-2">Science Exhibition - Showcasing Student Innovations</p>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x300" alt="Cultural Fest" />
          <p className="mt-2">Cultural Fest - Embracing Diversity and Creativity</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
