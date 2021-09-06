/* React components */
import { Component } from 'react';
const profilePicture = require('@assets/img/profile_picture.webp').default;

export default class Picture extends Component {
  render() {
    return (
      <div className={`tm-profile-picture ${this.props.className}`}>
        <img src={profilePicture} alt="developer_husdady" />
      </div>
    )
  }
}