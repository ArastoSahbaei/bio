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
                    description="das Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightlylorem description" />
            </div>
            <div className="cardName1">
                <Card
                    image={Gothenburg}
                    title="University of Gothenburg"
                    date="2020 - "
                    description="das Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightlylorem description" />
            </div>
            <div className="cardName2">
                <Card
                    image={ITHS}
                    title="IT-Högskolan"
                    date="2019 - 2020"
                    description="das Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightlylorem description" />
            </div>
            <div className="cardName3">
                <Card
                    image={RSM}
                    title="Ramboll"
                    date="2019 - 2019"
                    description="das Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightlylorem description" />
            </div>
            <div className="cardName4">
                <Card
                    image={VolvoPenta}
                    title="Volvo Penta"
                    date="2018 - 2019"
                    description="das Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightlylorem description" />
            </div>
        </div>
    )
}
