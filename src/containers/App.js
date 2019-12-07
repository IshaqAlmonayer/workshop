import React from 'react';
import './App.css';
import Form from './Form';
import { connect } from 'react-redux';

function App(props) {
  console.log(props);
  return (
    <div className="container">
      <Form></Form>
      <list > Venues:
      {props.venues.map((venue)=>
        <li>{venue.name}</li>
      )}
      </list>
<br/>
      <list > restaurants:
      {props.restaurants.map((restaurant)=>
        <li>{restaurant.name}</li>
      )}
      </list>

    </div>
  );
}

const mapStateToProps=(state)=>({
  venues: state.venues,
  restaurants: state.resturaunt
})

export default connect(mapStateToProps)(App);
