import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Logo from "@/../public/EurekaLogo2024.png";
import { BsInstagram, BsLinkedin, BsTiktok, BsDiscord } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    const iconAnimations = {
        target: "_blank",
        rel: "noopener noreferrer",
        whileHover: { scale: 1.2, rotate: 10 },
        whileTap: { scale: 0.8, rotate: -10, borderRadius: "100%" },
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.grid}>
                    <div className={styles.left}>
                        <Link href="/">
                            <Image
                                className={styles.logo}
                                src={Logo}
                                alt="EurekaIcon"
                            />
                        </Link>
                        <div className={styles.textLogo}>
                            <h2>Eureka</h2>
                            <h3>HACKS</h3>
                        </div>
                    </div>
                    <div>
                        <p className={styles.title}>Social Media</p>
                        <div className={styles.socials}>
                            <motion.a
                                className={styles.instagram}
                                href="https://www.instagram.com/eureka_hacks/"
                                {...iconAnimations}
                            >
                                <BsInstagram />
                            </motion.a>

                            <motion.a
                                className={styles.linkedin}
                                href="https://www.linkedin.com/company/eureka-hackthon/about/"
                                {...iconAnimations}
                            >
                                <BsLinkedin />
                            </motion.a>

                            <motion.a
                                className={styles.tiktok}
                                href="https://www.tiktok.com/@eurekahacks?lang=en"
                                {...iconAnimations}
                            >
                                <BsTiktok />
                            </motion.a>

                            <motion.a
                                className={styles.discord}
                                href="https://discord.gg/nff6VueNgk"
                                {...iconAnimations}
                            >
                                <BsDiscord />
                            </motion.a>
                        </div>
                    </div>
                    <div>
                        <p className={styles.title}>Links</p>
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <Link className={styles.link} href="/">
                                    Home
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link
                                    className={styles.link}
                                    href="/register"
                                    prefetch={false}
                                >
                                    Registration
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link
                                    className={styles.link}
                                    href="/code-of-conduct"
                                >
                                    Code of Conduct
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className={styles.title}>Contact Us</p>
                        <ul className={styles.items}>
                            <li className={styles.item}>
                                <a
                                    className={styles.link}
                                    href="mailto:hello@eurekahacks.ca"
                                >
                                    hello@eurekahacks.ca
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <p className={styles.copywrite}>
                    Copyright © EurekaHacks, 2023
                </p>
            </div>
        </footer>
    );
}
