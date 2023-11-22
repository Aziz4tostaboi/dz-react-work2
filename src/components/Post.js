import React from 'react';
import styles from './Post.module.css';

function Post(props) {
    return (
            <div className={styles.card}>
                <div>
                    <img src={props.img} alt="img" className={styles.imgPost}/>

                </div>
                <div>

                    <h1 className={styles.namePost} >{props.name}</h1>
                    <h2 className={styles.yearPost}>{props.year}</h2>
                    <h2 className={styles.ratingPost}>{props.rating}</h2>
                    <h3 className={styles.mainCharacterPost}> {props.mainCharacter}</h3>
                    <h4 className={styles.plotPost}>  {props.plot} </h4>
                    <h5 className={styles.stidiosPost}> {props.stidios}</h5>
                </div>

        </div>
    );
}

export default Post;