import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const { id, name, picture, timeRequired } = props.activity
    console.log(id, name, picture, timeRequired);
    return (
        <div className='exercise-card'>
            <img src={picture} alt="" />
            <h3>Exercise : {name}</h3>
            <h4>Time Required : {timeRequired} sec</h4>
            <button className='add-to-list-btn'>Add to list</button>
        </div>
    );
};

export default Exercise;