import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import FooterPage from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: "Here are the projects that I have created, collaborated with and launched.",
    },
    { name: 'resume', description: "Where Allen came from" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
            
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
      <FooterPage></FooterPage>
    </div>
  );

  
}

export default App;