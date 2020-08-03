import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Typography, Button } from "@material-ui/core";

function CreateMarker({ addNewLocation }) {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });

  const handleChangeLatitude = (event) => {
    setLocation({
      ...location,
      latitude: event.target.value,
    });
  };

  const handleChangeLongitude = (event) => {
    setLocation({ ...location, longitude: event.target.value });
  };

  const handleAddMarker = () => {
    addNewLocation(location);
    setLocation({ latitude: "", longitude: "" });
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <Typography variant="h5">Create new marker</Typography>

        <TextField
          label="latitude"
          type="number"
          value={location.latitude}
          onChange={handleChangeLatitude}
        />
        <TextField
          label="longitude"
          type="number"
          value={location.longitude}
          onChange={handleChangeLongitude}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleAddMarker}>
          Add Marker
        </Button>
      </Grid>
    </Grid>
  );
}

export default CreateMarker;
