import * as React from 'react';
import './style.css';
import {MyComponent} from './MyComponent';
import {Counter} from './Counter';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mount: true
    };
  }

  render(){
    return (
      <React.Fragment>
       {this.state.mount && <MyComponent
          name={'Jose'}
          lastname={'Martinez'}
          fn={() => 'I am developer'}
        />
        }
        <button onClick={
          () => {
            this.setState((prevState) => {
              return {
                // incorrect
                //mount: !this.state.mount
                // correct 
                mount: !prevState.mount
              }
            })
          }
        }>Mount/Unmount</button>
      
      <Counter />
      </React.Fragment>
    );
  }
}