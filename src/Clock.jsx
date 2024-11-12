import { useState, useEffect } from 'react'
import './Clock.css';

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
            <div className="row min-vw-100 min-vh-100 justify-content-center align-items-center bg-info-subtle bg-image">
                <div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-3">

                    <div className="bg-white d-flex flex-column justify-content-center align-items-center w-100 pt-3 px-3 rounded-5">
                        <div className='text-center text-success h3 m-3'>Digital Clock</div>
                        <div className="h2">
                            {formatTimeWithLeadingZero(formatHour(currentTime.getHours()))} :
                            {formatTimeWithLeadingZero(currentTime.getMinutes())}:
                            {formatTimeWithLeadingZero(currentTime.getSeconds())}
                            {currentTime.getHours() >= 12 ? " PM" : " AM"}
                        </div>
                        <div className="">{formatDate(currentTime)}</div>
                        <a href="https://www.linkedin.com/in/muthu-ammew" className="text-black text-decoration-none m-2">Designed by <span className="text-success text-decoration-underline fw-bolder">Muthu</span></a>
                    </div>
                </div>
            </div>
        </>
    )
}
