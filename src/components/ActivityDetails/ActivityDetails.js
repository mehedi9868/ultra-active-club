import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './ActivityDetails.css';
import Logo from '../../images/Logo.jpg';
import Mehedi from '../../images/Mehedi.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActivityDetails = () => {
    const [exercise, setExercise] = useState([]);
    const [totalTimeRequired, setTotalTimeRequired] = useState(0);
    const [breakTime, setBreakTime] = useState(0);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercise(data));
    }, []);

    const handleExerciseTime = (time) => {
        const newTotalTime = totalTimeRequired + time;
        setTotalTimeRequired(newTotalTime);
    }

    const addToDb = (value = 0) => {
        const newValue = { time: value };
        localStorage.setItem("breakTime", JSON.stringify({ ...newValue }, newValue));
        setBreakTime();
    }
    useEffect(() => {

        const Time = localStorage.getItem("breakTime");
        const newTime = JSON.parse(Time);
        const time = newTime?.time;
        setBreakTime(time);
        console.log(time);
        if (time === undefined) {
            addToDb();
        } // to solve netlify white page issue.
    }, [breakTime]);
    // added a tost 
    const notify = () => toast("Activity Compleated!", { position: "top-center" });
    return (
        <div className='activity-container'>
            <div className='left-container'>
                <div>
                    <img src={Logo} alt="" />
                    <h2 className='site-title'>FIVE MINUTE CHALLANGE!</h2><br />
                    <p>Select today's exercise:</p>
                    <ToastContainer />
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
                    <img src={Mehedi} alt="" />
                    <div className='person-info'>
                        <p>Mehedi Hasan</p>
                        <small>Location: Jhenaidah</small>
                    </div>
                </div><br />
                <div className='person-details'>
                    <div>
                        <h5>70kg</h5>
                        <small>Weight</small>
                    </div>
                    <div>
                        <h5>5.6"</h5>
                        <small>Height</small>
                    </div>
                    <div>
                        <h5>26years</h5>
                        <small>Age</small>
                    </div>
                </div><br />
                <p>Add a break</p><br />
                <div>
                    <button className='rounded-btn' onClick={() => addToDb(10)}>10sec</button>
                    <button className='rounded-btn' onClick={() => addToDb(15)}>15sec</button>
                    <button className='rounded-btn' onClick={() => addToDb(20)}>20sec</button>
                    <button className='rounded-btn' onClick={() => addToDb(30)}>30sec</button>
                    <button className='rounded-btn' onClick={() => addToDb(60)}>60sec</button>
                </div><br />
                <p>Excercise Details</p><br />
                <p className='exercise-time'>Exercise Time : {totalTimeRequired} sec</p>
                <p className='break-time'>Break Time : {breakTime} sec</p>
                <button className='compleated-btn' onClick={notify}>Activity Compleated</button>
            </div>
        </div>
    );
};

export default ActivityDetails;