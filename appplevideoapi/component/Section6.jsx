import React from 'react';

function Section6() {
  return (
    <div>
      <section className="sixth">
        <div className="lef">
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
        </div>

        <div className="righ">
          <div className="model">
            16-inch model
          </div>
          <div className="prroducttitle">
            iPad
          </div>
          <div className="briefdescription">
            Like a computer unlike any computer.
          </div>
          <div className="linkswrapper">
            <ul>
              <li><a href="#">Learn more</a></li>
              <li><a href="#">Buy</a></li>
            </ul>
          </div>
          <div className="mainimage">
            <img src="/images/new-ipad.jpg" alt="ipad" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section6;
