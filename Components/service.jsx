import React from "react";

const Service = () => {
  return (
    <>
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="/images/s1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Website Design and Development</h5>
                    <p>
                      Crafting bespoke websites with responsive design,
                      intuitive user interfaces, and seamless user experiences
                      to meet diverse client needs and ensure optimal
                      performance across devices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="/images/s2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Mobile App Development</h5>
                    <p>
                      Designing and developing cross-platform mobile
                      applications for iOS and Android, ensuring a seamless user
                      experience and leveraging frameworks like React Native and
                      Flutter for efficient development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/s3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Web Hosting and Maintenance</h5>
                    <p>
                      Providing reliable web hosting services and ongoing
                      maintenance support to ensure optimal website performance,
                      accessibility, and security, offering peace of mind for
                      clients and their users.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src="/images/s1.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Security Services</h5>
                      <p>
                        Implementing robust security measures and conducting
                        audits to safeguard websites and applications, ensuring
                        protection against potential threats and vulnerabilities
                        for a secure online environment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src="/images/s2.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>UI/UX Design</h5>
                      <p>
                        Creating visually appealing interfaces with user-centric
                        design, conducting usability testing, and refining
                        designs based on feedback to ensure optimal user
                        experiences and aesthetic appeal for websites and
                        applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src="images/s3.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Training and Support</h5>
                      <p>
                        Offering comprehensive training sessions for clients to
                        manage their websites and applications, coupled with
                        ongoing support and troubleshooting services to ensure a
                        smooth and hassle-free online presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src="/images/s1.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>E-commerce Development</h5>
                      <p>
                        Building secure, feature-rich online stores,
                        implementing user-friendly product catalogs, shopping
                        carts, and reliable payment gateways for a seamless and
                        secure shopping experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src="/images/s2.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Custom Software Development</h5>
                      <p>
                        Tailoring software solutions to meet unique business
                        requirements, offering bespoke development and
                        consulting services to optimize processes and address
                        specific challenges faced by clients.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src="images/s3.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>HR Management System</h5>
                      <p>
                        Revolutionize HR processes with our comprehensive HR
                        Management System. From payroll and attendance tracking
                        to recruitment and performance evaluations, our
                        centralized platform enhances efficiency, compliance,
                        and data-driven decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="btn-box">
              <a href="">View All</a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
