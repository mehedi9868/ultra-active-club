import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './ActivityDetails.css';

const ActivityDetails = () => {
    const [exercise, setExercise] = useState([]);
    const [totalTimeRequired, setTotalTimeRequired] = useState(0);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercise(data));
    }, []);

    const handleExerciseTime = (time) => {
        const newTotalTime = totalTimeRequired + time;
        setTotalTimeRequired(newTotalTime);
        console.log(totalTimeRequired);
    }
    return (
        <div className='activity-container'>
            <div className='left-container'>
                <div>
                    <h2 className='site-title'>10 MINUTE CHALLANGE!</h2><br />
                    <p>Select today's exercise:</p>
                </div><br />
                <div className='activities'>
                    {
                        exercise.map(exercise => <Exercise
                            activity={exercise}
                            key={exercise.id}
                            handleExerciseTime={handleExerciseTime}
                        >
                        </Exercise>)
                    }
                </div>
            </div>
            <div className='activity-tracker-container'>
                <div className='info-container'>
                    <img src="" alt="" />
                    <div className='person-info'>
                        <p>Mehedi Hasan</p>
                        <small>Location: Jhenaidah</small>
                    </div>
                </div><br />
                <div className='person-details'>
                    <div>
                        <h5>75kg</h5>
                        <small>Weight</small>
                    </div>
                    <div>
                        <h5>6.5</h5>
                        <small>Height</small>
                    </div>
                    <div>
                        <h5>25years</h5>
                        <small>Age</small>
                    </div>
                </div><br />
                <p>Add a break</p><br />
                <div>
                    <button className='rounded-btn'>10sec</button>
                    <button className='rounded-btn'>15sec</button>
                    <button className='rounded-btn'>20sec</button>
                    <button className='rounded-btn'>30sec</button>
                    <button className='rounded-btn'>60sec</button>
                </div><br />
                <p>Excercise Details</p><br />
                <p className='exercise-time'>Exercise Time : {totalTimeRequired} sec</p>
                <p className='break-time'>Break Time</p>
                <button className='compleated-btn'>Activity Compleated</button>
            </div>
        </div>
    );
};

export default ActivityDetails;