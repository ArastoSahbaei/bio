import React from 'react'
import arastoImage from '../../utils/images/dog.png'
import './SelfImage.css'

export default function SelfImage() {
    return (
        <div>
            <img className="arastoImage" src={arastoImage} alt="Loading.." />
        </div>
    )
}