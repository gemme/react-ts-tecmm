import * as React from 'react';
import './style.css';
import {MyComponent} from './MyComponent';
import {Counter} from './Counter';
import {MyForm} from './MyForm';
MyForm
export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mount: false
    };
  }

  render(){
    return (
      <React.Fragment>
      <MyForm />
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
      
      {this.state.mount && <Counter title={'My counter'}/>}

      </React.Fragment>
    );
  }
}