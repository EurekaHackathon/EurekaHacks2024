import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/Navbar";
import TimeTable from "@/components/TimeTable/TimeTable";
import styles from "@/styles/schedule.module.css";

export default function PrivacyPolicy() {
    const timeTableData = {
        startTime: {
            hour: 8,
            minute: 0
        },
        endTime: {
            hour: 22,
            minute: 0
        },
        timeInc: 30,
        columnNames: ["Time", "Theatre", "Library", "Activity Room", "Cafeteria"],
        events: [
            {
                name: "Opening Ceremony",
                color: "var(--terminal-red)",
                start: {
                    hour: 8,
                    minute: 0,
                },
                column: 2,
                duration: 30,
            },
            {
                name: "Team Finding",
                color: "var(--terminal-red)",
                start: {
                    hour: 8,
                    minute: 30,
                },
                column: 2,
                duration: 15,
            },
            {
                name: "Idea Brainstorm",
                color: "var(--terminal-red)",
                start: {
                    hour: 8,
                    minute: 45,
                },
                column: 2,
                duration: 30,
            },
            {
                name: "Git Essentials",
                color: "var(--terminal-blue)",
                start: {
                    hour: 9,
                    minute: 15,
                },
                column: 2,
                duration: 15,
            },
            {
                name: "Intro to Block Chain With Cryptochicks",
                color: "var(--terminal-blue)",
                start: {
                    hour: 9,
                    minute: 30,
                },
                column: 3,
                duration: 60,
            },
            {
                name: "Smash Bros Tournament",
                color: "var(--terminal-green)",
                start: {
                    hour: 10,
                    minute: 30,
                },
                column: 4,
                duration: 60,
            },
            {
                name: "Intro to Quantam Computing",
                color: "var(--terminal-blue)",
                start: {
                    hour: 11,
                    minute: 45,
                },
                column: 3,
                duration: 60,
            },
            {
                name: "Mario Kart Tournament",
                color: "var(--terminal-green)",
                start: {
                    hour: 12,
                    minute: 0,
                },
                column: 4,
                duration: 60,
            },
            {
                name: "Lunch",
                color: "var(--terminal-red)",
                start: {
                    hour: 13,
                    minute: 0,
                },
                column: 5,
                duration: 60,
            },
            {
                name: "Robotics with Orbit 3160",
                color: "var(--terminal-blue)",
                start: {
                    hour: 14,
                    minute: 0,
                },
                column: 3,
                duration: 60,
            },
            {
                name: "Reach Trivia",
                color: "var(--terminal-green)",
                start: {
                    hour: 14,
                    minute: 0,
                },
                column: 4,
                duration: 60,
            },
            {
                name: "Ping Pong Tournament",
                color: "var(--terminal-green)",
                start: {
                    hour: 15,
                    minute: 0,
                },
                column: 4,
                duration: 45,
            },
            {
                name: "Lecture on AI",
                color: "var(--terminal-blue)",
                start: {
                    hour: 16,
                    minute: 0,
                },
                column: 3,
                duration: 60,
            },
            {
                name: "City Guesser",
                color: "var(--terminal-green)",
                start: {
                    hour: 16,
                    minute: 0,
                },
                column: 4,
                duration: 45,
            },
            {
                name: "Chess Tournament",
                color: "var(--terminal-green)",
                start: {
                    hour: 17,
                    minute: 0,
                },
                column: 4,
                duration: 60,
            },
            {
                name: "TypeRacer",
                color: "var(--terminal-green)",
                start: {
                    hour: 18,
                    minute: 30,
                },
                column: 4,
                duration: 30,
            },
            {
                name: "Karaoke/Lounge",
                color: "var(--terminal-green)",
                start: {
                    hour: 19,
                    minute: 0,
                },
                column: 2,
                duration: 120,
            },
            {
                name: "Hot Wings Challenge",
                color: "var(--terminal-green)",
                start: {
                    hour: 20,
                    minute: 0,
                },
                column: 4,
                duration: 60,
            },
            {
                name: "Dinner",
                color: "var(--terminal-red)",
                start: {
                    hour: 20,
                    minute: 0,
                },
                column: 5,
                duration: 30,
            },
            {
                name: "Closing Ceremony",
                color: "var(--terminal-red)",
                start: {
                    hour: 21,
                    minute: 30,
                },
                column: 2,
                duration: 30,
            },
        ]
    };

    return (
        <>
            <Head>
                <title>EurekaHacks Event Schedule</title>
                <meta name="theme-color" content="#22F0E7" />
                <meta property="og:title" content="EurekaHacks" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://eurekahacks.ca/schedule"
                />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/pPsYsv6.png"
                />
                <meta
                    property="og:description"
                    content="Abbey Park High School's annual hackathon. Join us on May 4th for 14 hours of coding, mentorship & fun (+ free food!)"
                />
                <meta
                    property="description"
                    content="Abbey Park High School's annual hackathon. Join us on May 4th for 14 hours of coding, mentorship & fun (+ free food!)"
                />
            </Head>

            <NavBar />

            <div className={styles["header"]}>
                <div className={styles["curtain"]}>
                    <h1>Event Schedule</h1>
                </div>
            </div>

            <div className={styles["schedule"]}>
                <TimeTable {...timeTableData} />
            </div>

            <Footer />
        </>
    );
}
