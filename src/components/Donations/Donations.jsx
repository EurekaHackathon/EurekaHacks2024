import styles from "@/components/Donations/Donations.module.css";
import DonateImage from "@/../public/Sponsors/donation.webp";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/EurekaIcon2024.png";

export default function Donations() {
    return (
        <>
            <Link href="/" className={styles["navbar-box"]}>
                <Image
                    className={styles["navbar-icon"]}
                    src={Logo}
                    alt="Eureka! Icon"
                />
            </Link>
            <div className={styles["donate"]}>
                <div className={styles["donate-text"]}>
                    <h2>Donation Steps</h2>
                    <p>Thank you for contributing to our hackathon!</p>
                    <p>All donations above $20 will be issued a tax receipt.</p>
                    <a
                        className={styles.link}
                        href="https://hdsb.schoolcashonline.com/Fee/Details/583/181/false/true"
                    >
                        Donate through School Cash Online
                    </a>
                </div>

                <Image
                    className={`${styles["donate-image"]} ${styles["glow"]}`}
                    src={DonateImage}
                    alt="Donation Instructions"
                />
            </div>
        </>
    );
}
