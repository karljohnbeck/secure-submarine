import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class UserInfo extends Component {
  state = {
    heading: 'UserInfo Component',
  };

  componentDidMount() {
      this.props.dispatch({type: 'FETCH_USERINFO'})
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        {JSON.stringify(this.props.store.userInfoReducer)}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserInfo);