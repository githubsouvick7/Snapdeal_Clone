import React, { useState, useEffect } from "react";

const Timer = ({ initialTimeInSeconds }) => {
    const colors = ["#FF0000", "#00FF00", "#0000FF"];
    const [timeRemaining, setTimeRemaining] = useState(initialTimeInSeconds);
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 1);
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, [timeRemaining, colors.length]);

    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

    return (
        <div
            style={{
                color: colors[colorIndex],
                fontSize: "2rem",
                textAlign: "center"
            }}
        >
            {timeRemaining > 0 ? (
                <p style={{ fontSize: '24px' }}>{`Offer ends in ${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`}</p>
            ) : (
                "Time is up!"
            )}
        </div>
    );
};

export default Timer;
