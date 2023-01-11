// ts typescript - super set de javascript, dynamic types
// function sum(a, b) {
//  return a + b;
// }
// sum('hola', 'mundo'); // thrown an error
// error in production
// function(a: number, b: number) { return a + b; } // sum('hola', 'mundo');

// ts / tsx

// tsx / jsx

// tsx ---> componente en React

// 16.8 antes se usaban class components

// 16.8 despues se usan hooks

// React esta orientado a componentes
// componentes con o sin estado / state
// todos los componentes properties / props
// 16.8 antes clases y funciones
// hooks
// 16.8 despues funciones / hooks
// lifecycle hooks - Mount / Render / Unmount

import * as React from 'react';
import { useState, useEffect } from 'react';
import {JobTitle} from './JobTitle';

// lyfecycle hooks
// class MyComponent extends React.Component {

// }
// componente de tipo funcion
// dumb component / stateless
/*
export function MyComponentF(props) {
  const job = props.fn();
  return (
    <div>
      <div>Mexico Means the Navel of the moon? {props.name}</div>
      <div>{job}</div>
      <button>True</button>
      <button>False</button>
    </div>
  );
}
*/

// smart components / stateful component
// lyfecycle hooks
// sugar syntactic
export class MyComponentCLASSES extends React.Component<unknown> {
  constructor(props) {
    super(props);

    this.state = {
      answer: null,
      starwars: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://swapi.dev/api/people/1')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          starwars: data.name,
        });
      });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');

    return (
      <React.Fragment>
        <div>Mexico Means the Navel of the moon? {this.state.starwars}</div>
        <div>{this.state.answer}</div>
        <button
          onClick={() => {
            console.log('clicked on true');
            // this.state.answer = 'Correcto';
            this.setState({
              answer: 'Correcto!',
            });
          }}
        >
          True
        </button>
        <button
          onClick={() => {
            console.log('clicked on false');
            this.setState({
              answer: 'Incorrecto!',
            });
          }}
        >
          False
        </button>
      </React.Fragment>
    );
  }
}

export function MyComponent(props) {
  // hook react
  // [respuesta, actuliazaMiRespuesta]
  // const [respuesta, actuliazaMiRespuesta] = useState(null);
  // reglas con hooks
  // se inicializan al principio
  const [answer, setAnswer] = useState(null);
  const [starwars, setStarwars] = useState('');
  // lifecycle hooks
  // componentDidMount
  useEffect(() => {
    console.log('componentDidMount');
    fetch('https://swapi.dev/api/people/1')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setStarwars(data.name);
      });
  }, []);
  return (
    <React.Fragment>
      <div>Mexico Means the Navel of the moon? {starwars}</div>
      <JobTitle 
        name={props.name}
        lastname={props.lastname}
        fn={props.fn}
      />
      <div>{answer}</div>
      <button
        onClick={() => {
          console.log('clicked on true');
          // this.state.answer = 'Correcto';
          setAnswer('Correcto');
        }}
      >
        True
      </button>
      <button
        onClick={() => {
          console.log('clicked on false');
          setAnswer('Incorrecto');
        }}
      >
        False
      </button>
    </React.Fragment>
  );
}
