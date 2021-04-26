import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Allen</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
            My name is Allen. I'm 38 years old, from the Niagara Region in Ontario. I work in digital marketing, mostly in the Google Ecosystem
            I have two young boys, aged 4 and 2 years old. I also have a small dog named Molly. My interests are being active, hiking, running, 
            jogging ang golfing. When the gyms are closed during lockdowns, you can find me there as well!
        </p>
      </div>
    </section>
  )
}

export default About