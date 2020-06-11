import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
        <div className="contactContainer">
            <h1 className="contactSection">This is the contact section</h1>
            <form className="formContainer">
                <input name="name" type="text" className="feedback-input" placeholder="Name" />
                <input name="email" type="text" className="feedback-input" placeholder="Email" />
                <textarea name="text" className="textArea-input" placeholder="Comment"></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}
