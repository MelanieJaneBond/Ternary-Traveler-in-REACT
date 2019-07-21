//put links in here that will take the user from a "main, welcome to the blog" page
//they should be able to get to a "blog-entry" page with a form
//and they should be able to view a "past trips" page

import React, { Component } from "react"
import { Link } from "react-router-dom"

class NavBar extends Component {
    render () {
        return (
            <nav className="App">
                <ul className="App-header">
                    <li className="App-header">
                        <Link className="App-header" to="/">New Trip Diary</Link>
                    </li>
                    <li className="App-header">
                        <Link className="App-header" to="/placesivebeen">Places I've Been</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar