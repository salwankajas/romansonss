import React from 'react'

const GalleryProp = (props) => {
    return (
        <div>
            <div className="gallery-item">
                <img className="gallery-image" src={props.image} />
            </div>
        </div>
    )
}

export default GalleryProp