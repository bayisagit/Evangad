import React from 'react';

function Section1() {
  return (
    <div>
      <section className="mainhighlight">
        <div className="model">
          16-inch model
        </div>
        <div className="prroducttitle">
          MacBook Pro
        </div>
        <div className="briefdescription">
          The best for the brightest.
        </div>
        <div className="linkswrapper">
          <ul>
            <li><a href="#">Learn more</a></li>
            <li><a href="#">Buy</a></li>
          </ul>
        </div>
        <div className="mainimage">
          <img src="/images/mac-laptop.jpg" alt="mac" />
        </div>
      </section>
    </div>
  );
}

export default Section1;
