import React from 'react'
import '../../styles/text/HeadlineSection.css'

function HeadlineSection(props) {
    return (
        <h2 className={props.color}>{props.title}</h2>
    )
}

export default HeadlineSection