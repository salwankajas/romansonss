
import React, { useLayoutEffect } from 'react'
import "./dist/style.css"
import { useEffect, useState } from 'react'
import BookCell from './SliderOne'
const BookSlider = () => {
  console.log(window.location.pathname);
  useEffect(() => {
    const reloadCount = sessionStorage.getItem('reloadCount');
    if(reloadCount < 1) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloadCount');
    }
    const script = document.createElement("script");
    script.src = "js/booksliderauto.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }

  },[]);
  return (
    <>
      <div style={{ marginTop: "5rem" }} className="book-store">
        <div className="book-slide">
          <div className="book js-flickity" data-flickity-options='{ "wrapAround": true }'>
            <BookCell type="dark" image={require('./dist/img/1.jpg')} title="പൊതുവിജ്ഞാന വിജയമന്ത്രങ്ങൾ" author="Vipin Thomas" />
            <BookCell type="light" image={require('./dist/img/2.jpg')} title="വധശിക്ഷയ്ക്കു വിധിക്കപ്പെട്ടവന്റെ അവസാന ദിനങ്ങൾ" author="Victor Hugo" />
            <BookCell type="dark" image={require('./dist/img/3.jpg')} title="Pavlon And The Dog" author="Sanjeev Kalarikkathara" />
            <BookCell type="light" image={require('./dist/img/4.jpg')} title="വിശ്വസാഹിത്യ പാഠങ്ങൾ" author="Dr.Munjinada Padmakumar" />
            <BookCell type="dark" image={require('./dist/img/5.jpg')} title="ഗീതാഞ്ജലി" author="" />
            <BookCell type="light" image={require('./dist/img/6.jpg')} title="ഇന്ത്യ ചരിത്രം കുട്ടികൾക്ക്" author="Dr.Munjinada Padmakumar" />
            <BookCell type="light" image={require('./dist/img/7.jpg')} title="Slvador Dali" author="Dr.Munjinada Padmakumar" />
            <BookCell type="light" image={require('./dist/img/8.jpg')} title="Gabriel Garcia Marques" author="Dr.Munjinada Padmakumar" />
            <BookCell type="light" image={require('./dist/img/9.jpg')} title="മലയാള ഗദ്യചരിത്രം" author="Dr. Shyni Thomas" />
            <BookCell type="light" image={require('./dist/img/10.jpg')} title="Grigori" author="Dr. Munjinad Padmakumar" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BookSlider