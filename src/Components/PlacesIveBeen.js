import React, { Component } from 'react'

class PlacesIveBeen extends Component {
    render() {
        return (
            <section className="recorded-trips">
                {this.props.PlacesIveBeen.map(each =>
                        <div key={each.nationId}>
                            {each.nameOfPlace}
                        </div>
                    )
                }
            </section>
        )
    }
}

export default PlacesIveBeen