import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import NewTripDiary from './Components/NewTripDiary'
import PlacesIveBeen from './Components/PlacesIveBeen'

class AppViews extends Component {
    arrayOfDiaryPage = [
        {id:1, details:"A form you filled out about a trip you just went on"},
        {id:2, details:"The save button and the edit button"}
    ]

    arrayOfPastTripsPage = [
        {id:1, nationId:3, nameOfPlace:"Southern Coast", details:"Has nice views"},
        {id:2, nationId:1, nameOfPlace:"Hidden Bakery", details:"Chocolate LeClaires"}
    ]

    state = {
        NewTripDiary: this.arrayOfDiaryPage,
        PlacesIveBeen: this.arrayOfPastTripsPage
    }

    render () {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <NewTripDiary NewTripDiary={this.state.NewTripDiary} />
                }} />
                <Route exact path="/placesivebeen" render={(props) => {
                    return <PlacesIveBeen PlacesIveBeen={this.state.PlacesIveBeen} />
                }} />
            </React.Fragment>
        )
    }
}
export default AppViews

//make COMPONENTS / files for the two pages you'd like to render
//Then, give them information for the app to render such as the value of an array