import React from "react";
import "./place.css";
import NavbarNew from "../../components/NEW/NavbarNew";
import PinLocationIcon from "../../components/svgIcons/PinLocationIcon";
import CursorIcon from "../../components/svgIcons/CursorIcon";
import RedirectIcon from "../../components/svgIcons/RedirectIcon";
import FacebookIcon from "../../components/svgIcons/FacebookIcon";
import TwitterIcon from "../../components/svgIcons/TwitterIcon";
import InstagramIcon from "../../components/svgIcons/InstagramIcon";
import YoutubeIcon from "../../components/svgIcons/YoutubeIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../assets/sri-lankan-leopard-yala.jpg";
import img2 from "../../assets/sl-beach.jpg";
import img3 from "../../assets/hiking.jpg";
import img4 from "../../assets/nature_wild.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";

function Place() {
  return (
    <div>
      <NavbarNew />

      <section id="place">
        <div id="place">
          <div className="place container">
            <div className="place box">
              <div className="layer-1">
                <div className="title-field">Beaches</div>
                <div className="place-name">Nilaveli Beach</div>
              </div>
              <div className="layer-2">
                <CursorIcon />
                <div className="website-title">Website</div>
                <div className="website-link">www.visitportnilaveli.lk</div>
              </div>
              <div className="layer-3">
                <div className="address">
                  <PinLocationIcon />

                  <div className="add-left">Address</div>
                  <div className="add-right">
                    Newell Beach, Queensland 4873, Australia
                  </div>
                </div>
                <div className="social">
                  <RedirectIcon />
                  <div className="social-title">Social</div>
                  <div>
                    <div className="social-media-icons">
                      <FacebookIcon />
                      <TwitterIcon />
                      <InstagramIcon />
                      <YoutubeIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="description">
        <div id="description">
          <div className="description container">
            <div className="box-1">
              <h2 className="title">Nilaveli Beach</h2>
              <div className="paragraph">
                Tucked away between glamorous Port Douglas and the vast
                wilderness of the World Heritage listed Daintree National Park
                is the sleepy beachside community of Newell Beach.
                <br /> Newell Beach boasts spectacular views to Port Douglas in
                the south and the lighthouse on Low Isles to the east. The two
                and a half kilometre beach is clean and pristine and is bordered
                to the north and south by estuaries.
                <br /> Not far to the west you’ll discover the crystal clear
                rock pools of Mossman Gorge National Park, picturesque Daintree
                Village, and ancient world of the Daintree Rainforest.
                <br /> Fishermen are well catered for with boat ramps at the
                northern end of the beach and at Saltwater Creek. The nearby
                estuaries are brimming with good eating fish but remember to be
                on the lookout for crocodiles at all times. Sitting at the mouth
                of the mighty Daintree River, nearby Snapper Island is a Mecca
                for local anglers. Barramundi can be found in nearby Daintree
                River and fishing off the beach can also prove rewarding.
                <br /> Newell Beach has a convenience store and for groceries,
                banks, post offices, hairdressers and for anything else, the
                sugar town of Mossman is just minutes up the road.
                <br /> On site vans and self contained units can be found at the
                local caravan park and there are also beachside holiday houses
                for rent.
                <br /> Newell Beach is only one and a half hour’s drive north of
                the Cairns International Airport and just 10 minutes from Port
                Douglas. details
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="location">
        <div className="location container">
          <div className="box-2">
            <div className="title">Location</div>
            <div className="satalite-view">
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.mapbox.com%2Fnew-satellite-imagery-for-cities-across-india-4b97ed7e3452&psig=AOvVaw0mM4_nTI4A9pZDmMvSYjay&ust=1696231544804000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiclIep1IEDFQAAAAAdAAAAABAE"/>
            </div>
            <div className="google-map">
              <div className="loc-sub-header">Nilaveli Beach</div>
              <div className="loc-address">Nilaveli Beach,<br/>Queensland 4873, Australia</div>
              <div className="google-map-btn">Open in Google maps</div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="carousel">
        <div id="carousel">
          <div className="carousel container">
            <div className="box-1">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="slide">
                    <img src={img1}></img>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img2}></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img3}></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={img4}></img>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Place;
