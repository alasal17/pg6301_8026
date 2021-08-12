import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import TripDetails from "./components/dashboard/TripDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AddTrip from "./components/dashboard/AddTrip";


function App(){

        return (
            <BrowserRouter >
                <div>
                    <Header/>

                    <Switch>
                        <Route exact={true} path={'/'} component={Dashboard} />
                        <Route  path={"/trip/:id"} component={TripDetails}/>
                        <Route  path={"/signin"} component={SignIn}/>
                        <Route  path={"/signup"} component={SignUp}/>
                        <Route path={'/new-trip'} component={AddTrip} />
                    </Switch>


                </div>
            </BrowserRouter>
        );

}

export default App;