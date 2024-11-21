import React, { Component } from 'react'
import loading from './loading.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "10vh" }}>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
