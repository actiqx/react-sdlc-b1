import React, { Component } from 'react';
import Axios from 'axios';
class PeopleDetails extends Component {
    state = {
        peopleDetails: {},
        mode:'add'
    }
    componentDidMount() {
        if(this.props.match.params.id){
            this.setState({mode:'edit'})
            Axios.get('http://localhost:3001/people/' + this.props.match.params.id)
            .then(res => {
                this.setState({ peopleDetails: res.data })
            })
        }else{
            this.setState({peopleDetails: {},mode:'add'})
        }
    }
    onChangeHandler = (event) => {
        const ppleDetails = { ... this.state.peopleDetails }
        ppleDetails[event.target.name] = event.target.value;
        this.setState({ peopleDetails: ppleDetails })
    }
    onSubmitHandler = () => {
        Axios.put('http://localhost:3001/people/' + this.props.match.params.id, this.state.peopleDetails)
            .then(res => {
                console.log(res.data)
                alert('REcord Updated SuccessFully')
            })
    }

    componentDidUpdate(prevProps,prevState){
        console.log(prevProps,prevState,this.state,this.props);
    }
    render() {
        const peopleDetails = this.state.peopleDetails;
        let entry;
        if(this.state.mode==='edit'){
             entry=<>Id: <input type="" name="" value={this.props.match.params.id} readOnly/> <br/></>
        }
        return (
            <div>
             { entry}
                Name: <input type="text" name="name" value={peopleDetails.name} onChange={this.onChangeHandler} /> <br />
                Height: <input type="text" name="height" value={peopleDetails.height} onChange={this.onChangeHandler} /> <br />
                Mass: <input type="text" name="mass" value={peopleDetails.mass} onChange={this.onChangeHandler} /> <br />
                Hair Color: <input type="text" name="hair_color" value={peopleDetails.hair_color} onChange={this.onChangeHandler} /> <br />
                <input type="submit" name="" value="Submit" className="btn btn-primary" onClick={this.onSubmitHandler} /> <br />
            </div>
        );
    }
}

export default PeopleDetails;