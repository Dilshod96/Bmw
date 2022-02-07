import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div>

      <div className="contact_header">
        <div className="contact_header_body">
          <div className="contact_header_body_card">
            <div className="contact_header_body_card_text">
              <h2>
                CONTACT BMW.
              </h2>
              <p>
                Every aspect of everything BMW, at your fingertips. <br />
                Let us know how we can help.
              </p>
              <button className="btn btn-lg btn-primary shadow px-5 mr-3 mb-3">BMW UK</button>
              <button className="btn btn-lg btn-light shadow px-5 mb-3">BMW Financial Services</button>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="m-auto text-center">
        <h2>
          ASK THE ONLINE GENIUS.
        </h2>
        <p>
          Got a question that only BMW can answer? Search our Online Genius for an instant answer.
        </p>
      </div>
      <hr />

      <div className="contact_header_cn1 p-4 m-4">
        <div className="contact_header_body">
          <div className="contact_header_body_card">
            <div className="contact_header_body_card_text">
              <h2>
                BMW : GENERAL ENQUIRIES.
              </h2>
              <p>If you have any general enquiries, let us know how we can help:</p>
              <p>
                How to reach us <br />
                Call us on: 0800 3256 000 <br />
                Calls are free of charge from all consumer landlines and mobile phones.
              </p>
              <p>
                We're here: <br />
                Monday – Friday, 8am – 7pm <br />
                Saturday and Sunday, 9am – 5pm
              </p>
              <button className="btn btn-lg btn-primary shadow mr-3 mb-3">
                <a href="tel:0800 3256 000" className="text-light">call : 0800 3256 000</a>
              </button>
              <button className="btn btn-lg btn-light shadow mb-3">
                <a href="mailto:customer.information@bmw.co.uk?subject=">
                  on:customer.information@bmw.co.uk
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_header_cn2 p-4 m-4">
        <div className="contact_header_body">
          <div className="contact_header_body_card">
            <div className="contact_header_body_card_text">
              <h2>
                BMW : CUSTOMER SERVICES.
              </h2>
              <p>If something isn’t right and you need our help, let us know how we can help:</p>
              <p>
                How to reach us <br />
                Or call us on: 0370 5050 160 <br />
                Calls are charged at the local rate, plus your phone company’s access charge.
              </p>
              <p>
                We're here: 9:30am – 5:30pm Mon – Fri, 9am – 5pm Sat
              </p>
              <button className="btn btn-lg btn-primary shadow mr-3 mb-3">
                <a href="tel:0370 5050 160" className="text-light">call : 0370 5050 160</a>
              </button>
              <button className="btn btn-lg btn-light shadow mb-3">
                <a href="mailto:customer.service@bmw.co.uk?subject=">
                  customer.service@bmw.co.uk
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_header_cn3 p-4 m-4">
        <div className="contact_header_body">
          <div className="contact_header_body_card">
            <div className="contact_header_body_card_text">
              <h2>
                ELECTRIC VEHICLES : CUSTOMER SERVICES.
              </h2>
              <p>If something isn’t right and you need our help, let us know how we can help:</p>
              <p>
                How to reach us <br />
                Or call us on: 0370 0120 585 <br />
                Calls are charged at the local rate, plus your phone company’s access charge.
              </p>
              <p>
                We're here: 8am – 7pm Mon – Fri, 9am – 5pm Sat
              </p>
              <button className="btn btn-lg btn-primary shadow mr-3 mb-3">
                <a href="tel:0370 0120 585" className="text-light">call : 0370 0120 585</a>
              </button>
              <button className="btn btn-lg btn-light shadow mb-3">
                <a href="mailto:customer.service@bmw-i.co.uk?subject=">
                  customer.service@bmw-i.co.uk
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
