import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
        <div className="contactContainer">
            <h1 className="contactSection">I'm glad you've made it this far! <br/> Describe bla bla and i'll get in touch as soon as possible. </h1>
            <form className="formContainer">
                <input name="name" type="text" className="feedback-input" placeholder="Name" />
                <input name="email" type="text" className="feedback-input" placeholder="Email" />
                <textarea name="text" className="textArea-input" placeholder="Comment"></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}
