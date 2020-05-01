import React from 'react'
import DeveloperImg from '../../utils/images/developer.svg'
import LocationImg from '../../utils/images/location.svg'
import HeartImg from '../../utils/images/heart.svg'
import Quote from '../../utils/images/quote.svg'
import './About.css'

export const About = () => {
    return (
        <div className="aboutContainer">
            <p className="aboutMeTitle">
                Arasto Sahbaei, 27. 
                <img className="developerImage" src={DeveloperImg} alt="" />
                <br />
                <img className="developerImage" src={Quote} alt="" />
                " Building modern, state-of-the-art, user-friendly websites and applications is truly a passion of mine. "</p>

            <p className="aboutMeTitle2">
                Currently living in Gothenburg, Sweden
                <img className="developerImage" src={LocationImg} alt="" />
            </p>

            <p className="aboutMeTitle3">
                <img className="developerImage" src={HeartImg} alt="" />
                Family, friends, my dog, outdoor life, chess & pizza!
            </p>
        </div>
    )
}
