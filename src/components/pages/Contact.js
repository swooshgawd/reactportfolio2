import React from 'react'

export default function Contact() {
    return (
        <div>
         
<div className='submitBox'>
     <h1>Contact Me</h1>
<input className='fullName' type='text' placeholder='full name'required />
<input className='emailbox' type='email' placeholder='email'required />
<input className='textbox' type='text' placeholder='comments'required />
<button color='teal' type='submit'>Submit</button>
</div>  
        </div>
    )
}
