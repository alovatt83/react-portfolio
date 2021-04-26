import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      name: 'Trivia Game',
      category: 'projects',
      description: 'Timed Javascript Trivia Game / Quiz',
      url: 'https://alovatt83.github.io/bootcamp-trivia/',
      githubURL: 'https://github.com/alovatt83/bootcamp-trivia'
    },
    {
      name: 'Password Generator',
      category: 'projects',
      description: 'Randomly generate safe and secure passwords based on your own parameter inputs.',
      url: 'https://alovatt83.github.io/password-generator/',
      githubURL: 'https://github.com/alovatt83/password-generator'
    },
    {
      name: 'Covid Dashboard',
      category: 'projects',
      description: 'Using the Canadian Covid Vaccine / Cases API, easily select by region to see all the current Covid Case / Vaccination Data.',
      url: 'https://runtime-terrors-organization.github.io/covid-dashboard-application/',
      githubURL: 'https://github.com/Runtime-Terrors-Organization/covid-dashboard-application'
    },
    {
      name: 'Budget Tracker',
      category: 'projects',
      description: 'Easily keep track of your spending and deposits with the offline / online budget tracker that will automatically save your offline activity once the server comes back online.',
      url: 'https://pwa-budget-tracker-uoft.herokuapp.com/',
      githubURL: 'https://github.com/alovatt83/PWA-BudgetTracker'
    },
    {
      name: 'mnmlize',
      category: 'projects',
      description: 'Personal Inventory Management System helping you keep track of your personal belongs and minimalize waste by scheduling items for consumption based on expiry dates.',
      url: 'https://mnmlize.herokuapp.com/',
      githubURL: 'https://github.com/P-I-M/Personal-Inventory-Management-'
    },
    {
      name: 'Tech Blog',
      category: 'projects',
      description: "Easily start conversations, add comments and view comments that other users have posted based on today's current technological advances. ",
      url: 'https://techblog-uoft.herokuapp.com',
      githubURL: 'https://github.com/alovatt83/Module-14-MVC'
    },
    {
      name: 'Resume',
      category: 'resume',
      description: 'Allen L has worked in the automotive world for 15 years, starting in sales, progessing to management and shifting into digital marketing.',
      url: 'https://www.docdroid.net/WyjIuyO/fake-resume-pdf',
    }
  ]);

  const [currentPhoto, setCurrentPhoto] = useState();
  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    
    <div>
      {isModalOpen && (
  <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
)}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;