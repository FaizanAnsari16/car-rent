import React,{useEffect} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/bookCard/index.tsx';
import { Footer } from '../../components/footer';
import { Marginer } from '../../components/marginer/index.tsx';
import { Navbar } from '../../components/NavBar';
import { AboutUs } from './aboutUs';
import { BookingSteps } from './bookingSteps';
import { TopCars } from './topCars';
import { TopSection } from './topSection';
const PageContainer = styled.div`
  ${tw`
flex
flex-col
w-full
h-full
items-center
overflow-x-hidden
`}
`;
const scroll = () => {
  document.getElementById('home').scrollTop = 0;
};
export function HomePage(props) {
  

  return (
    <PageContainer id="home">
      <Navbar scroll={scroll} />
      <TopSection />
      <Marginer direction="vertical" margin="15em" />
      <div id="bookride">
        <Marginer direction="vertical" margin="7em" />
        <BookCard 
        startdate={props.startdate}
        enddate={props.enddate}
        starttime={props.starttime}
        endtime={props.endtime}
        picklocation={props.picklocation}
        droplocation={props.droplocation}
        setstartdate={props.setstartdate}
        setenddate={props.setenddate}
        setstarttime={props.setstarttime}
        setendtime={props.setendtime}
        setpicklocation={props.setpicklocation}
        setdroplocation={props.setdroplocation}
        />
      </div>
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="15em" />
      <TopCars />
      <Marginer direction="vertical" margin="7em" />
      <Footer scroll={scroll} />
    </PageContainer>
  );
}
