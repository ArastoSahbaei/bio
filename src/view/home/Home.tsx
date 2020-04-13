import React from 'react'
import './Home.css'
import FirstViewImage from '../../utils/images/idk2.jpeg'
import SelfImage from '../../components/selfimage/SelfImage'
import TextLooper from "../../components/textloop/TextLoop"

export const Home = () => {
    return (
        <div className="homeContainer">
            <img className="firstViewImage" src={FirstViewImage} alt={"Error"} />
            <div className="selfImage"> <SelfImage /> </div>
            <span className="greetTitle">Hi, I'm Arasto</span> <br />
            <span className="titleSpan"> Let's Build something <TextLooper /> together? </span>
            <br />

            <div className="buttonContainer">
                <div className="button">
                    <a href="/#"> CONTACT <span className="shift">›</span>
                    </a>
                    <div className="mask"></div>
                </div>
                <br />
                <div className="button">
                    <a href="/#">
                        ABOUT ME <span className="shift">›</span>
                    </a>
                    <div className="mask"></div>
                </div>
            </div>
        </div>
    )
}
