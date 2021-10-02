import styles from './FlightBooking.module.css'
// import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { borderColor, fontWeight } from '@mui/system';
import { Button, Switch } from '@mui/material';
import rupeeBlack from './Images/rupeeBlack.png'
import rupeeOrange from './Images/rupeeOrange.png'
import thumpsicon from './Images/thumpsicon.PNG'
import loanadd from './Images/loanadd.PNG';
import delladd from './Images/delladd.PNG'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState,useEffect } from 'react';
import axios from 'axios'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const FlightBooking = () => {
    const [allFlights, setAllFlights] = useState([]);
    const [isnonStop, setIsNonStop] = useState(false);
    const [isoneStop,setoneStop]=useState(false)
    const [isonePlusStop,setIsonePlusStop]=useState(false)


      

    useEffect(() => {
        getAllFlights();
        return () => {
            
        }
    }, [])
   

    const getAllFlights = async () => {
        try {
            let res = await axios.get(`http://localhost:5000/flights`);
            console.log(res);
            setAllFlights(res.data);

      
        }
        catch (err) {
            console.log("error",err);
        }
    }
    
     const handlechecked = (x) => {
        // setStoreFlights(allFlights);
        // console.log(storeFlights);
        console.log(x);
        if (x === "non-stop") {
            setIsNonStop(!isnonStop)
            console.log("before",isnonStop);
         }
          if (x === "1-stop") {
            setoneStop(!isoneStop)
            console.log(isnonStop);
         }
          if (x === "1+-stops") {
            setIsonePlusStop(!isonePlusStop)
            console.log(isnonStop);
        }
        
        // let filter = [];
        //  if (!isnonStop) {
        //      filter = allFlights.filter((e) => e.flightStops === x) 
        //      setAllFlights(filter)
        //  }
        // else setAllFlights(allFlights);
        // setAllFlights(filter);
    }
    console.log("after",isnonStop);
    let filter = allFlights.filter((e) => {
        if (isnonStop &&e.flightStops === "non-stop") {
            return true;
        }
        if (isoneStop && e.flightStops === "1-stop") {
            return true
        }
        if (isonePlusStop && e.flightStops === "1+-stops") {
            return true
        }
        if (!isnonStop && !isoneStop && !isonePlusStop) {
            return true;
        }
        return false;

        });
         
    console.log("filter",filter);

    return (
        <>
            <div className={`${styles.searchbar}`}>
                <div>
                    <p style={{marginBottom:"0px"}}>From</p>
                    <div>
                        <input type="text" />
                        <img src="" alt="" />
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <p style={{marginBottom:"0px"}}>To</p>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <p></p>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <p></p>
                    <input type="text" />
                </div>
                <div>
                    <p></p>
                    <input type="text" />
                </div>
                <button className={`${styles.searchbtn}`}>SEARCH</button>
            </div>
            <div className={`${styles.filterbar}`}>
               
                <div className={`${styles.stops}`}>
                     <p style={{marginBottom:"0px",fontSize:"15px"}}>Stops</p>
                    <div className={`${styles.stopCheckbox}`}>
                        <Checkbox {...label} checked={isnonStop} onClick={()=>{handlechecked("non-stop")}} style={{color:"rgb(236,91,36) " ,borderColor:"grey"}} /><p>Non stop</p>
                        <Checkbox {...label} checked={isoneStop} onClick={()=>{handlechecked("1-stop")}} style={{color:"rgb(236,91,36) " ,borderColor:"grey"}} /><p>1 stop</p>
                        <Checkbox {...label} checked={isonePlusStop} onClick={()=>{handlechecked("1+-stops")}} style={{color:"rgb(236,91,36) " ,borderColor:"grey"}} /><p>1+ stop</p>
                    </div>
                    <div className={`${styles.refundable}`}>
                        <p style={{paddingBottom:"0px"}}>Refundable</p>
                        <label className={styles.toggleSwitch} style={{marginTop: "3px", marginLeft: "20px", marginRight: "2px"}}>
                                <input className={ styles.toggleInput} type="checkbox"/>
                                <span className={ styles.toggleSlider}/>
                            </label>
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
                <div className={`${styles.leftContents}`}>
                    <div className={`${styles.dateAndFilter}`}>
                        <div className={`${styles.dateSlider}`}>
                            <div className={`${styles.dateArrow}`}>
                               <ChevronLeftIcon/>
                            </div>
                            <div className={`${styles.dateSlides}`}>
                                <p style={{fontSize:"12px",marginLeft:"25px",marginTop:"20px"}}>01 Oct,Fri</p>
                                <div style={{display:"flex",marginLeft:"25px"}}>
                                    <img src={rupeeBlack} alt="" width="14px" height="14px" />
                                    <p style={{marginTop:"6px"}}>5953</p>
                                </div>
                            </div>
                            <div className={`${styles.dateSlides}`}>
                                <p style={{fontSize:"12px",marginLeft:"25px",marginTop:"20px"}}>02 Oct,Sat</p>
                                <div style={{display:"flex",marginLeft:"25px"}}>
                                    <img src={rupeeBlack} alt="" width="14px" height="14px" />
                                    <p style={{marginTop:"6px"}}>5953</p>
                                </div>
                            </div>
                            <div className={`${styles.dateSlides}`}>
                                <p style={{fontSize:"12px",marginLeft:"25px",marginTop:"20px"}}>03 Oct,Sun</p>
                                <div style={{display:"flex",marginLeft:"25px"}}>
                                    <img src={rupeeBlack} alt="" width="14px" height="14px" />
                                    <p style={{marginTop:"6px"}}>5953</p>
                                </div>
                            </div>
                            <div className={`${styles.dateSlides}`}>
                                <p style={{fontSize:"12px",marginLeft:"25px",marginTop:"20px"}}>04 Oct,Mon</p>
                                <div style={{display:"flex",marginLeft:"25px"}}>
                                    <img src={rupeeBlack} alt="" width="14px" height="14px" />
                                    <p style={{marginTop:"6px"}}>5953</p>
                                </div>
                            </div>
                            <div className={`${styles.dateSlides}`}>
                                <p style={{fontSize:"12px",marginLeft:"25px",marginTop:"20px"}}>05 Oct,Tue</p>
                                <div style={{display:"flex",marginLeft:"25px"}}>
                                    <img src={rupeeBlack} alt="" width="14px" height="14px" />
                                    <p style={{marginTop:"6px"}}>5953</p>
                                </div>
                            </div>
                            <div className={`${styles.dateSlides}`}>
                                <p style={{fontSize:"12px",marginLeft:"25px",marginTop:"20px"}}>06 Oct,Wed</p>
                                <div style={{display:"flex",marginLeft:"25px"}}>
                                    <img src={rupeeBlack} alt="" width="14px" height="14px" />
                                    <p style={{marginTop:"6px"}}>5953</p>
                                </div>
                            </div>
                            <div className={`${styles.dateSlides}`} style={{borderRight:"none"}}>
                                <p style={{fontSize:"12px",marginLeft:"25px",marginTop:"20px"}}>07 Oct,Thur</p>
                                <div style={{display:"flex",marginLeft:"25px"}}>
                                    <img src={rupeeBlack} alt="" width="14px" height="14px" />
                                    <p style={{marginTop:"6px"}}>5953</p>
                                </div>
                            </div>
                            <div className={`${styles.dateArrow}`} style={{marginLeft:"5px",borderLeft:"1px dotted grey"}}>
                                <KeyboardArrowRightIcon/>
                            </div>


                        </div>
                        <div className={`${styles.reccomended}`}>
                            <img style={{ marginTop: "5px" }} src={thumpsicon} height="50px" alt="" />
                            <div>
                            <p style={{fontSize:"12px",paddingBottom:"0px",marginBottom:"0px"}}>Awesome! We will notify you when the fare for this route drops.</p>
        
                                <div style={{ display:"flex"}}>
                                    <p style={{fontSize:"12px",paddingTop:"0px",marginTop:"4px",marginRight:"10px"}}>You can also modify your alert.</p>
                                    <p style={{color:"rgb(236,91,36)",marginTop:"2px",paddingTop:"0px",fontSize:"14px"}}>EDIT FARE ALERT</p>
                                </div>
                            </div>
                            <div className={`${styles.switch}`}>
                                <label className={styles.toggleSwitch} style={{marginTop: "15px", marginLeft: "0px", marginRight: "2px"}}>
                                    <input className={ styles.toggleInput} type="checkbox"/>
                                    <span className={ styles.toggleSlider}/>
                                </label>
                                <p style={{fontSize:"15px"}}>REMOVE</p>
                            </div>
                            
                        </div>
                        <button className={`${styles.sortby}`}>Sort by<br />
                        Reccomended</button>
                    </div>
                    {filter.map((e) => {
                        return <div className={`${styles.allFlights}`} key ={e._id}>
                            <div className={`${styles.details}`}>
                                <div className={`${styles.flightCode}`}>
                                    <img height="40px" width="50px" src={e.image} alt="" />
                                    <p>{e.flightName }</p>
                                    <p>{e.flightCode }</p>
                                </div>
                                <div className={`${styles.departureDetails}`}>
                                    <p style={{ marginTop: "30px" }}>{e.departureCode }</p>
                                    <p style={{ fontSize: "20px", paddingBottom: "0px", fontWeight: "500" }}>{e.departureTime }</p>
                                    <p>{ e.departureDate}</p>
                                    <p>{ e.departurePlace}</p>
                                </div>
                                <div className={`${styles.nonStop}`}>
                                    <p style={{ marginLeft: "25px" }}>{`${Math.floor(e.durationInMin /60)}hr  ${e.durationInMin%60}min`} </p>
                                    <hr />
                                    <p style={{ marginLeft: "25px" }}>{e.flightStops }</p>
                                </div>
                                <div className={`${styles.arrivalDetails}`}>
                                    <p style={{ marginTop: "30px" }}>{e.arrivalCode }</p>
                                    <p style={{ fontSize: "20px", paddingBottom: "0px", fontWeight: "500" }}>{e.arrivalTime }</p>
                                    <p>{e.arrivalDate }</p>
                                    <p>{e.arrivalPlace }</p>
                                </div>
                            </div>
                            <div className={`${styles.total}`}>
                                <div style={{ lineHeight: "0cm", marginTop: "20px" }}>
                                    <div style={{ display: "flex", lineHeight: "0cm", marginBottom: "0px", paddingBottom: "0px", marginLeft: "20px" }}>
                                        <img style={{ marginTop: "20px", marginBottom: "0px" }} height="15px" width="15px" src={rupeeOrange} alt="" />
                                        <p style={{ marginTop: "26px", color: "rgb(236,91,36)", fontWeight: "bold", fontSize: "23px" }}>{ e.basicPrice}</p>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "0px", lineHeight: "0cm", paddingTop: "0px", marginLeft: "20px" }}>
                                        <img height="10px" width="10px" src={rupeeOrange} alt="" />
                                        <p style={{ fontSize: "10px", marginTop: "5px", color: "rgb(236,91,36)" }}>{e.offPrice } instant off</p>
                                    </div>
                                </div>
                                <button className={`${styles.Bookbtn}`}>BOOK</button>
                            </div>
                        </div>
                    })}
                     

                 </div>
                <div className={`${styles.adds}`}>
                    <img className={`${styles.addsImage}`}  src={delladd} alt="" />
                    <img className={`${styles.addsImage}`} style={{marginTop:"20px"}}    src={loanadd} alt="" />
                </div>
            </div>

            
        </>
    )
}

