import React, { Component } from 'react';
import Axios from 'axios';
class PeopleDetails extends Component {
    state={
        peopleDetails:{}
    }
    componentDidMount(){
        // this.props.match.params
        Axios.get('http://localhost:3001/people/'+this.props.match.params.name)
        .then(res=>{
        this.setState({peopleDetails:res.data})
        })
    }
    render() {
        const peopleDetails = this.state.peopleDetails;
        return (
            <div>
                Name: <input type="text" name="" value={peopleDetails.name}/> <br/>
                Height: <input type="text" name="" value={peopleDetails.height}/> <br/>
                Mass: <input type="text" name="" value={peopleDetails.mass}/> <br/>
                Hair Color: <input type="text" name="" value={peopleDetails.hair_color}/> <br/>
            <input type="submit" name="" value="Submit" className="btn btn-primary"/> <br/>
            </div>
        );
    }
}

export default PeopleDetails;