import React from 'react'
import './Home.css'
import FirstViewImage from '../../utils/images/idk2.jpeg'
import SelfImage from '../../components/selfimage/SelfImage'
import TextLooper from "../../components/textloop/TextLoop"
import { Link } from "react-scroll"

export const Home = () => {
    return (
        <div className="homeContainer">
            <img className="firstViewImage" src={FirstViewImage} alt={"Error"} />
            <div className="selfImage"> <SelfImage /> </div>
            <span className="greetTitle">Hi, I'm Arasto</span> <br />
            <span className="titleSpan"> Let's Build something <TextLooper /> together? </span>
            <br />

            <div className="buttonContainer">
                <Link activeClass="active"
                    to="contactContainer"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}>
                    <div className="button">
                        <a>
                            CONTACT <span className="shift">›</span>
                        </a>
                        <div className="mask"></div>
                    </div>
                </Link>

                <br />
                <Link activeClass="active"
                    to="aboutContainer"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}>
                    <div className="button">
                        <a>
                            ABOUT ME <span className="shift">›</span>
                        </a>
                        <div className="mask"></div>
                    </div>
                </Link>
            </div>
        </div >
    )
}