export default FlightBooking

   {/* <div div className={`${styles.allFlights}`}> */}
                    {/* //     <div className={`${styles.details}`}>
                    //         <div className={`${styles.flightCode}`}>
                    //             <img height="40px" width="50px" src="https://images.ixigo.com/img/common-resources/airline-new/G8.png" alt="" />
                    //             <p>flightname</p>
                    //             <p>G*30</p>
                    //         </div>
                    //         <div className={`${styles.departureDetails}`}>
                    //             <p style={{marginTop:"30px"}}>DEL</p>
                    //             <p style={{fontSize:"20px",paddingBottom:"0px",fontWeight:"500"}}>06:15</p>
                    //             <p>mon 04v0ct</p>
                    //             <p>neew delhi</p>
                    //         </div>
                    //         <div className={`${styles.nonStop}`}>
                    //             <p style={{marginLeft:"25px"}}>2hr 5 min</p>
                    //             <hr />
                    //             <p style={{marginLeft:"25px"}}>non stop</p>
                    //         </div>
                    //         <div className={`${styles.arrivalDetails}`}>
                    //             <p style={{marginTop:"30px"}}>BOm</p>
                    //             <p style={{fontSize:"20px",paddingBottom:"0px",fontWeight:"500"}}>08:20</p>
                    //             <p>mon 04 Oct</p>
                    //             <p>Mumbai</p>
                    //         </div>
                    //     </div>
                    //     <div className={`${styles.total}`}>
                    //         <div style={{lineHeight:"0cm", marginTop:"20px"}}>
                    //             <div style={{display:"flex",lineHeight:"0cm",marginBottom:"0px",paddingBottom:"0px",marginLeft:"20px"}}>
                    //                 <img style={{marginTop:"20px",marginBottom:"0px"}} height="15px" width="15px" src={rupeeOrange} alt="" />
                    //                 <p style={{marginTop:"26px",color:"rgb(236,91,36)",fontWeight:"bold",fontSize:"23px"}}>5954</p>
                    //             </div>
                    //             <div style={{display:"flex",marginTop:"0px",lineHeight:"0cm",paddingTop:"0px",marginLeft:"20px"}}>
                    //                 <img  height="10px" width="10px" src={rupeeOrange} alt="" />
                    //                 <p style={{fontSize:"10px",marginTop:"5px",color:"rgb(236,91,36)"}}>800 instant off</p>
                    //             </div>
                    //         </div>
                    //         <button className={`${styles.Bookbtn}`}>BOOK</button>
                    //     </div>
                    // </div> */}