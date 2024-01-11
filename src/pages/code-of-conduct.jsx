import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/Navbar";
import styles from "@/styles/policies.module.css";
import Head from "next/head";

export default function CodeOfConduct() {
    return (
        <>
            <Head>
                <title>EurekaHacks Code of Conduct</title>
                <meta name="theme-color" content="#22F0E7" />
                <meta property="og:title" content="EurekaHacks" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://eurekahacks.ca/code-of-conduct"
                />
                <meta
                    property="og:image"
                    content="https://i.imgur.com/pPsYsv6.png"
                />
                <meta
                    property="og:description"
                    content="Abbey Park High School's annual hackathon. Join us on March 2nd for 14 hours of coding, mentorship & fun (+ free food!)"
                />
                <meta
                    property="description"
                    content="Abbey Park High School's annual hackathon. Join us on March 2nd for 14 hours of coding, mentorship & fun (+ free food!)"
                />
            </Head>
            <NavBar />
            <div className={styles["header"]}>
                <div className={styles["curtain"]}>
                    <h1>Code Of Conduct</h1>
                </div>
            </div>
            <div className={styles["code-of-conduct"]}>
                <p>
                    EurekaHACKS strives to create a hackathon environment where
                    every participant and volunteer feels welcome, included,
                    respected, and secure. To uphold this commitment, all
                    attendees, spanning sponsors, students, speakers, judges,
                    volunteers, and organizers, are expected to adhere to the
                    following code of conduct at all times.
                </p>

                <h3>Harassment Policy</h3>
                <p>
                    Harassment encompasses various behaviors, including but not
                    limited to offensive written posts, comments, or messages
                    related to gender, age, sexual orientation, ability,
                    physical appearance, race, or religion. It also includes the
                    display of sexual or graphic images in public spaces,
                    deliberate intimidation, stalking, following, harassment,
                    photography, or video recording without consent, sustained
                    disruption of talks or events, inappropriate contact, and
                    unwelcome sexual attention.
                </p>
                <h3>Consequences</h3>
                <p>
                    Participants engaging in any of these harmful behaviors will
                    be promptly requested to cease their actions. Sponsors,
                    speakers, volunteers, and organizers are all expected to
                    adhere to the anti-harassment policy. Furthermore, hacks or
                    projects submitted by teams that violate this code may face
                    disqualification or be denied the right to demo at the
                    discretion of the event organizers.
                </p>
                <h3>Photography and Privacy</h3>
                <p>
                    While photography is encouraged, participants should be
                    given a reasonable chance to opt out. If someone objects to
                    being photographed, their request should be respected.
                    Taking photographs in contexts where individuals have a
                    reasonable expectation of privacy, such as capturing
                    screenshots or pictures of their screens without consent, is
                    considered inappropriate.
                </p>
                <h3>Reporting Procedures</h3>
                <p>
                    If you experience harassment, witness someone else being
                    harassed, or have any concerns, please follow the reporting
                    procedures provided below and report the incident
                    immediately.
                </p>
                <p>
                    Feel free to reach out to any organizers or the on-duty
                    security guard at any time. For direct communication with
                    the Co-Directors, you can email them at{" "}
                    <a href="mailto:hello@eurekahacks.ca">
                        hello@eurekahacks.ca
                    </a>
                    .
                </p>
                <p>
                    In case of emergency, please contact the following resources
                    immediately:
                    <br />
                    Oakville Police/Fire/Paramedics
                    <br />
                    Emergency: <a href="tel:911">911</a>
                    <br />
                    Non-Emergency: <a href="tel:905-825-4777">905-825-4777</a>
                </p>
                <p>
                    Credit for this code of conduct is attributed to the
                    following codes:
                </p>
                <ul className={styles.list}>
                    <li>McHacks</li>
                    <li>Major League Hacking</li>
                    <li>Hack Code</li>
                    <li>Hack@Brown</li>
                    <li>JustHack</li>
                </ul>
                <p>
                    For any inquiries about this code of conduct, please contact{" "}
                    <a href="mailto:hello@eurekahacks.ca">
                        hello@eurekahacks.ca
                    </a>
                    .
                </p>
                <p>
                    <b>
                        EurekaHACKS reserves the right to modify this code of
                        conduct at any time.
                    </b>
                </p>
                <p>Last Updated: January 2nd 2024.</p>
            </div>
            <Footer />
        </>
    );
}
