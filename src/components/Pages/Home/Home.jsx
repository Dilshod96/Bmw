import React from 'react';
import './Home.css';

import b1 from '../../../static/img/b1.jpg';
import b2 from '../../../static/img/b2.jpg';
import b3 from '../../../static/img/b3.jpg';
import b4 from '../../../static/img/b4.jpg';

import c1 from '../../../static/img/c1.jpg';
import c2 from '../../../static/img/c2.jpg';
import c3 from '../../../static/img/c3.jpg';
import c4 from '../../../static/img/c4.jpg';

import l1 from '../../../static/img/l1.png';
import l2 from '../../../static/img/l2.png';
import l3 from '../../../static/img/l3.png';
import l4 from '../../../static/img/l4.png';


function Home() {
  return (
    <div>

      <div className="home_header">
        <div className="home_header_body">
          <div className="home_header_body_card">
            <div className="home_header_body_card_text">
              <h2>
                THIS NEW YEAR,
                SHIFT GEARS WITH THE ULTIMATE CERTIFIED MACHINE
              </h2>
              <p>Take Control of Your ride</p>
              <button className="btn btn-lg btn-primary shadow px-5 mr-3 mb-3">Pre-Owned Inventory</button>
              <button className="btn btn-lg btn-light shadow px-5 mb-3">See Special Offers</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card_box_row_list">

        <div className="card_box_header">
          <div className="card_box_body">
            <img src={b1} alt="b1" />
            <div className="card_box_body_text">
              <span className="font-weight-bold">
                THE 2022 BMW X7
              </span>
              <h4 className="m-0">
                EXPERIENCE A LEGEND
              </h4>
              <a href="#0" className="text-light">
                Learn more
              </a>
            </div>
            <div className="card_box_body_text_padding"></div>
          </div>
        </div>

        <div className="card_box_header">
          <div className="card_box_body">
            <img src={b2} alt="b2" />
            <div className="card_box_body_text">
              <span className="font-weight-bold">
                THE 2022 BMW X5
              </span>
              <h4 className="m-0">
                LEAD WITH CONFIDENCE
              </h4>
              <a href="#0" className="text-light">
                Learn more
              </a>
            </div>
            <div className="card_box_body_text_padding"></div>
          </div>
        </div>

        <div className="card_box_header">
          <div className="card_box_body">
            <img src={b3} alt="b3" />
            <div className="card_box_body_text">
              <span className="font-weight-bold">
                THE 2022 BMW 5 SERIES SEDAN
              </span>
              <h4 className="m-0">
                THE 5
              </h4>
              <a href="#0" className="text-light">
                Learn more
              </a>
            </div>
            <div className="card_box_body_text_padding"></div>
          </div>
        </div>

        <div className="card_box_header">
          <div className="card_box_body">
            <img src={b4} alt="b4" />
            <div className="card_box_body_text">
              <span className="font-weight-bold">
                POWER AND PRESTIGE
              </span>
              <h4 className="m-0">
                THE 8
              </h4>
              <a href="#0" className="text-light">
                Learn more
              </a>
            </div>
            <div className="card_box_body_text_padding"></div>
          </div>
        </div>

      </div>

      <div className="Build_header_bg">
        <div className="Build_header">
          <h2 className="py-4 w-100">Build the BMW of your dreams.</h2>
          <div className="col-md-3">
            <img src={c1} className="img-fluid p-2" alt="c1" />
            <h4>3 Series Sedan</h4>
            <a href="#0" className="text-dark font-weight-bolder">
              Start Designing
            </a>
          </div>
          <div className="col-md-3">
            <img src={c2} className="img-fluid p-2" alt="c2" />
            <h4>X3</h4>
            <a href="#0" className="text-dark font-weight-bolder">
              Start Designing
            </a>
          </div>
          <div className="col-md-3">
            <img src={c3} className="img-fluid p-2" alt="c3" />
            <h4>5 Series Sedan</h4>
            <a href="#0" className="text-dark font-weight-bolder">
              Start Designing
            </a>
          </div>
          <div className="col-md-3">
            <img src={c4} className="img-fluid p-2" alt="c4" />
            <h4>X5</h4>
            <a href="#0" className="text-dark font-weight-bolder">
              Start Designing
            </a>
          </div>
          <div className="my-4">
            <button className="btn btn-md btn-dark font-weight-bolder">
              Build Your Own
            </button>
          </div>
        </div>
      </div>

      <div className="original_header">
        <div className="original_header_body">
          <div className="original_header_body_card">
            <div className="original_header_body_card_text">
              <h3>ORIGINAL BMW TIRES</h3>
              <p>Take Control of Your ride</p>
              <button className="btn btn-lg btn-dark px-5 shadow">Read more</button>
            </div>
          </div>
        </div>
      </div>

      <div className="ownership_header pb-4">
        <h2 className="py-5 w-100">Ownership starts here.</h2>
        <div className="col-md-3">
          <img src={l1} className="w-25" alt="l1" />
          <h5 className="font-weight-bolder">Trade-In Value</h5>
          <h6>
            Get the latest information on your vehicle’s trade-in value today.
          </h6>
          <a href="#0" className="text-dark font-weight-bolder">
            <span className="font-weight-bolder">
              Visit Black Book
            </span>
          </a>
        </div>
        <div className="col-md-3">
          <img src={l2} className="w-25" alt="l2" />
          <h5 className="font-weight-bolder">Check Your Credit Score</h5>
          <h6>
            See where you stand on your journey to owning a BMW.
          </h6>
          <a href="#0" className="text-dark font-weight-bolder">
            <span className="font-weight-bolder">
              Visit Equifax
            </span>
          </a>
        </div>
        <div className="col-md-3">
          <img src={l3} className="w-25" alt="l3" />
          <h5 className="font-weight-bolder">Apply for Financing</h5>
          <h6>
            Own the BMW of your dreams with BMW Financial Services.
          </h6>
          <a href="#0" className="text-dark font-weight-bolder">
            <span className="font-weight-bolder">
              Get Started
            </span>
          </a>
        </div>
        <div className="col-md-3">
          <img src={l4} className="w-25" alt="l4" />
          <h5 className="font-weight-bolder">Stay Connected</h5>
          <h6>
            Receive the latest offers, releases, and news from BMW.
          </h6>
          <a href="#0" className="text-dark font-weight-bolder">
            <span className="font-weight-bolder">
              Sign Up Now
            </span>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Home
