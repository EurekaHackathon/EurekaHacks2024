import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import styles from "./Carousel.module.css";

export default function Folder({ images }) {
    const [curImg, setCurImg] = useState(0);

    const nextImg = () => {
        setCurImg(Math.min(curImg + 1, images.length - 1));
    };

    const prevImg = () => {
        setCurImg(Math.max(curImg - 1, 0));
    };

    return (
        <div className={styles.carousel}>
            <button className={styles.buttonPrev} onClick={prevImg}>
                <FaArrowLeft />
            </button>
            <button className={styles.buttonNext} onClick={nextImg}>
                <FaArrowRight />
            </button>

            <div className={styles.wrapper}>
                <div
                    className={styles.images}
                    style={{
                        gridTemplateColumns: `repeat(${images.length}, 100%)`,
                        transform: `translateX(calc(-100% * ${curImg}))`,
                    }}
                >
                    {images.map((image, index) => (
                        <div className={styles.image} key={index}>
                            <img
                                className={`${
                                    index == curImg ? styles.active : ""
                                }`}
                                src={image}
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.progressButtons}>
                {images.map((_, index) => (
                    <div
                        onClick={() => setCurImg(index)}
                        className={
                            styles.progressButton +
                            " " +
                            (curImg == index ? styles.active : "")
                        }
                        key={index}
                    ></div>
                ))}
            </div>
        </div>
    );
}
