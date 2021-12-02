import React from 'react'
import Picture from '../../images/parth.JPG'
export default function About() {
    return (
        <div className="about">
        <div>
          
        </div>
        <div>
          <p className='aboutMe'>
            <img src={Picture} className="portrait" alt="logo" height='390px' width='332px' />
            <h3>ME</h3><br />
            Hi, my name is Parth Bhatt and I am 28 years old! As a new student of coding, my goal is to develop multiple new apps in the future that will drastically improve people's quality of life. I hope to be able to learn a lot of new skills in the next few months, which will then propel me towards a better lifestyle.

            <div></div>
          </p>

        </div>
      </div>
    )
}
