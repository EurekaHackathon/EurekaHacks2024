import { Fragment, useState, useRef, useEffect } from "react";
import styles from "./TimeTable.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function TimeTable({
    startTime,
    endTime,
    timeInc,
    columnNames,
    events,
}) {
    var times = [startTime];
    const [selectedEvent, setSelectedEvent] = useState(null);
    const popUpRef = useRef(null);

    function handleOutside(event) {
        if (selectedEvent != null && popUpRef.current && !popUpRef.current.contains(event.target)) {
            setSelectedEvent(null);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutside);

        return () => {
            document.removeEventListener("mousedown", handleOutside);
        };
    }, []);

    for (;;) {
        let prevTime = times.at(-1);
        let nextTime = {
            hour: prevTime.hour,
            minute: prevTime.minute + timeInc,
        };

        if (nextTime.minute >= 60) {
            nextTime.hour += Math.floor(nextTime.minute / 60);
            nextTime.minute %= 60;
        }

        if (prevTime.hour >= endTime.hour && prevTime.minute >= endTime.minute)
            break;

        times.push(nextTime);
    }

    return (
        <>
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
                            <div className={styles.marker}>
                                <p
                                    className={
                                        isHour ? styles.isHour : styles.isMinute
                                    }
                                >
                                    {time.hour <= 12
                                        ? time.hour
                                        : time.hour - 12}
                                    :{isHour ? "00" : time.minute}
                                </p>
                            </div>
                            <div className={styles.divider} />
                        </Fragment>
                    );
                })}
                {events.map((event, index) => {
                    let rowSpan = Math.floor((event.duration / timeInc) * 2);
                    let rowStart = Math.floor(
                        (((event.start.hour - startTime.hour) * 60 +
                            event.start.minute -
                            startTime.minute) /
                            timeInc) *
                            2 +
                            2,
                    );
                    let endTime = {
                        hour:
                            event.start.minute + (event.duration % 60) >= 60
                                ? event.start.hour +
                                  Math.floor(event.duration / 60) +
                                  1
                                : event.start.hour +
                                  Math.floor(event.duration / 60),
                        minute:
                            (event.start.minute + (event.duration % 60)) % 60,
                    };

                    return (
                        <motion.div
                            key={index + 1}
                            className={styles.slot}
                            style={{
                                backgroundColor: event.color,
                                gridRow: `${rowStart} / span ${rowSpan}`,
                                gridColumn: event.column,
                            }}
                            layoutId={index + 1}
                            onClick={() => setSelectedEvent(index + 1)}
                        >
                            <motion.p>{event.name}</motion.p>
                            <motion.p>
                                {event.start.hour <= 12
                                    ? event.start.hour
                                    : event.start.hour - 12}
                                :
                                {event.start.minute == 0
                                    ? "00"
                                    : event.start.minute}
                                -
                                {endTime.hour <= 12
                                    ? endTime.hour
                                    : endTime.hour - 12}
                                :{endTime.minute == 0 ? "00" : endTime.minute}
                            </motion.p>
                        </motion.div>
                    );
                })}
            </div>
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        className={styles.filter}
                        transition={{
                            duration: 0.5,
                        }}
                        initial={{ backgroundColor: "#00000000" }}
                        animate={{ backgroundColor: "#00000088" }}
                        exit={{ backgroundColor: "#00000000" }}
                    >
                        <motion.div
                            layoutId={selectedEvent}
                            className={styles.opened}
                            style={{
                                borderTopColor: events[selectedEvent - 1].color,
                            }}
                            ref={popUpRef}
                        >
                            <motion.p>
                                {events[selectedEvent - 1].name}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
