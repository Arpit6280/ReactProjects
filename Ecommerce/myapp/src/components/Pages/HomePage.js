import React from 'react'
import Tours from './Tours'
import styles from './HomePage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'

function HomePage() {
    const tourArray=[
        {
            date:'JUL 16 ',
            city:'DETROIT, MI',
            place:'DTE ENERGY MUSIC THEATRE',
        },
        {
            date:'JUL 19',
            city:'TORONTO,ON',
            place:'BUDWEISER STAGE',
        },
        {
            date:'JUL 22',
            city:'BRISTOW, VA',
            place:' JIGGY LUBE LIVE',
        },
        {
            date:'JUL 29',
            city:'PHOENIX, AZ',
            place:'AK-CHIN PAVILION',
        },
        {
            date:'AUG 2',
            city:'LAS VEGAS, NV',
            place:'T-MOBILE ARENA',
        },
        {
            date:'AUG 7',
            city:'CONCORD, CA',
            place:'CONCORD PAVILION',
        }
    ]
  return (
    <div>
         <div className={styles.header_top}>
        <button className={styles.album_icon}>Get Our Latest Album</button>
        <FontAwesomeIcon icon={faPlay} 
            className={styles.icon} />
        </div>
        <div className={styles.tour_div}>
            <h2 className='text-center fw-bold' style={{marginBottom:'2rem'}}>TOURS</h2>
          {tourArray.map((item)=>(
           <Tours date={item.date} city={item.city} place={item.place} />
          ))}
        </div>
    </div>
  )
}

export default HomePage