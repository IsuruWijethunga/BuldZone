import React from "react";

const Aboutus = () => {
  return (
    <>
      <section className="about_section layout_padding">
        <div className="container  ">
          <div className="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              Empower your online presence with our expert web development
              team—where innovation meets excellence for digital success.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are BuildZone</h3>
                <p>
                  At BuildZone IT, we stand as a prominent web development
                  company driven by an adept and passionate team. Armed with
                  extensive knowledge, we specialize in translating your vision
                  into robust, visually appealing websites. Our commitment to
                  excellence and innovation ensures tailored solutions that
                  elevate your online presence.
                </p>
                <p>
                  {" "}
                  With expertise in diverse technologies, we navigate the
                  digital landscape, providing you with a competitive edge.
                  Trust us to turn your concepts into impactful, user-centric
                  web experiences.
                </p>

                {/* <a href="">Read More</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
