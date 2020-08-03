import React, { useState } from "react";
import { ReactBingmaps } from "react-bingmaps";
import Grid from "@material-ui/core/Grid";
import "./app.css";
import CreateMarker from "../CreateMarker";

function App() {
  const [polygon, setPolygon] = useState({
    location: [
      [13.0827, 80.2707],
      [14.0827, 82.2707],
      [15.0827, 81.2707],
      [13.0827, 80.2707],
    ],
    option: { strokeColor: "blue", strokeThickness: 3 },
  });

  const handleAddLocation = (location) => {
    if (polygon.location.length > 0) {
      const currentLocation = [...polygon.location];
      console.log(polygon);
      setPolygon({
        ...polygon,
        location: currentLocation.splice(currentLocation.length - 2, 0, [
          location.latitude,
          location.longitude,
        ]),
      });
      console.log(polygon);
    }
  };

  return (
    <Grid container direction="row" justify="space-between">
      <Grid item xs={2}>
        <CreateMarker addNewLocation={handleAddLocation} />
      </Grid>
      <Grid item xs={10} className="map">
        <ReactBingmaps
          bingmapKey="ArkIuxZ53TqeTinwyLDb2274xuZ7kBYqhue_LmHn9BDQ09uqTRbIMkUZo92Ba8rm"
          polyline={polygon}
          center={[13.0827, 80.2707]}
          id="map"
        ></ReactBingmaps>
      </Grid>
    </Grid>
  );
}

export default App;
