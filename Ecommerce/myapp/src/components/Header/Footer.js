import React from 'react'
import styles from './Footer.module.css'
import Facebook from "../../img/Facebook_Logo.png";
import Spotify from "../../img/Spotify_Logo.png";
import Youtube from "../../img/YT Icon.jpg"


function Footer() {
  return (
    <footer>
    <div className={styles.footer_title}>
        The Generics
    </div>
    <div className={styles.footer_icons}>
        <ul>
            <li><a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <img src={Youtube} alt="YouTube logo"/>
            </a></li>
            <li><a href="https://spotify.com" target="_blank" rel="noreferrer">
                <img src={Spotify} alt="Spotify logo"/>
            </a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={Facebook} alt="Facebook logo" />
            </a></li>
        </ul>
    </div>
</footer>
  )
}

export default Footer