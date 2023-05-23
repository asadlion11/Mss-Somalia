import React from 'react'
import style from './timer.module.scss'
const Time = ({days, hours, minutes, seconds}) => {
  return (
    <div>
        <h1>VOTING ENDS IN</h1>
        <div className={style.time}>
            <div className={style.digit_text}>
                <span className={style.digit}>{days}:</span>
                <span className={style.text}>Days</span>
            </div>
            <div className={style.digit_text}>
                <span className={style.digit}>{hours}:</span>
                <span className={style.text}>Hours</span>
            </div>
            <div className={style.digit_text}>
                <span className={style.digit}>{minutes}:</span>
                <span className={style.text}>Minutes</span>
            </div>
            <div className={style.digit_text}>
                <span className={style.digit}>{seconds}</span>
                <span className={style.text}>Seconds</span>
            </div>
        </div>
    </div>
  )
}

export default Time