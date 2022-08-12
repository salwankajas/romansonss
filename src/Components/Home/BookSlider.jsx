import React, { useLayoutEffect } from 'react'
import "./dist/style.css"
import { useEffect, useState } from 'react'
const BookSlider = () => {
  return (
    <>
      <div style={{ marginTop: "5rem" }} className="book-store">
        <div className="book-slide">
          <div className="book js-flickity" data-flickity-options='{ "wrapAround": true }'>
            <div className="book-cell book-cell-light-color">
              <div className="book-img">
                <img src={require("./dist/img/1.jpg")} alt="" className="book-photo" />
              </div>
              <div className="book-content">
                <div className="book-title">പൊതുവിജ്ഞാന വിജയമന്ത്രങ്ങൾ</div>
                <div className="book-author">by Vipin Thomas</div>



              </div>
            </div>
            <div className="book-cell book-cell-dark-color">
              <div className="book-img">
                <img src={require("./dist/img/2.jpg")} alt=""
                  className="book-photo" />
              </div>
              <div className="book-content">
                <div className="book-title">വധശിക്ഷയ്ക്കു വിധിക്കപ്പെട്ടവന്റെ അവസാന ദിനങ്ങൾ</div>
                <div className="book-author">by Victor Hugo</div>

              </div>
            </div>
            <div className="book-cell book-cell-light-color">
              <div className="book-img">
                <img src={require("./dist/img/3.jpg")} alt=""
                  className="book-photo" />
              </div>
              <div className="book-content">
                <div className="book-title">Pavlon And The Dog</div>
                <div className="book-author">by Sanjeev Kalarikkathara</div>

              </div>
            </div>
            <div className="book-cell book-cell-dark-color">
              <div className="book-img">
                <img src={require("./dist/img/4.jpg")} alt=""
                  className="book-photo" />
              </div>
              <div className="book-content">
                <div className="book-title">വിശ്വസാഹിത്യ പാഠങ്ങൾ</div>
                <div className="book-author">by Dr.Munjinada Padmakumar</div>


              </div>
            </div>
            <div className="book-cell book-cell-light-color">
              <div className="book-img">
                <img src={require("./dist/img/5.jpg")} alt=""
                  className="book-photo" />
              </div>
              <div className="book-content">
                <div className="book-title">ഗീതാഞ്ജലി</div>
                <div className="book-author">by Rabindranath Tagore</div>



              </div>
            </div>
            <div className="book-cell book-cell-dark-color">
              <div className="book-img">
                <img src={require("./dist/img/6.jpg")} alt=""
                  className="book-photo" />
              </div>
              <div className="book-content">
                <div className="book-title">ഇന്ത്യ ചരിത്രം കുട്ടികൾക്ക്</div>
                <div className="book-author">by Dr.Munjinada Padmakumar</div>


              </div>
            </div>
            <div className="book-cell book-cell-light-color">
              <div className="book-img">
                <img src={require("./dist/img/7.jpg")} alt=""
                  className="book-photo" />
              </div>
              <div className="book-content">
                <div className="book-title">Slvador Dali</div>
                <div className="book-author">by Dr.Munjinada Padmakumar</div>


              </div>
            </div>
            <div className="book-cell book-cell-dark-color">
              <div className="book-img">
                <img src={require("./dist/img/8.jpg")} alt=""
                  className="book-photo" />
              </div>
              <div className="book-content">
                <div className="book-title">Gabriel Garcia Marques</div>
                <div className="book-author">by Dr.Munjinada Padmakumar</div>


              </div>
            </div>
            <div className="book-cell book-cell-light-color">
              <div className="book-img">
                <img src={require("./dist/img/9.jpg")} alt=""
                  className="book-photo" />
              </div>
              <div className="book-content">
                <div className="book-title">മലയാള ഗദ്യചരിത്രം</div>
                <div className="book-author">by Dr. Shyni Thomas</div>


              </div>
            </div>
            <div className="book-cell book-cell-dark-color">
              <div className="book-img">
                <img src={require("./dist/img/10.jpg")} alt=""
                  className="book-photo" />
              </div>
              <div className="book-content">
                <div className="book-title">Grigori</div>
                <div className="book-author">by Dr. Munjinad Padmakumar</div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookSlider
