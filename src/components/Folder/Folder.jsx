import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import styles from "./Folder.module.css";

export default function Folder({ name, depth }) {
    return (
        <div className={styles.folder} style={{paddingLeft: `${depth - 1}em`}}>
            <div className={styles.folderTop}>
                <FaFolderOpen className={styles.folderIcon}></FaFolderOpen>
                <p className={styles.folderName}>{name}</p>
            </div>
        </div>
    );
}
