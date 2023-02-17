import React from "react";
import { Route, Switch } from "react-router-dom";
import SharedData from "./components/SharedData";
import ShippingData from "./components/ShippingApp";
import Vtrace from './components/Vtrace';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <h1>Home Page</h1>
                <SharedData></SharedData>
            </Route>
            <Route exact path="/shipping">
                <h1>Statistics Page</h1>
                <ShippingData></ShippingData>
            </Route>
            <Route exact path="/shareddata">
                <h1>Customers Page</h1>
                <SharedData></SharedData>
            </Route>
            <Route exact path="/vtrace">
                <h1>Diagrams Page</h1>
                <Vtrace></Vtrace>
            </Route>
        </Switch>
    );
};

export default Routes;
