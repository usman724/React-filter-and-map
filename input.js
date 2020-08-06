import React, { Component } from 'react'

export class Input extends Component {
     
      render() {
            return (
                  <div >
          <input 
           onChange={this.props.action}
          />              
                  </div>
            )
      }
}

export default Input
