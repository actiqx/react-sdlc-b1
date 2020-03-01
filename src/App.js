import React, { Component } from 'react';
import Header from './Layout/Header';
import Axios from 'axios';
import PeopleList from './Layout/PeopleList';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import PeopleDetails from './Layout/PeopleDetails';
class App extends Component {
  state={
    apptitle:'CRUD Example',
    people:[]
  }
  onChangeHandler=(event)=>{
    this.setState({name:event.target.value})
  }

  componentDidMount(){
    Axios.get('http://localhost:3001/people')
    .then(res=>{
    this.setState({people:res.data})
    })
  }
  render() {
    return (
      <div>
       <Header title={this.state.apptitle}></Header>
      
<Router>
  <div>
      <Switch>
         
          <Route path="/peopledetails/:id" component={PeopleDetails}>
          </Route>
          <Route path="/peopledetails" component={PeopleDetails}/>
          <Route path="/people" render={props=>(<PeopleList {...props} plist={this.state.people}></PeopleList>)}>
          </Route>
          <Redirect to="/people" from="/"/>
        </Switch>
      </div>
    </Router>
       
      </div>
    );
  }
}

export default App;