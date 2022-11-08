import React from 'react'
import photo from '../assets/img/personalphoto.jfif'
import Carousel from 'react-multi-carousel';

function AboutMe() {
  return (
    <div className='aboutme' id='aboutme'>
        <h1>About Me</h1>
        <div className='personalphoto'>
        <img  src={photo}/>
        </div>
        <div className='description'>
            <p>
            I completed primary school in my hometown in the city of Presheva, 
            as well as high school. I started my higher studies in 2020 in Prishtina at the Faculty of Computer Science and Engineering.
            <br></br>
            <br></br>
            Im a person who is ambitious and determined. I always tried to get a chance to
            improve myself. I am a organized person and every time I take various techniques
            to study and to make my work done. Also i'm very friendly and I enjoy interacting
            with others. It is nothing for me to have a conversation with strangers, I'm 
            always comfortable with any of those. I want take risks and responsibility. Till
            now I have always been a leader to my school team and that was the reason which
            pushed me to become independent and persistent for myself also. My primary goal is to focus
            on result and moving toward with necessary steps.
            </p>
            </div>
    </div>
  )
}

export default AboutMe