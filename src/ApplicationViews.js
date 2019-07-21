import { Route } from 'react-router-dom'
import React, { Component } from 'react'

class AppViews extends Component {
    arrayOfMainPage = [
        {id:1, details:"A form you filled out about a trip you just went on"},
        {id:2, details:"The save button and the edit button"}
    ]

    arrayOfPastTripsPage = [
        {id:1, nationId:3, nameOfPlace:"Southern Coast", details:"Has nice views"},
        {id:2, nationId:1, nameOfPlace:"Hidden Bakery", details:"Chocolate LeClaires"}
    ]

    state = {
        NewTripDiary: this.arrayOfMainPage,
        PlacesIveBeen: this.arrayOfPastTripsPage
    }

    render () {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <NewTripDiary details={this.state.NewTripDiary} />
                }} />
                <Route path="/placesivebeen" render={(props) => {
                    return <PlacesIveBeen details={this.state.PlacesIveBeen} />
                }} />
            </React.Fragment>
        )
    }
}
export default AppViews

//make COMPONENTS / files for the two pages you'd like to render
//Then, give them information for the app to render such as the value of an array
//From the Chapters from class:
//Below you can see how we are now using this.props.employees because employees were passed down from the Kennel component (state) to the EmployeeList component (props). employees now evaluates to an array, so you can use the map() array method to convert the raw data into HTML elements.

// EmployeeList.js

// import React, { Component } from 'react'


// class EmployeeList extends Component {
//     render() {
//         return (
//             <section className="employees">
//             {
//                 this.props.employees.map(employee =>
//                     <div key={employee.id}>
//                         {employee.name}
//                     </div>
//                 )
//             }
//             </section>
//         )
//     }
// }

// export default EmployeeList