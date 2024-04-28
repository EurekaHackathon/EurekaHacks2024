import React, { useState } from "react";
import styles from "@/styles/gallery.module.css";
import Folder from "@/components/Folder/Folder";
import Carousel from "@/components/Carousel/Carousel";
import Link from "next/link";

export default function Gallery() {
    const [path, setPath] = useState("C:\\Users\\EurekaHACKS\\2023\\");

    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.topBar}>
                    <Link href="/">
                        <img
                            className={styles.topIcon}
                            src="EurekaIcon2024.png"
                            alt="Eureka"
                        />
                    </Link>
                    <div className={styles.path}>
                        <p className={styles.pathText}>{path}</p>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.sideBar}>
                        <Folder name="2023" depth={1}></Folder>
                        <Link href="/gallery/#projects">
                            <Folder name="Projects" depth={2} />
                        </Link>
                        <Link href="/gallery/#participants">
                            <Folder name="Participants" depth={2} />
                        </Link>
                        <Link href="/gallery/#presentations">
                            <Folder name="Presentations" depth={2} />
                        </Link>
                    </div>
                    <div className={styles.view}>
                        <div className={styles.content}>
                            <section id="projects">
                                <h1 className={styles.title}>Projects</h1>
                                <div className={styles.divider}></div>
                                <Carousel
                                    images={[
                                        "Gallery/Img_0350.jpg",
                                        "Gallery/Img_0357.jpg",
                                        "Gallery/Img_0358.jpg",
                                        "Gallery/Img_0360.jpg",
                                    ]}
                                />
                            </section>
                            <section id="participants">
                                <h1 className={styles.title}>Participants</h1>
                                <div className={styles.divider}></div>
                                <Carousel
                                    images={[
                                        "Gallery/Img_0350.jpg",
                                        "Gallery/Img_0357.jpg",
                                        "Gallery/Img_0358.jpg",
                                        "Gallery/Img_0360.jpg",
                                    ]}
                                />
                            </section>
                            <section id="presentations">
                                <h1 className={styles.title}>Presentations</h1>
                                <div className={styles.divider}></div>
                                <Carousel
                                    images={[
                                        "Gallery/Img_0350.jpg",
                                        "Gallery/Img_0357.jpg",
                                        "Gallery/Img_0358.jpg",
                                        "Gallery/Img_0360.jpg",
                                        "Gallery/Img_0350.jpg",
                                        "Gallery/Img_0357.jpg",
                                        "Gallery/Img_0358.jpg",
                                        "Gallery/Img_0360.jpg",
                                    ]}
                                />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
