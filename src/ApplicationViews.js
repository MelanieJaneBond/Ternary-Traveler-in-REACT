import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import NewTripDiary from './Components/NewTripDiary'
import PlacesIveBeen from './Components/PlacesIveBeen'


class AppViews extends Component {
    state = {
        NewTripDiary: [],
        PlacesIveBeen: []
    }

    componentDidMount() {
        const newState = {}
        fetch("http://localhost:5002/arrayOfDiaryPage")
        .then(r => r.json())
        .then(entries => newState.NewTripDiary = entries)
        .then( () => fetch("http://localhost:5002/arrayOfPastTripsPage")
        .then(r => r.json()))
        .then(trips => newState.PlacesIveBeen = trips)
        .then( () => this.setState(newState))
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

//if my fetch calls ARE FETCHING arrays of data, then I must check to make sure the syntax and variable placement
//is correct so that the .map method will work on the arrays I have created.