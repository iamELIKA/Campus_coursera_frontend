import React from 'react';
import Card from './components/card';

const HomePage = () => {
  return (
    <div>
      <Card
        imageUrl="path/to/image.jpg"
        name="John Doe"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      {/* Add more instances of the Card component as needed */}
    </div>
  );
};

export default HomePage;