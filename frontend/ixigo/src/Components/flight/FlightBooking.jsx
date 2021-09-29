import styles from './FlightBooking.module.css'
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { borderColor } from '@mui/system';
import { Button } from '@mui/material';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const FlightBooking = () => {
    return (
        <>
            <div className={`${styles.searchbar}`}>
                <button className={`${styles.searchbtn}`}>SEARCH</button>
            </div>
            <div className={`${styles.filterbar}`}>
               
                <div className={`${styles.stops}`}>
                     <p style={{marginBottom:"0px",fontSize:"15px"}}>Stops</p>
                    <div className={`${styles.stopCheckbox}`}>
                        <Checkbox {...label} style={{color:"rgb(236,91,36) " ,borderColor:"grey"}} /><p>Non stop</p>
                        <Checkbox {...label} style={{color:"rgb(236,91,36) " ,borderColor:"grey"}} /><p>1 stop</p>
                        <Checkbox {...label} style={{color:"rgb(236,91,36) " ,borderColor:"grey"}} /><p>1+ stop</p>
                    </div>
                    <div className={`${styles.refundable}`}>
                        <p>Refundable</p>
                       
                    </div>
                </div>
                
                <div className={`${styles.departure}`}>
                    <div><p style={{marginBottom:"0px",fontSize:"15px",marginLeft:"20px"}}>Departure from DEL</p></div>
                    <div className={`${styles.departureBtn}`}>
                        <button className={`${styles.depBtn}`}>00:00-06:00</button>
                        <button className={`${styles.depBtn}`}>06:00-12:00</button>
                        <button className={`${styles.depBtn}`}>12:0-18:00</button>
                        <button className={`${styles.depBtn}`}>18:00-24:00</button>

                    </div>
                    <div className={`${styles.daytime}`}>
                        <p>Early Morning</p>
                        <p>Morning</p>
                        <p>Mid Day</p>
                        <p>Night</p>
                    </div>
                </div>
                <div className={`${styles.airlines}`}>
                    <div><p style={{ marginBottom: "0px", fontSize: "15px", marginLeft: "20px" }}>Airlines</p></div>
                     <div className={`${styles.airlineCheckbox}`}>
                        <Checkbox {...label} style={{ color: "rgb(236,91,36) ", borderColor: "grey" }} />
                        <div>
                            <p>Air India</p>
                            <p>$5955</p>
                        </div>
                        <Checkbox {...label} style={{ color: "rgb(236,91,36) ", borderColor: "grey" }} />
                        <div>
                            <p>AirAsia India</p>
                            <p>$5953</p>
                        </div>
                       
                    </div>
                         <div className={`${styles.airlineCheckbox}`}>
                        <Checkbox {...label} style={{ color: "rgb(236,91,36) ", borderColor: "grey" }} />
                        <div>
                            <p>GO FIRST</p>
                            <p>$5954</p>
                        </div>
                        <Checkbox {...label} style={{ color: "rgb(236,91,36) ", borderColor: "grey" }} />
                        <div>
                            <p>IndiGO</p>
                            <p>$5955</p>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className={`${styles.contentContainer}`}>
                    <div className={`${styles.dateAndFilter}`}>
                        <div className={`${styles.dateSlider}`}></div>
                        <div className={`${styles.reccomended}`}></div>
                        <button className={`${styles.sortby}`}>Sort by<br />
                        Reccomended</button>
                    </div>
                <div className={`${styles.allFlights}`}>
                    <div className={`${styles.details}`}></div>
                    <div className={`${styles.total}`}></div>
                </div>
            </div>

            
        </>
    )
}

export default FlightBooking
