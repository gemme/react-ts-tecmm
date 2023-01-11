import * as React from 'react';
import {useState, useEffect} from 'react';
import './style.css';

// arrow functions

export const Counter = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect');
    const id = setInterval(() => {
      console.log('setinterval');
      // acceder al estado anterior
      setCount((prevState) => { return  prevState + 1 ;});
    }, 2000);
    // memory leaks
    // componentWillUnmount
    return () => {
      clearInterval(id);
    }
  }, []);
  return (
  <div className={'counter'}>
    {count}
    <div>{10 + 52}</div>
    {
      [1, 2, 3].map(v => <div>{props.title + v}</div>)
    }
  </div>);
};
