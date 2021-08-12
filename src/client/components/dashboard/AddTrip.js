import React, { Component } from 'react'
import { connect } from 'react-redux'
class AddTrip extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTrip(this.state);
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Add a New trip</h5>
                    <div className="input-field">
                        <input type="text" id='title' onChange={this.handleChange} />
                        <label htmlFor="title">Trip Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Trip Description</label>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addTrip: (trip) => dispatch(addTrip(trip))
    }
}

export default connect(null, mapDispatchToProps)(AddTrip)
