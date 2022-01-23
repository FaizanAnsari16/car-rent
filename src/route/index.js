import React,{useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Booking from '../app/components/booking';
import { Footer } from '../app/components/footer';
import { Navbar } from '../app/components/NavBar';
import { HomePage } from '../app/containers/Homepage';

export default function App() {
  const [startdate, setstartdate] = useState();
  const [enddate, setenddate] = useState();
  const [starttime, setstarttime] = useState();
  const [endtime, setendtime] = useState();
  const [picklocation, setpicklocation] = useState();
  const [droplocation, setdroplocation] = useState();
  return (
    <Routes>
      <Route path="/car-rent" element={<HomePage 
      startdate={startdate}
      enddate={enddate}
      starttime={starttime}
      endtime={endtime}
      picklocation={picklocation}
      droplocation={droplocation}
      setstartdate={setstartdate}
      setenddate={setenddate}
      setstarttime={setstarttime}
      setendtime={setendtime}
      setpicklocation={setpicklocation}
      setdroplocation={setdroplocation}
      />} />
      <Route path="/booking" element={(<><Navbar/><Booking
      startdate={startdate}
      enddate={enddate}
      starttime={starttime}
      endtime={endtime}
      picklocation={picklocation}
      droplocation={droplocation}
      setstartdate={setstartdate}
      setenddate={setenddate}
      setstarttime={setstarttime}
      setendtime={setendtime}
      setpicklocation={setpicklocation}
      setdroplocation={setdroplocation}
      />
      <Footer/>
      </>)}/>
    </Routes>
  );
}
