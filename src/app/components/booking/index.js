import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../button/index.tsx";
import { Marginer } from "../marginer/index.tsx";

import './booking.css'
const Booking = (props) => {
    const navigate=useNavigate()
    useEffect(() => {
     if(!(props.startdate&&props.enddate&&props.starttime&&props.endtime&&props.picklocation&&props.droplocation)){
        navigate('/')
     } 
    });
    const choosefn=(val)=>{
        alert('Selected Car : '+val)
    }
  return (
  <div style={{marginTop:'6em',marginLeft:'3rem',marginRight:'3rem'}}>
  <div style={{border:'1px solid',width:'fit-content'}}>
      <h1 style={{background:'rgb(239,68,68)',color:'#fff',textAlign:'center',paddingBottom:'0.5rem',paddingTop:'0.5rem'}}>Reservation Details</h1>
      <div style={{paddingRight:'6rem',paddingLeft:'0.5rem'}}>
          <div style={{paddingTop:'0.5rem'}}>
              <p>
                  Pick Up : {props.startdate} , {props.starttime>12?props.starttime+':00 pm':props.starttime+':00 am'}
              </p>
          </div>
          <div style={{paddingTop:'0.5rem'}}>
              <p>
              Drop : {props.enddate} , {props.endtime>12?props.endtime+':00 pm':props.endtime+':00 am'}
              </p>
          </div>
      </div>
  </div>
  <h1 style={{paddingTop:'3rem',fontWeight:'bolder',marginBottom:'2rem'}}>SEARCH RESULTS</h1>
  
  <div>
      <table style={{width:'100%'}}>
          <thead className='headerrow'>
            <tr>
                <td>
                    Class
                </td>
                <td>
                    Details
                </td>
                <td>
                    Total
                </td>
                <td>
                    Deposit
                </td>
                <td/>
            </tr>
          </thead>
          <tbody>
          <tr>
                <td style={{maxWidth:100}}>
                    <img src="https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg" alt='Car'/>
                </td>
                <td>
                Audi 5 SERIES-2017-18
                </td>
                <td>
                    Rs.: 725,700 IND
                </td>
                <td>
                    Rs.: 50,000 IND
                </td>
                <td>
                    <Button text="Choose" clickbtn={()=>choosefn('Audi')}></Button>
                </td>
            </tr>
            <tr>
                <td style={{maxWidth:100}}>
                    <img src="https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg" alt='Car'/>
                </td>
                <td>
                Honda City                </td>
                <td>
                    Rs.: 500,000 IND
                </td>
                <td>
                    Rs.: 50,000 IND
                </td>
                <td>
                    <Button text="Choose" clickbtn={()=>choosefn('Honda City')}></Button>
                </td>
            </tr>
          </tbody>
      </table>
  </div>
  <Marginer direction="vertical" margin="4em" />
  </div>
  );
};

export default Booking;