import React from 'react'
import github from '../images/github.png'
import linkedIn from '../images/linkedin.png'


export default function Footer() {
    return (
        <footer>
<div className='linksbox'>


<a href='https://github.com/swooshgawd' target='https://github.com/swooshgawd'><img src={github } className="githubimg" alt="logo" height='170px' width='230px' /></a>

<a href='https://www.linkedin.com/in/parth-bhatt-0b5929145/' target='https://www.linkedin.com/in/parth-bhatt-0b5929145/'><img src={linkedIn } className="linkedinimg" alt="logo" height='190px' width='190px' /></a>

</div>

</footer>
    )
}
