import React from 'react';
import './Exercise.css';

const Exercise = ({ handleExerciseTime, activity }) => {
    // console.log(props);
    // const { handleExerciseTime, activity } = props
    const { name, picture, timeRequired } = activity;
    return (
        <div className='exercise-card'>
            <img src={picture} alt="" />
            <h3>Exercise : {name}</h3>
            <h4>Time Required : {timeRequired} sec</h4>
            <button className='add-to-list-btn' onClick={() => handleExerciseTime(timeRequired)}>Add to list</button>
        </div>
    );
};

export default Exercise;