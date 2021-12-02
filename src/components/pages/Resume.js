import React from 'react'
import htmlLogo from '../../images/html.png'
import cssLogo from '../../images/css.png'
import javascriptLogo from '../../images/javascript.png'
import nodeLogo from '../../images/nodejs.png'
import mysqlLogo from '../../images/mysql.png'
import reactLogo from '../../images/react.png'
import Esports from '../../images/esportspage.jpg'
import Midnightpage from '../../images/midnightpage.jpg'
import Gamewatch from '../../images/gamepage.jpg'
import Quizpage from '../../images/quizpage.jpg'
import Weather from '../../images/weatherpage.jpg'
import Notepage from '../../images/notepage.jpg'
export default function Skills() {
    return (
        <div className='resumeDiv'>
        <a href="https://docs.google.com/document/d/1ZsNZBBRQuoD45Msg1b9llARjsvTBsFCZ/edit?usp=sharing&ouid=115073050941282450900&rtpof=true&sd=true"><h1>Resume</h1></a>
        <div className='logos'>
        <img src={htmlLogo } className="htmlimg" alt="logo"  />
        <img src={cssLogo } className="cssimg" alt="logo"  />
        <img src={javascriptLogo} className="jsimg" alt="logo"  />
        <img src={nodeLogo} className="nodeimg" alt="logo"  />
        <img src={mysqlLogo} className="mysqlimg" alt="logo"  />
        <img src={reactLogo} className="reactimg" alt="logo" height='140px' width='340px' />

        <a href='https://ernie2021.github.io/teamprojectone/' target='https://ernie2021.github.io/teamprojectone/' ><img
      className="d-block w-100"
      src={Esports}
      alt="First slide"
      width='180px'
      height="280px"
      
    /></a>
        
        
        <a href='https://swooshgawd.github.io/Weather-App-Dashboard/' target='https://swooshgawd.github.io/Weather-App-Dashboard/' ><img
      className="d-block w-100"
      src={Weather}
      alt="First slide"
      width='180px'
      height="280px"
      
    /></a>
        
        <a href='https://swooshgawd.github.io/Code-Quiz/' target='https://swooshgawd.github.io/Code-Quiz/' ><img
      className="d-block w-100"
      src={Quizpage}
      alt="First slide"
      width='180px'
      height="280px"
      
    /></a>

    
     
    
    
     
    <a href='https://midnight-motorsports.herokuapp.com/' target='https://midnight-motorsports.herokuapp.com/'><img
      className="d-block w-100"
      src={Midnightpage}
      alt="Second slide"
      width='180px'
      height="280px"
    /></a>
    
    <a href='https://mysterious-spire-75906.herokuapp.com/' target='https://mysterious-spire-75906.herokuapp.com/'><img
      className="d-block w-100"
      src={Notepage}
      alt="Second slide"
      width='180px'
      height="280px"
    /></a>
    
    <a href='http://www.gamewatch.reviews/' target='http://www.gamewatch.reviews/'><img
      className="d-block w-100"
      src={Gamewatch}
      alt="Second slide"
      width='180px'
      height="280px"
    /></a>
      </div>
      </div>
    )
}
