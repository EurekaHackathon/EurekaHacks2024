import React, { useState } from "react";
import styles from "@/styles/gallery.module.css";
import Folder from "@/components/Folder/Folder";
import Carousel from "@/components/Carousel/Carousel";
import Link from "next/link";
import Image from "next/image";
import EurekaHacksIcon from "@/../public/EurekaIcon2024.png";

const galleries = [
    { name: "OpeningCeremony", imageCount: 12 },
    { name: "Judging", imageCount: 42 },
    { name: "Lunch", imageCount: 12 },
    { name: "Foyer", imageCount: 11  },
    { name: "Participants", imageCount: 30 },
    { name: "Karaoke", imageCount: 12 },
    { name: "ClosingCeremony", imageCount: 23 },
    { name: "QuantumComputing", imageCount: 9 },
    { name: "Robotics", imageCount: 9 },
    { name: "Team", imageCount: 8 },
    { name: "MarioKart", imageCount: 7 },
    { name: "SmashBros", imageCount: 9 },
    { name: "Chess", imageCount: 11 },
    { name: "AmongUs", imageCount: 4 },
    { name: "IceCream", imageCount: 3 },
    { name: "GitWorkshop", imageCount: 2 },
];

const defaultPath = "C:\\Users\\EurekaHACKS\\2024\\";
const actualPath = "../../Gallery";

export default function Gallery() {
    const [path, setPath] = useState(defaultPath);

    const galleryLinks = galleries.map((gallery) => (
        <Link
            key={gallery.name}
            href={`/gallery/#${gallery.name}`}
            onClick={() =>
                setPath(
                    defaultPath +
                        gallery.name.replace(/([a-z])([A-Z])/g, "$1 $2"),
                )
            }
        >
            <Folder
                name={gallery.name.replace(/([a-z])([A-Z])/g, "$1 $2")}
                depth={2}
            />
        </Link>
    ));

    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.topBar}>
                    <Link href="/">
                        <Image
                            className={styles.topIcon}
                            src={EurekaHacksIcon}
                            alt="Eureka"
                        />
                    </Link>
                    <div className={styles.path}>
                        <p className={styles.pathText}>{path}</p>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.sideBar}>
                        <Folder name="2024" depth={1} />
                        {galleryLinks}
                    </div>
                    <div className={styles.view}>
                        <div className={styles.content}>
                            {galleries.map((gallery) => (
                                <section key={gallery.name} id={gallery.name}>
                                    <h1 className={styles.title}>
                                        {gallery.name.replace(
                                            /([a-z])([A-Z])/g,
                                            "$1 $2",
                                        )}
                                    </h1>
                                    <div className={styles.divider}></div>
                                    <Carousel
                                        images={Array.from(
                                            { length: gallery.imageCount },
                                            (_, i) =>
                                                `${actualPath}/${
                                                    gallery.name
                                                }/IMG_${String(i + 1).padStart(
                                                    3,
                                                    "0",
                                                )}.jpg`,
                                        )}
                                    />
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
