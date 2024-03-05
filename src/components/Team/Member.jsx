import styles from "./Member.module.css";

export default function Member({ name, position, image }) {
    return (
        <div className={styles.member}>
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
