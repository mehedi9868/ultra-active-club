import React from 'react';
import './Exercise.css';

const Exercise = () => {
    return (
        <div className='exercise-card'>
            <img src="https://i.pinimg.com/originals/47/ad/d5/47add5e5613dc702c7d97ce1be717859.gif" alt="" />
            <h3>Exercise : Dumbbell Incline Curl.</h3>
            <h4>Time Required : 45sec</h4>
            <button className='add-to-list-btn'>Add to list</button>
        </div>
    );
};

export default Exercise;