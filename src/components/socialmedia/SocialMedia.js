import React from 'react'
import './SocialMedia.css'

export default function Footer() {
    return (
        <div className="icon-bar">
            <a href="https://www.google.com/" className="facebook"> <i className="fa fa-facebook"> </i> </a>
            <a href="https://www.google.com/" className="github">   <i className="fa fa-github">   </i> </a>
            <a href="https://www.google.com/" className="linkedin"> <i className="fa fa-linkedin"> </i> </a>
            <a href="https://www.google.com/" className="youtube">  <i className="fa fa-youtube">  </i> </a>
        </div>
    )
}