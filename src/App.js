import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import activities from './data/data.json';
import Activities from './pages/Activities';
import ActivitiesDetail from './pages/ActivitiesDetail';
import './App.css'


class App extends Component {
  state = {
    activitiesList: activities.splice(0,18),
    total: 0,
    cart:[],
    bookmark:[],
    numberOfCart: 0,
    numberOfBookmark: 0,
  }
  render() {
    const { activitiesList, total, cart, bookmark, numberOfCart, numberOfBookmark } = this.state
    console.log('object', activitiesList)
    return (
      <Router>
        <Switch>
          <Route path="/activities" exact render={(props) => {
            return (
              <Activities
                activities={activitiesList}
                total={total}
                cart={cart}
                bookmark={bookmark}
                numberOfCart={numberOfCart}
                numberOfBookmark={numberOfBookmark}
                {...props}/>
            )}}>
          </Route>
          <Route path="/activities/:id" render={(props) => {
            return (
              <ActivitiesDetail activities={activitiesList} {...props}/>
            )}}>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
