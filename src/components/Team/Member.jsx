import styles from "./Member.module.css";
import teamStyles from "./Team.module.css";

export default function Member({ name, position, image, director = false }) {
    const classes = director
        ? styles.director + " " + teamStyles.director
        : styles.member + " " + teamStyles.member;
    return (
        <div className={classes}>
            <div className={styles.headshot}>
                <img
                    className={styles.image}
                    src={image}
                    alt={name}
                    loading="lazy"
                />
            </div>
            <p className={styles.name}>{name}</p>
            <p className={styles.position}>{position}</p>
        </div>
    );
}
