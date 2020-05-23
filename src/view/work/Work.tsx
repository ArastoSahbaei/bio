import React from 'react'
import './Work.css'
import Card from "../../components/card/Card"
import cardImage from "../../utils/images/dog.png"

export const Work = () => {
    return (
        <div className="workContainer">
            <h1 className="workTitle">Previous work, recommendations & skills</h1>
            <div className="cardName">
                <Card
                    image={cardImage}
                    title="University of Gothenburg"
                    date="2016 - 2017" />
            </div>
        </div>
    )
}
