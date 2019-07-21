import React, { Component } from 'react'

class NewTripDiary extends Component {
    render() {
        return (
            <section className="form">
                {this.props.NewTripDiary.map(entry =>
                <div key={entry.id}>
                    {entry.details}
                </div>
                )
                }
            </section>
        )
    }
}

export default NewTripDiary