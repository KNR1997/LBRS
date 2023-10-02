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
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useParams } from "react-router-dom";
import { usePlaceData } from "../../hooks/usePlaceData";

function Place() {
  const { id } = useParams();
  console.log("id to search place", id);
  const { isLoading, data, isError } = usePlaceData(id);

  if (isLoading) {
    console.log("Loading");
  }

  if (isError) {
    console.log("error");
  }

  return (
    <div>
      <NavbarNew />

      <section id="place">
        <div id="place">
          <div className="place container">
            <div className="place box">
              <div className="layer-1">
                <div className="title-field">Beaches</div>
                <div className="place-name">
                  {data?.data[0].attributes.title} Beach
                </div>
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
              <div>
                <h2 className="title">
                  {data?.data[0].attributes.title} Beach
                </h2>
                <div className="paragraph">
                  {data?.data[0].attributes.description}
                </div>
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
                {data?.data[0].attributes.images.data.map((place) => {
                  return (
                    <SwiperSlide key={place.id}>
                      <div className="slide">
                        <img src={place?.attributes.url} alt=""></img>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Place;
