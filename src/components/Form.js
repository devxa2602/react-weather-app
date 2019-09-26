import React from 'react';

function form(props) {
  return (
    <div>
    <form onSubmit={props.getWeather}>
        <input type='text' name='city' placeholder='Name'/>
		<input type='text' name='country' placeholder='Country'/>
		<button>Get Weather</button>
    </form>
      </div>
  );
}

export default form;
