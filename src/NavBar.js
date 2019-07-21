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