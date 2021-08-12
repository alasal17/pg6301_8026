import React, {Component, useState} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import TripDetails from "./components/dashboard/TripDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AddTrip from "./components/dashboard/AddTrip";
import ProfilePage from "./components/dashboard/ProfilePage";
import {fetchJson} from "./http";


function App(){
    const [access_token, setAccess_token] =useState();

    async function loadProfile(){
        return fetchJson("/api/profile", {
            headers:{
                ...(access_token ? {Authorization: `Bearer ${access_token}` } : {}),
            }
        });
    }

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
                        <Route path={'/profile'}>
                            <ProfilePage loadProfile={loadProfile}/>
                        </Route>
                        <Route>
                            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>Not Found</h1>
                        </Route>
                    </Switch>


                </div>
            </BrowserRouter>
        );

}

export default App;