import React from 'react';

const SliderOne = (props) => {
    return (
        <>
            <div className={`book-cell book-cell-${props.type}-color`}>
                <div className="book-img">
                    <img src={props.image} alt="" className="book-photo" />
                </div>
                <div className="book-content">
                    <div className="book-title">{props.title}</div>
                    <div className="book-author">by {props.author}</div>
                </div>
            </div>
        </>
    )
}

export default SliderOne