import React from 'react'
import DeveloperImg from '../../utils/images/avatar.svg'
import LocationImg from '../../utils/images/location.svg'
import HeartImg from '../../utils/images/heart.svg'
import Quote from '../../utils/images/quote.svg'
import './About.css'

export const About = () => {
    return (
        <div className="aboutContainer">
            <div className="pitchContainer">
                <p className="aboutMeTitle"> Arasto Sahbaei, 27.</p>
                <img className="developerImage" src={DeveloperImg} alt="" />
                <p className="pitchText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti omnis quidem inventore, aliquam, eligendi nostrum cumque laudantium, voluptate impedit deserunt molestias minus hic similique repellat. Consectetur unde dolores a error?</p>
                <p className="pitchText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti omnis quidem inventore, aliquam, eligendi nostrum cumque laudantium, voluptate impedit deserunt molestias minus hic similique repellat. Consectetur unde dolores a error?</p>
                <p className="pitchText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti omnis quidem inventore, aliquam, eligendi nostrum cumque laudantium, voluptate impedit deserunt molestias minus hic similique repellat. Consectetur unde dolores a error?</p>
            </div>
            <div className="quoteContainer">
                <img className="developerImage" src={Quote} alt="" />
                <p className="aboutMeTitle4">" Building modern, state-of-the-art, user-friendly websites and applications is truly a passion of mine. "</p>
            </div>

            <div className="locationContainer">
                <img className="developerImage" src={LocationImg} alt="" />
                <p className="aboutMeTitle2"> Currently living in Gothenburg, Sweden</p>
            </div>

            <div className="heartContainer">
                <img className="heartImage" src={HeartImg} alt="" />
                <p className="aboutMeTitle3">My heart beats for Family, friends, my dog, outdoor life, chess & pizza!</p>
            </div>
        </div>
    )
}
