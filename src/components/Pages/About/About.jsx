import React from 'react';
import LazyLoad from "react-lazyload";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './About.css';

import ab1 from '../../../static/img/ab1.jpg';
import ab2 from '../../../static/img/ab2.jpg';
import ab3 from '../../../static/img/ab3.jpg';
import ab4 from '../../../static/img/ab4.jpg';
import ab5 from '../../../static/img/ab5.jpg';

function About() {
  return (
    <div>

      <div className="about_header">
        <div className="about_header_body">
          <div className="about_header_body_card">
            <div className="about_header_body_card_text">
              <h2>
                March 7, 1916, Munich, Germany
              </h2>
              <p>
                The name BMW stands for driving pleasure.
                But what is this acronym actually short for?
                And how did the BMW namecome about?
                Read the interesting story of a moving company name here
              </p>
              <button className="btn btn-lg btn-primary shadow px-5 mr-3 mb-3">1916</button>
              <button className="btn btn-lg btn-light shadow px-5 mb-3">2022</button>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery list">

        <div className="about_card_row_list my_light">
          <div className="col-md-6 m-auto p-0">
            <LazyLoad height={600} once>
              <LazyLoadImage alt={ab1} effect="blur" src={ab1} className="about_card_img" />
            </LazyLoad>
          </div>
          <div className="col-md-6 m-auto p-0">
            <div className="about_card_box">
              <h6 className="text-secondary">1916 BMW IS BORN.</h6>
              <hr className="boder-secondary" />
              <p className="small">
                BMW traces its roots back to Karl Rapp and Gustav Otto. In 1916, a company known as Flugmaschinenfabrik Gustav Otto merged into Bayerische Flugzeug-Werke AG (BFW) at the German government's behest. Elsewhere, in 1917, the Rapp Motorenwerke company morphed into Bayerische Motoren Werke GmbH, which duly became an AG (public limited company) in 1918. BMW AG subsequently transferred its engine construction operations – including the company and brand names – to BFW in 1922. The date of BFW's founding, 7 March 1916, has therefore gone down in history as the birthdate of Bayerische Motoren Werke AG.
              </p>
            </div>
          </div>
        </div>

        <div className="about_card_row_list">
          <div className="col-md-6 m-auto p-0">
            <LazyLoad height={600} once>
              <LazyLoadImage alt={ab2} effect="blur" src={ab2} className="about_card_img" />
            </LazyLoad>
          </div>
          <div className="col-md-6 m-auto p-0">
            <div className="about_card_box">
              <h6 className="text-secondary">1923 THE BMW R 32 – THE FIRST BMW MOTORCYCLE.</h6>
              <hr className="boder-secondary" />
              <p className="small">
                BMW revealed its first motorcycle, the R 32, in 1923. Up to then, the company had only built engines rather than complete vehicles. The basic concept behind the original BMW Motorrad model – a boxer engine with longitudinally-positioned cylinders and cardan-shaft drive – was so sound that it remains a fixture of the company's motorcycle line-up to this day.
              </p>
            </div>
          </div>
        </div>

        <div className="about_card_row_list my_light">
          <div className="col-md-6 m-auto p-0">
            <LazyLoad height={600} once>
              <LazyLoadImage alt={ab3} effect="blur" src={ab3} className="about_card_img" />
            </LazyLoad>
          </div>
          <div className="col-md-6 m-auto p-0">
            <div className="about_card_box">
              <h6 className="text-secondary">1951 THE BMW 501. THE FIRST POST-WAR BMW CAR.</h6>
              <hr className="boder-secondary" />
              <p className="small">
                BMW's first post-war car was the 501, built from 1952. A large sedan capable of seating up to six people, it was powered by an evolution of the six-cylinder engine used in the pre-war BMW 326. Although not a commercial success, this luxury model restored BMW's status as a manufacturer of high-quality, technically exciting cars.
              </p>
            </div>
          </div>
        </div>

        <div className="about_card_row_list">
          <div className="col-md-6 m-auto p-0">
            <LazyLoad height={600} once>
              <LazyLoadImage alt={ab4} effect="blur" src={ab4} className="about_card_img" />
            </LazyLoad>
          </div>
          <div className="col-md-6 m-auto p-0">
            <div className="about_card_box">
              <h6 className="text-secondary">1961 THE NEW CLASS MAKES A BREAKTHROUGH.</h6>
              <hr className="boder-secondary" />
              <p className="small">
                BMW presented its 1500 model at the 1961 German Motor Show, filling a gap in the market in the process. This was the model that re-established BMW as a successful modern carmaker. The design of the four-door mile-eater immediately generated excitement and orders far exceeded production capacities. By 1963, the company was back in profit.
                DISCOVER THE HISTORY
              </p>
            </div>
          </div>
        </div>

        <div className="about_card_row_list my_light">
          <div className="col-md-6 m-auto p-0">
            <LazyLoad height={600} once>
              <LazyLoadImage alt={ab5} effect="blur" src={ab5} className="about_card_img" />
            </LazyLoad>
          </div>
          <div className="col-md-6 m-auto p-0">
            <div className="about_card_box">
              <h6 className="text-secondary">2013 LAUNCH OF THE BMW i3.</h6>
              <hr className="boder-secondary" />
              <p className="small">
                BMW embarked on a new era of electric mobility with the presentation by the new BMW i brand of the BMW Group’s first all-electric series-production model – the BMW i3. Propelled by an electric motor (and thus entirely emission-free) the i3 delivered an all-new driving experience of compelling agility and unbridled fun. Never has sustainability been so electrifying.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default About
