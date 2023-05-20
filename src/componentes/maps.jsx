import React from "react";
import GoogleMaps from "simple-react-google-maps";

function Maps() {
  return(
    <section className="encontrarnos" id="donde-encontrarnos">
      <h1 className="d-flex justify-content-center">Donde encontrarnos</h1>
      <div className="container d-flex justify-content-center">
        <GoogleMaps
          apiKey={"AIzaSyAztl-uf1DjRAMpI28fMGfeL0sdUGIYLZU"}
          style={{ height: "500px", width: "370px" }}
          zoom={17}
          center={{
            lat: -27.433054,
            lng: -65.619449
          }}
          markers= {
            {
              lat: -27.433054,
              lng: -65.619449
            }
          }
        />
      </div>
    </section>
  )
}

export default Maps;