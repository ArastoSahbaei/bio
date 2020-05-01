import React from 'react'
import DeveloperImg from '../../utils/images/avatar.svg'
import LocationImg from '../../utils/images/location.svg'
import HeartImg from '../../utils/images/heart.svg'
import Quote from '../../utils/images/quote.svg'
import './About.css'

export const About = () => {
    return (
        <div className="aboutContainer">
            <p className="aboutMeTitle"> Arasto Sahbaei, 27. <br /><br /><br /> lé pitch
            <img className="developerImage" src={DeveloperImg} alt="" />
            </p>

            <div className="quoteContainer">
                <img className="developerImage" src={Quote} alt="" />
                <p className="aboutMeTitle4">" Building modern, state-of-the-art, user-friendly websites and applications is truly a passion of mine. "</p>
            </div>

            <div className="locationContainer">
                <img className="developerImage" src={LocationImg} alt="" />
                <p className="aboutMeTitle2"> Currently living in Gothenburg, Sweden</p>
            </div>

            <div className="heartContainer">
                <p className="aboutMeTitle3">Family, friends, my dog, outdoor life, chess & pizza!</p>
                <img className="developerImage" src={HeartImg} alt="" />
            </div>
        </div>
    )
}
