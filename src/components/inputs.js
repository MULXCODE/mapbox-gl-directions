'use strict';

import React, { Component, PropTypes } from 'react';
import Input from './shared/input';

export default class Inputs extends Component {

  constructor() {
    super();
  }

  query() {
    // console.log(e);
  }

  clearQuery(e) {
    var ref = e.target.getAttribute('data-ref');
    var target = this.refs[ref].getDOMNode();
    target.value = '';
    target.focus();
  }

  render() {
    return (
      <div className='mapbox-directions-component mapbox-directions-inputs'>

        <Input
          options={{
            mode:'origin',
            placeholder:'start',
            icon:'depart'
          }}
        />
        <span className='directions-icon directions-icon-reverse directions-reverse' title='Reverse origin &amp; destination'></span>
        <Input
          options={{
            mode:'destination',
            placeholder:'end',
            icon:'arrive'
          }}
        />

        {this.props.results && <div className='mapbox-directions-profile'>
          <span>
            <input
              type='radio'
              name='profile'
              id='mapbox-directions-profile-driving'
            />
            <label htmlFor='mapbox-directions-profile-driving'>Driving</label>
          </span>
          <span>
            <input
              type='radio'
              name='profile'
              id='mapbox-directions-profile-walking'
            />
            <label htmlFor='mapbox-directions-profile-walking'>Walking</label>
          </span>
          <span>
            <input
              type='radio'
              name='profile'
              id='mapbox-directions-profile-cycling'
            />
            <label htmlFor='mapbox-directions-profile-cycling'>Cycling</label>
          </span>
        </div>}
      </div>
    );
  }
}

Inputs.propTypes = {
  actions: PropTypes.object.isRequired,
  inputs: PropTypes.object.isRequired
};
