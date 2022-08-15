import React from 'react'

const GalleryProp = (props) => {
    return (
        <>
            <div className="gallery-item">
                <img className="gallery-image" src={props.image} />
            </div>
        </>
    )
}

export default GalleryProp