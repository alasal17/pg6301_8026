import React, {Component, useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import Dashboard from "./Dashboard";
import TripDetails from "./components/trip/TripDetails";
import Login from "./components/auth/Login";

import AddTrip from "./components/trip/AddTrip";



function App(){
    const [access_token, setAccess_token] =useState();
    const googleIdentityProvider = {
        discoveryURL : "https://accounts.google.com/.well-known/openid-configuration",
        client_id : "102887837798-o6l2ackb5rd8copdad6pqbs4e46qm37q.apps.googleusercontent.com",
    };


    async function loadProfile(){
        return fetchJson("/api/profile", {
            headers:{
                ...(access_token ? {Authorization: `Bearer ${access_token}` } : {}),
            },
        });
    }

        return (
            <BrowserRouter >
                <div>
                    <Header/>

                    <Switch>
                        <Route exact={true} path={'/'} component={Dashboard} />
                        <Route  path={"/trip/:id"} component={TripDetails}/>
                        <Route  path={"/login"}>
                            <Login identityProvider={googleIdentityProvider}/>
                        </Route>
                        <Route path={'/new-trip'} component={AddTrip} />
                        <Route>
                            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>Not Found</h1>
                        </Route>
                    </Switch>


                </div>
            </BrowserRouter>
        );

}

export default App;