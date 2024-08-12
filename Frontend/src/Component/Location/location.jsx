import React, { useState, useEffect } from 'react';

function Location() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const geo = navigator.geolocation;

    geo.getCurrentPosition(userCoords);

    function userCoords(position) {
      let UserLatitude = position.coords.latitude;
      let UserLongitude = position.coords.longitude;
      console.log(UserLatitude);
      console.log(UserLongitude);

      setLatitude(UserLatitude);
      setLongitude(UserLongitude);
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      getUserAddress();
    }
  }, [latitude, longitude]);

  const getUserAddress = async () => {
    let url = `https://api.opencagedata.com/geocode/v1/json?key=6666b0d74f164643aa9126271b0f1c0f&q=${latitude}%2C${longitude}&pretty=1&no_annotations=1`;

    const loc = await fetch(url);
    const data = await loc.json();
    console.log('data:', data);
  };

  return (
    <></>
  );
}

export default Location;
