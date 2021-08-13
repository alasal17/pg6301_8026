import React, { Component } from 'react'
import {addTrip} from "../dashboard/tripAction";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


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
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Add a new trip!</h5>
                    <div className="input-field">
                        <i className="material-icons prefix">title</i>
                        <input type="text" id='title' onChange={this.handleChange} />
                        <label htmlFor="title">Project Title</label>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">description</i>
                        <textarea id="content" className="materialize-textarea " data-length="150" onChange={this.handleChange}/>
                        <label htmlFor="content">Trip Content</label>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTrip: (trip) => dispatch(addTrip(trip))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTrip);
