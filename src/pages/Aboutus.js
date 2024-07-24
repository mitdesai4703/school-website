import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="mb-4">
        Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
      </p>
      <h3 className="text-2xl font-bold mb-2">Vision</h3>
      <p className="mb-4">To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
      <h3 className="text-2xl font-bold mb-2">Mission</h3>
      <p className="mb-4">To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
      <h3 className="text-2xl font-bold mb-2">Principal's Message</h3>
      <p className="mb-4">At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
      <h3 className="text-2xl font-bold mb-2">Infrastructure and Facilities</h3>
      <ul className="list-disc list-inside">
        <li>State-of-the-art science and computer labs</li>
        <li>Spacious and well-equipped classrooms</li>
        <li>Library with a vast collection of books and digital resources</li>
        <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
      </ul>
    </div>
  );
};

export default AboutUs;
