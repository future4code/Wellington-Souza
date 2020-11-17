import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage'
import FormPage from '../Pages/FormPage/FormPage'
import HomePage from '../Pages/HomePage/HomePage'
import TripPage from '../Pages/ListTripsPage/ListTripPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import DetailsPage from '../Pages/TripDetailsPage/TripDetailsPage'


function Router (){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/trip/details">
                    <DetailsPage />
                </Route>
                <Route exact path="/trip/list">
                    <TripPage/>
                </Route>
                <Route exact path="/aplication-form">
                    <FormPage />
                </Route>
                <Route exact path="/trip/create">
                    <CreateTripPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router