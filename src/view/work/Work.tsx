import React from 'react'
import './Work.css'
import Card from "../../components/card/Card"
import Gothenburg from "../../utils/images/gothenburg.png"
import ITHS from "../../utils/images/ithogskolan.png"
import RSM from "../../utils/images/RSM.png"
import VolvoPenta from "../../utils/images/volvoPenta.png"
import Alten from "../../utils/images/Alten.png"

export const Work = () => {
    return (
        <div className="workContainer">
            <h1 className="workTitle">Previous work, recommendations & skills</h1>
            <div className="cardName">
                <Card
                    image={Alten}
                    title="Alten"
                    date="2017 - "
                    description="After doing my internship at Alten during my studies I was offered an employment which is still ongoing." />
            </div>
            <div className="cardName1">
                <Card
                    image={Gothenburg}
                    title="University of Gothenburg"
                    date="2020 - "
                    description="Major system integration with the purpose to effortless maintain user data within the corporation. Together with my tech-lead we shared the responsibility for the development of the client including UI/UX." />
            </div>
            <div className="cardName2">
                <Card
                    image={ITHS}
                    title="IT-Högskolan"
                    date="2019 - 2020"
                    description="Reunited with the teachers that once taught me, I was the course coordinator & lecturer for the class of 2019 during the first semester." />
            </div>
            <div className="cardName3">
                <Card
                    image={RSM}
                    title="Ramboll"
                    date="2019 - 2019"
                    description="Given a finished UI design I was assigned to implement it to update their old client which was previously built with the JSF framework." />
            </div>
            <div className="cardName4">
                <Card
                    image={VolvoPenta}
                    title="Volvo Penta"
                    date="2018 - 2019"
                    description="Proof-of-concept project to provide the customer a security system with purpose of preventing counterfeit products. 
                    I participated throughout the lifespan of this project and had great success in leading the project from the very first meeting until we had a finished implementation." />
            </div>
        </div>
    )
}
