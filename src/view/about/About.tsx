import React from 'react'
import DeveloperImg from '../../utils/images/developer.svg'
import './About.css'

export const About = () => {
    return (
        <div className="aboutContainer">
            <p className="aboutMeTitle">
                <img className="developerImage" src={DeveloperImg} alt="LOL" />
                I'm a web designer / developer in Gothenburg, Sweden. Building modern, state-of-the-art,
                user-friendly websites and applications is truly a passion of mine.</p>
            <p className="aboutMeTitle2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis impedit voluptate tempore unde molestiae odit, hic minus repellat non.
                <img className="developerImage" src={DeveloperImg} alt="LOL" />
            </p>
        </div>
    )
}
