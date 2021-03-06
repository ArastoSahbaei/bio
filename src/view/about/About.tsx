import React from 'react'
import SuperHeroImg from '../../utils/images/superhero.svg'
import ThinkingImg from '../../utils/images/thinking.svg'
import Quote from '../../utils/images/quote.svg'
import './About.css'

export const About = () => {
    return (
        <div className="aboutContainer">
            <img className="superHeroImage" src={SuperHeroImg} alt="" />
            <div className="pitchContainer">
                <p className="aboutMeTitle"> Briefly About Me</p>
                <p className="pitchText">I was fortunate to find passion at an early phase of life and have spent most of the time doing what I love. Computers was introduced to me at a very young age and with the curiosity of a child, which has stuck to me to this day, I’ve managed to accumulate major knowledge in the fields within.
                Today I primarily create websites using modern JavaScript frameworks React & Angular, but I am also comfortable working with server technology & databases such as Node.js, Java & NoSQL & SQL.
                In later years I have also received formal education as I studied computer science at the university to help me widen and deepen my knowledge.
                My craft is precise and i take great pleasure in what i do.
                </p>
            </div>
            <div className="quoteContainer">
                <img className="quoteImage" src={Quote} alt="" />
                <p className="aboutMeTitle4">" Building modern, state-of-the-art, user-friendly websites and applications is truly a passion of mine "</p>
            </div>

            <img className="thinkingImg" src={ThinkingImg} alt="" />
            <div className="heartContainer">
                <p className="whatIDoTitle">What i do</p>
                <p className="whatIDoText">alot of text about what i do</p>
                {/*     <p className="">Would you like to discuss a project? Contact me</p> */}
            </div>
        </div>
    )
}
