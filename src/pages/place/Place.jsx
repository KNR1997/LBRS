import React from "react";
import "./place.css";
import NavbarNew from "../../components/NEW/NavbarNew";
import PinLocationIcon from "../../components/svgIcons/PinLocationIcon";
import CursorIcon from "../../components/svgIcons/CursorIcon";
import RedirectIcon from "../../components/svgIcons/RedirectIcon";

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
                  <div>Social</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="description"></section>
      <section id="location"></section>
      <section id="carousel"></section>
    </div>
  );
}

export default Place;
