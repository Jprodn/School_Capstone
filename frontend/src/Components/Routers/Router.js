import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import Itinerary from "../Itinerary/Itinerary";
import Create from "../Itinerary/Create";
import Search from "../Search/Search";
import { Error404 } from "../Error/Error404";
import NavLinkBar from "./NavLinkBar";
import MapRoute from "../MapRoute/MapRoute";
import axios from "axios";

export default function Router(props) {
  const userToken = () => window.localStorage.getItem("jwtToken");

  const [lat, setLatitude] = React.useState(0);
  const [long, setLongitude] = React.useState(0);

  React.useEffect(() => {
    const fetchCords = async () => {
      axios.defaults.headers["Authorization"] =
        "prj_test_pk_13713837a5551a730dfaa00517e4ce2867218662";
      const response = await axios.get(
        `https://api.radar.io/v1/search/autocomplete?query=${localStorage.getItem(
          "address"
        )}`
      );
      setLatitude(response.data.addresses[0].latitude);
      setLongitude(response.data.addresses[0].longitude);
      console.log(lat + " " + long);
    };

    fetchCords();
  }, []);

  return (
    <>
      {userToken !== undefined && <NavLinkBar />}
      <Switch>
        <Route exact path="/" component={() => <Login />} />
        <Route exact path="/login" component={() => <Login />} />
        <Route exact path="/register" component={() => <Register />} />
        <Route exact path="/home" component={() => <Home />} />
        <Route exact path="/itinerary" component={() => <Itinerary />} />
        <Route
          exact
          path="/itinerary/edit/:itineraryId"
          component={() => <Itinerary />}
        />
        <Route exact path="/itinerary/create" component={() => <Create />} />
        <Route
          exact
          path="/landmark"
          component={() => <Search />}
          user={props.user}
        />
        <Route
          exact
          path="/map-route"
          component={() => <MapRoute latitude={lat} longitude={long} />}
        />
        <Route path="*" component={() => <Error404 />} />
      </Switch>
    </>
  );
}
