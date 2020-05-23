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
                    date="2016 - 2017"
                    description="das Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightlylorem description" />
            </div>
            <div className="cardName2">
                <Card
                    image={cardImage}
                    title="University of Gothenburg"
                    date="2016 - 2017"
                    description="das Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightlylorem description" />
            </div>
            <div className="cardName3">
                <Card
                    image={cardImage}
                    title="University of Gothenburg"
                    date="2016 - 2017"
                    description="das Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightlylorem description" />
            </div>
            <div className="cardName4">
                <Card
                    image={cardImage}
                    title="University of Gothenburg"
                    date="2016 - 2017"
                    description="das Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightlylorem description" />
            </div>
        </div>
    )
}
