import React from 'react';
import LazyLoad from "react-lazyload";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Series.css';

import x1 from '../../../static/img/x1.jpg';
import x2 from '../../../static/img/x2.jpg';
import x3 from '../../../static/img/x3.jpg';
import x4 from '../../../static/img/x4.jpg';
import x5 from '../../../static/img/x5.jpg';
import x6 from '../../../static/img/x6.jpg';
import x7 from '../../../static/img/x7.jpg';

function Series() {

  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav .container ul li");
  window.onscroll = () => {
    var current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };

  return (
    <div>

      <div className="series_header">
        <div className="series_header_body">
          <div className="series_header_body_card">
            <div className="series_header_body_card_text">
              <h2>
                DESIGN YOUR ULTIMATE DRIVING MACHINE.
              </h2>
              <p>A popular build for you.</p>
              <button className="btn btn-lg btn-primary shadow px-5 mr-3 mb-3">Select a Series</button>
              <button className="btn btn-lg btn-light shadow px-5 mb-3">Build This Vehicle</button>
            </div>
          </div>
        </div>
      </div>

      <nav>
        <div className="container">
          <ul className="m-0 p-0">
            <li className="x1 dude"><a href="#x1">X1</a></li>
            <li className="x2"><a href="#x2">X2</a></li>
            <li className="x3"><a href="#x3">X3</a></li>
            <li className="x4"><a href="#x4">X4</a></li>
            <li className="x5"><a href="#x5">X5</a></li>
            <li className="x6"><a href="#x6">X6</a></li>
            <li className="x7"><a href="#x7">X7</a></li>
          </ul>
        </div>
      </nav>

      <div className="gallery list">

        <section id="x1">
          <div className="series_card_row_list my_light">
            <div className="col-md-6 m-auto p-0">
              <LazyLoad height={600} once>
                <LazyLoadImage alt={x1} effect="blur" src={x1} className="series_card_img" />
              </LazyLoad>
            </div>
            <div className="col-md-6 m-auto p-0">
              <div className="series_card_box">
                <h3>X1 Sports Activity Vehicle</h3>
                <span>The compact, yet intrepid, four-door SAV.</span>
                <hr />
                <div>Starting MSRP <b>$35,400</b></div>
                <div>MSRP as shown <b>$36,000</b></div>
                <button className="btn btn-md btn-primary mt-3 mb-2 px-5">
                  Select
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="x2">
          <div className="series_card_row_list">
            <div className="col-md-6 m-auto p-0">
              <LazyLoad height={600} once>
                <LazyLoadImage alt={x2} effect="blur" src={x2} className="series_card_img" />
              </LazyLoad>
            </div>
            <div className="col-md-6 m-auto p-0">
              <div className="series_card_box">
                <h3>X2 Sports Activity Coupe</h3>
                <span>The sporty rebel made for the spirited thrill seeker.</span>
                <hr />
                <div>Starting MSRP <b>$36,600</b></div>
                <div>MSRP as shown <b>$37,150</b></div>
                <button className="btn btn-md btn-primary mt-3 mb-2 px-5">
                  Select
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="x3">
          <div className="series_card_row_list my_light">
            <div className="col-md-6 m-auto p-0">
              <LazyLoad height={600} once>
                <LazyLoadImage alt={x3} effect="blur" src={x3} className="series_card_img" />
              </LazyLoad>
            </div>
            <div className="col-md-6 m-auto p-0">
              <div className="series_card_box">
                <h3>X3 Sports Activity Vehicle</h3>
                <span>The versatile four-door SAV perfect for active lifestyles.</span>
                <hr />
                <div>Starting MSRP <b>$43,700</b></div>
                <div>MSRP as shown <b>$44,950</b></div>
                <button className="btn btn-md btn-primary mt-3 mb-2 px-5">
                  Select
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="x4">
          <div className="series_card_row_list">
            <div className="col-md-6 m-auto p-0">
              <LazyLoad height={600} once>
                <LazyLoadImage alt={x4} effect="blur" src={x4} className="series_card_img" />
              </LazyLoad>
            </div>
            <div className="col-md-6 m-auto p-0">
              <div className="series_card_box">
                <h3>X4 Sports Activity Coupe</h3>
                <span>The coupe-inspired adventurer of the X family.</span>
                <hr />
                <div>Starting MSRP <b>$51,800</b></div>
                <div>MSRP as shown <b>$52,350</b></div>
                <button className="btn btn-md btn-primary mt-3 mb-2 px-5">
                  Select
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="x5">
          <div className="series_card_row_list my_light">
            <div className="col-md-6 m-auto p-0">
              <LazyLoad height={600} once>
                <LazyLoadImage alt={x5} effect="blur" src={x5} className="series_card_img" />
              </LazyLoad>
            </div>
            <div className="col-md-6 m-auto p-0">
              <div className="series_card_box">
                <h3>X5 Sports Activity Vehicle</h3>
                <span>The original that inspired every X to follow.</span>
                <hr />
                <div>Starting MSRP <b>$60,600</b></div>
                <div>MSRP as shown <b>$61,150</b></div>
                <button className="btn btn-md btn-primary mt-3 mb-2 px-5">
                  Select
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="x6">
          <div className="series_card_row_list">
            <div className="col-md-6 m-auto p-0">
              <LazyLoad height={600} once>
                <LazyLoadImage alt={x6} effect="blur" src={x6} className="series_card_img" />
              </LazyLoad>
            </div>
            <div className="col-md-6 m-auto p-0">
              <div className="series_card_box">
                <h3>X6 Sports Activity Coupe</h3>
                <span>The refined, reimagined coupe offering of a classic.</span>
                <hr />
                <div>Starting MSRP <b>$67,350</b></div>
                <div>MSRP as shown <b>$67,900</b></div>
                <button className="btn btn-md btn-primary mt-3 mb-2 px-5">
                  Select
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="x7">
          <div className="series_card_row_list my_light">
            <div className="col-md-6 m-auto p-0">
              <LazyLoad height={600} offset={300}>
                <LazyLoadImage alt={x7} effect="blur" src={x7} className="series_card_img" />
              </LazyLoad>
            </div>
            <div className="col-md-6 m-auto p-0">
              <div className="series_card_box">
                <h3>X7 Sports Activity Vehicle</h3>
                <span>The largest and most luxurious Sports Activity Vehicle ever built.</span>
                <hr />
                <div>Starting MSRP <b>$74,900</b></div>
                <div>MSRP as shown <b>$77,900</b></div>
                <button className="btn btn-md btn-primary mt-3 mb-2 px-5">
                  Select
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
export default Series
