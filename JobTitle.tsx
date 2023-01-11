import * as React from 'react';
import './style.css';

export function JobTitle(props) {
  return (
    <div className={'job'}>
      {props.name} {props.lastname} {props.fn()}
    </div>
  );
}
