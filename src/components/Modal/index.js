import React from 'react';

function Modal({ onClose, currentPhoto }) {
    const {name, category, description, index, url, githubURL} = currentPhoto;
    
  
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>

          <a href={url}>{url}</a><br />
          <a href={githubURL}>{githubURL}</a><br />

          <p>{description}</p><br />
          
          <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt="current category" />
          <br />

          <button onClick={onClose} type="button">Close</button>
            </div>
    </div>
    );
  }
  
  export default Modal;