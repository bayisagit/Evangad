import React from 'react';

function Section5() {
  return (
    <div>
      <section className="fifth">
        <div className="lef">
          <div className="log">
            <div className="logo">
              <img src="/images/apple-tv-logo.png" alt="apple tv" />
            </div>
          </div>
          <div className="tvshowlogo">
            <img src="/images/servant-logo.png" alt="servant show" />
          </div>
          <div className="watchwrapper">
            <a href="#">Watch the trailer</a>
          </div>
        </div>

        <div className="righ">
          <div className="log">
            <div className="logo">
              AirPods Pro
            </div>
          </div>
          <div className="briefdescription">
            Magic: like you've never heard
          </div>
          <div className="linkswrapper">
            <ul>
              <li><a href="#">Learn more</a></li>
              <li><a href="#">Buy</a></li>
            </ul>
          </div>
          <div>
            <img src="/images/air-pods.jpg" alt="airpods pro" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section5;
