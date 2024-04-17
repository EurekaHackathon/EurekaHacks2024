import { Fragment } from "react";
import styles from "./TimeTable.module.css";

export default function TimeTable({ startTime, endTime, timeInc, columnNames, events }) {
    var times = [startTime];
    
    for (;;) {
        let prevTime = times.at(-1);
        let nextTime = { hour: prevTime.hour, minute: prevTime.minute + timeInc };
        
        if (nextTime.minute >= 60) {
            nextTime.hour += Math.floor(nextTime.minute / 60);
            nextTime.minute %= 60;
        }
        
        if (prevTime.hour >= endTime.hour && prevTime.minute >= endTime.minute)
            break;

        times.push(nextTime);
    }
    
    return (
        <div className={styles.table}>
            {columnNames.map((name, index) => {
                return (
                    <p key={index + 200000} className={styles.columnName}>
                        {name}
                    </p>
                );
            })}

            {times.map((time, index) => {
                let isHour = !time.minute;

                return (
                    <Fragment key={index}>
                        <div  className={styles.marker}>
                            <p className={isHour ? styles.isHour : styles.isMinute}>
                                {time.hour <= 12 ? time.hour : time.hour - 12}:{isHour ? "00" : time.minute}
                            </p>
                        </div>

                        <div className={styles.divider}></div>
                    </Fragment>
                );
            })}

            {events.map((event, index) => {
                let rowSpan = Math.floor(event.duration / timeInc * 2)
                let rowStart = Math.floor(((event.start.hour - startTime.hour) * 60 + event.start.minute - startTime.minute) / timeInc * 2 + 2);

                return (
                    <div
                        key={index}
                        className={styles.slot}
                        style={{
                            backgroundColor: event.color,
                            gridRow: `${rowStart} / span ${rowSpan}`,
                            gridColumn: event.column,
                        }}
                    >
                        <p>{event.name}</p>
                    </div>
                );
            })}  
        </div>
    );
}
