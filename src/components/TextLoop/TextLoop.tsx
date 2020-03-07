import React from 'react'
import TextLoop from "react-text-loop"
import "./TextLoop.css"

export default function TextLooper() {
    return (
        <>
        <TextLoop springConfig={{ stiffness: 180, damping: 12 }}>
            <span className="aesthetic">       Aesthetic        </span>
            <span className="sophisticated">   Sophisticated    </span>
            <span className="cool">            COOL             </span>
            <span className="modern">          Modern           </span>
            <span className="thriving">        Thriving         </span>
            <span className="beautiful">       Beautiful        </span>
        </TextLoop>
        </>
    )
}