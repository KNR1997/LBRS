import React, { useEffect, useState } from "react";
import "./beach.css";
import NavbarNew from "../../components/NEW/NavbarNew";
import axios from "axios";
import GridItem from "../../components/gridItem/GridItem";
import SeaTurtleIcon from "../../components/svgIcons/SeaTurtleIcon";
import PalmTreeIcon from "../../components/svgIcons/PalmTreeIcon";

function Beach() {
  const [beaches, setBeaches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + "/beaches?populate=*",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setBeaches(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(beaches);

  return (
    <div>
      <NavbarNew />

      <section>
        <div id="field">
          <div className="field container">
            <div className="field-hero">
              <div className="field-hero-icons">
                <SeaTurtleIcon />
                <PalmTreeIcon />
              </div>
              <div className="field-hero-description">
                <p>Things to do</p>
                <h1>Beaches</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="description-1">
        <div className="description-1 container">
          <div className="description-1">
            <div className="title-1">Beach, please</div>
            <p>
              Ready to relax on the perfect stretch of sand? You’ve come to the
              right place. Whether you want an endless stretch of sand to stroll
              along or crystal-clear water that is perfect for snorkelling, the
              beaches in Tropical North Queensland will hit the spot.
            </p>
            <p>
              Take Nudey Beach on Fitzroy Island, consistently named as one of
              Australia’s best beaches. Once you hop off the ferry from Cairns,
              it’s just a quick walk through the rainforest to Nudey Beach,
              lovely stretch of white sand where you will rarely find more than
              a handful of people. Just remember, it is nudey by name not nudey
              by nature, so keep that swimsuit on.
            </p>
            <p>
              The mainland has no shortage of enticing options either. Mission
              Beach has 14km of golden beach to explore on the Cassowary Coast
              while closer to Cairns, Ellis Beach is a local favourite. Four
              Mile Beach in the resort town of Port Douglas is a lovely curve of
              family-friendly sand while the palm-lined beach at Palm Cove has
              been named both the friendliest and cleanest beach in Queensland.
            </p>
            <p>
              Even in the deep north there are plenty of beaches to explore,
              from the serene Myall Beach at Cape Tribulation to the
              paperbark-fringed Elim Beach in Cape York to Australia’s
              northernmost beach at the tip of Australia, the gorgeous Punsand
              Bay. This is one of the few beaches in Australia where you can
              watch the sun both rise and set so why not give both a go?
            </p>
          </div>
          <div className="row things-image-wrapper"></div>
        </div>
      </section>

      <section id="explore">
        <div className="explore container">
          <div className="explore">
            <div className="title-1">explore beaches</div>
            <div className="parent-container">
              <div className="grid-container">
                {beaches.map((beach, key) => {
                  const attributes = beach.attributes;
                  console.log(attributes);
                  return (
                    <GridItem
                      backgroundImage={attributes.cover.data.attributes.url}
                      title={attributes.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="explore-attractions">
        <div className="explore-attractions">
          <div className="explore-attractions">
            <div className="title-1">explore beaches</div>
            <div className="places">
              <div className="grid-container">
                {beaches.map((beach, key) => {
                  const attributes = beach.attributes;
                  console.log(attributes);
                  return (
                    <GridItem
                      backgroundImage={attributes.cover.data.attributes.url}
                      title={attributes.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Beach;
