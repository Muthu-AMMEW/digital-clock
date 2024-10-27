import { useState, useEffect } from 'react'

export default function Clock() {

    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTimeWithLeadingZero = (num) => {
        return num < 10 ? ` 0${num} ` : ` ${num} `;
    };

    const formatHour = (hour) => {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    };

    const formatDate = (date) => {
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString(undefined, options)
    };

    return (
        <>
            <div className="">
                <h1>Digital Clock</h1>
                <div className="">
                    {formatTimeWithLeadingZero(formatHour(currentTime.getHours()))} :
                    {formatTimeWithLeadingZero(currentTime.getMinutes())}:
                    {formatTimeWithLeadingZero(currentTime.getSeconds())}
                    {currentTime.getHours() >= 12 ? " PM" : " AM"}
                </div>
                <div className="">{formatDate(currentTime)}</div>
            </div>
        </>
    )
}
