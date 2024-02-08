import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/Navbar";
import styles from "@/styles/policies.module.css";
import Head from "next/head";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>EurekaHacks Privacy Policy</title>
                <meta name="theme-color" content="#22F0E7" />
                <meta property="og:title" content="EurekaHacks" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://eurekahacks.ca/privacy-policy"
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
                    <h1>Privacy Policy</h1>
                </div>
            </div>
            <div className={styles["privacy-policy"]}>
                <p>
                    EurekaHACKS, formerly known as Eureka! Hackathon, places a
                    paramount emphasis on safeguarding the privacy and personal
                    data of our participants, including hackers, sponsors,
                    volunteers, and other contributors. To conduct our events,
                    we may need to gather specific information, both passively
                    through website usage analytics and actively through
                    application data submitted by our hackers. We are committed
                    to transparently explaining the purpose of collecting this
                    data in simple terms and ensuring the utmost respect for
                    privacy in its handling.
                </p>
                <h3>Analytics Data</h3>
                <p>
                    We gather analytics data from various online platforms,
                    including our website at{" "}
                    <a href="https://eurekahacks.ca/">
                        https://eurekahacks.ca/
                    </a>
                    , and our Instagram account (eureka_hacks). This data, which
                    is anonymous, may encompass metrics from our web properties.
                    We may share this information publicly or privately with
                    third parties, presenting it in broad categories such as
                    monthly visitor counts to maintain transparency.
                </p>
                <h3>Application and Event Data</h3>
                <p>
                    To join EurekaHACKS, we require the minimum necessary
                    information to ensure the smooth operation of the event. The
                    collected data will be exclusively used within the services
                    employed by EurekaHACKS for the Application Dashboard, which
                    may include platforms like Tally, Google Sheets, and
                    Netlify.
                </p>
                <h3>Emails and Other Messages</h3>
                <p>
                    Information conveyed through emails and Instagram direct
                    messages (DMs) will remain confidential and accessible only
                    to the organizing team of EurekaHACKS, unless explicit
                    permission is granted.
                </p>
                <h3>How we keep your data safe</h3>
                <p>
                    EurekaHACKS employs industry-standard security measures and
                    encryption techniques to collect and protect your data. Our
                    infrastructure is primarily hosted in Google&apos;s data
                    centers, which adhere to rigorous and industry-standard
                    protocols to prevent unauthorized access. Internally, data
                    access is closely monitored with zero tolerance for
                    unauthorized use. Access to application data is restricted
                    to the essential organizers, while volunteers and other
                    involved parties have limited access for basic operational
                    tasks, such as check-in and registration on the event day.
                </p>
                <h3>Deletion Policy</h3>
                <p>
                    Upon receiving a written request along with proof of
                    identity via email sent to{" "}
                    <a href="mailto:hello@eurekahacks.ca">
                        hello@eurekahacks.ca
                    </a>
                    , we will delete all relevant personal data within 30 days.
                    It&apos;s important to be aware that your data may persist
                    in our rolling backups beyond this period. However, it will
                    not be utilized, and any restored versions will have the
                    data deleted if required.
                </p>
                <h3>Photography and Media Release</h3>
                <p>
                    By participating in EurekaHACKS, you acknowledge and agree
                    that EurekaHACKS, its organizers, and affiliated partners
                    may capture photographs, videos, or other media during the
                    event that may include your likeness, voice, or
                    participation. These images and recordings may be used for
                    promotional, educational, and informational purposes, both
                    online and offline. If you have specific concerns or
                    objections to the use of media featuring you, please contact
                    our team at hello@eurekahacks.ca. We will make reasonable
                    efforts to accommodate such requests, although we cannot
                    guarantee the complete removal of already published
                    materials.
                </p>
                <h3>Questions</h3>
                <p>
                    Any inquiries regarding the EurekaHACKS privacy policy can
                    be directed to{" "}
                    <a href="mailto:hello@eurekahacks.ca">
                        hello@eurekahacks.ca
                    </a>
                    . We prioritize your privacy and welcome any feedback or
                    criticism to ensure your comfort with our operational
                    practices.
                </p>
                <p>
                    <b>
                        EurekaHACKS reserves the right to modify this privacy
                        policy at any time.
                    </b>
                </p>
                <p>Last Updated: January 3nd, 2024.</p>
            </div>
            <Footer />
        </>
    );
}
