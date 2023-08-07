import React from 'react'
import '../styles/home.css';
import Typewriter from 'typewriter-effect';
import 'animate.css';

const Home = () => {
  return (
    <div className='home' id='home'>
      <h3 className="animate__animated animate__fadeInDown">Hello I'm</h3>
      <h1 className="animate__animated animate__fadeInDown">Faraz.</h1>

      <h2 >
        <Typewriter
          options={
            {
              strings: ["Front End Developer", "Programmer"],
              autoStart: true,
              loop: true,
              // cursor: "|",
              wrapperClassName: "TypewriterPara",
            }
          }
        />
      </h2>

    </div>
  )
}

export default Home