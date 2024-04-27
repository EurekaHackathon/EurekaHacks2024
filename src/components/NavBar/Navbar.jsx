import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "@/../public/EurekaIcon2024.png";
import Link from "next/link";

export default function NavBar() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
        }
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);

        if (!menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }

    return (
        <motion.div
            className={[
                styles.navbar,
                scrollY !== 0 ? styles["navbar-overlay"] : "",
            ].join(" ")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
        >
            <Link href="/" className={styles["navbar-box"]}>
                <Image
                    className={styles["navbar-icon"]}
                    src={Logo}
                    alt="Eureka! Icon"
                />
            </Link>
            <ul className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/#about">About</Link>
                <Link href="/#sponsors">Sponsors</Link>
                <Link href="/#faq">FAQ</Link>
                <Link href="https://2023.eurekahacks.ca" target="_blank">
                    2023
                </Link>
            </ul>
            <motion.div
                transition={{
                    duration: 2,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.9 }}
                className={styles["register-outline"]}
            >
                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeLouKj4q5cLLsnMwZhTWwo027iXjCKwGsPpKuTPrfHDM0lmw/viewform"
                    prefetch={false}
                    target="_blank"
                    className={styles["register"]}
                >
                    <div className={styles["button"]}>Register</div>
                </Link>
            </motion.div>

            <div className={styles["hamburger-menu"]} onClick={toggleMenu}>
                <div className={styles["hamburger-line"]} />
                <div className={styles["hamburger-line"]} />
                <div className={styles["hamburger-line"]} />
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={`${styles["mobile-menu"]} ${styles["mobile-menu-open"]}`}
                        exit={{
                            opacity: 0,
                            filter: "blur(10px)",
                            transition: { ease: "easeIn", duration: 0.22 },
                        }}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            filter: "blur(0px)",
                            transition: { type: "spring", duration: 0.7 },
                        }}
                    >
                        <div className={styles["mobile-menu-top"]}>
                            <div
                                className={styles["close"]}
                                onClick={toggleMenu}
                            >
                                <div className={styles["close-line-1"]} />
                                <div className={styles["close-line-2"]} />
                            </div>
                        </div>
                        <div className={styles["mobile-menu-content"]}>
                            <Image
                                className={styles["mobile-menu-nav-icon"]}
                                src={Logo}
                                alt="Eureka! Icon"
                                href="/"
                            />
                            <Link href="/" onClick={toggleMenu}>
                                Home
                            </Link>

                            <Link href="/#about" onClick={toggleMenu}>
                                About
                            </Link>

                            <Link href="/#sponsors" onClick={toggleMenu}>
                                Sponsors
                            </Link>

                            <Link href="/#faq" onClick={toggleMenu}>
                                FAQ
                            </Link>
                            <Link
                                href="https://2023.eurekahacks.ca"
                                target="_blank"
                                onClick={toggleMenu}
                            >
                                2023
                            </Link>
                        </div>
                        <div className={styles["mobile-menu-bottom"]}></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
