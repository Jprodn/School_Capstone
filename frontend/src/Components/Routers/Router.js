import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import Itinerary from "../Itinerary/Itinerary";
import Create from "../Itinerary/Create";
import Search from "../Search/Search";
import { Error404 } from '../Error/Error404';



export default function Router(props) {
    return (
        <Switch>
            <Route exact path="/" component={() => <Login />} />
            <Route exact path="/login" component={() => <Login />} />
            <Route exact path="/register" component={() => <Register />} />
            <Route exact path="/home" component={props.token !== undefined ? () => <Home /> : null} />
            <Route exact path="/itinerary" component={props.token !== undefined ? (() => <Itinerary />) : null} />
            <Route exact path="/itinerary/create" component={() => <Create />} user={props.user} />
            <Route exact path="/landmark" component={() => <Search />} user={props.user} />
            <Route path="*" component={() => <Error404 />} />
        </Switch>
    )
}