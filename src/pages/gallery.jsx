import React, { useState } from 'react';
import styles from "@/styles/gallery.module.css";
import Folder from "@/components/Folder/Folder"
import Carousel from "@/components/Carousel/Carousel"

export default function Gallery() {
    const [path, setPath] = useState("C:\\Users\\EurekaHACKS\\2023\\");

    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.topBar}>
                    <img className={styles.topIcon} src="EurekaIcon2024.png" alt="Eureka" />
                    <div className={styles.path}>
                        <p className={styles.pathText}>{path}</p>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.sideBar}>
                        <Folder name="2023" depth={1}></Folder>
                        <Folder name="Projects" depth={2}></Folder>
                        <Folder name="Participants" depth={2}></Folder>
                        <Folder name="Presentations" depth={2}></Folder>
                    </div>
                    <div className={styles.view}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>Projects</h1>
                            <div className={styles.divider}></div>
                            <Carousel images={[
                                "Gallery/Img_0350.jpg",
                                "Gallery/Img_0357.jpg",
                                "Gallery/Img_0358.jpg",
                                "Gallery/Img_0360.jpg",
                            ]} />
                            <h1 className={styles.title}>Projects</h1>
                            <div className={styles.divider}></div>
                            <Carousel images={[
                                "Gallery/Img_0350.jpg",
                                "Gallery/Img_0357.jpg",
                                "Gallery/Img_0358.jpg",
                                "Gallery/Img_0360.jpg",
                            ]} />
                            <h1 className={styles.title}>Projects</h1>
                            <div className={styles.divider}></div>
                            <Carousel images={[
                                "Gallery/Img_0350.jpg",
                                "Gallery/Img_0357.jpg",
                                "Gallery/Img_0358.jpg",
                                "Gallery/Img_0360.jpg",
                            ]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
