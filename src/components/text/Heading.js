import React from 'react'
import '../../styles/text/HeadlineSection.css'

function Heading(props) {
    return (
        <h2 className={props.color}>{props.title}</h2>
    )
}

export default Heading