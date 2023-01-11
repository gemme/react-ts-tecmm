import * as React from 'react';
import {useState} from 'react';

export function MyForm(props){
  const [value, setValue] = useState('hello ernesto');
  return (
    <div>
     <div> Mi Formulario</div>
      <input
        type='text'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        />
      <div>{value}</div>
    </div>
  );
}