import React, { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
  faLevelDownAlt,
  faLevelUpAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Button } from "../button/index.tsx";
import { Marginer } from "../marginer/index.tsx";
import ReactTooltip from "react-tooltip";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";
import Select from 'react-select'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
selectdd:{
  
  '& .css-1s2u09g-control':
  {cursor:'pointer'},
},
'& .react-calendar':{zIndex:1}
})

const CardContainer = styled.div`  
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    flex-col
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9
  `};
`;

const ItemContainer = styled.div`
  ${tw`flex relative items-center`};
`;

const Icon = styled.span`
  ${tw`
    text-red-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
    flex
    w-full
    justify-center
  `};
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `};
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;
  .react-calendar__tile--active{
    background-color:#1087ff;
    color:white;
  }
  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

export function BookCard() {
  var cityoptions = [
  { value: 'pune', label: 'Pune' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'aurangabad', label: 'Aurangabad' },
  { value: 'akola', label: 'Akola' },
  { value: 'chennai', label: 'Chennai' }
]
  const CardContainers=(props)=>{
    const classes=useStyles()
    return(
    <>
  <span style={{padding:'5px 10px',borderRadius:'50%',border:'1px solid rgba(255,255,255,1)',boxShadow:'0 1.3px 12px -3px rgb(0 0 0 / 40%)',color:'rgba(239,68,68,1)'}}>
    <FontAwesomeIcon icon={props.pickup?faLevelDownAlt:faLevelUpAlt}/>
    </span>
      <Marginer direction="vertical" margin="0.5em" />
  <Name>{props.pickup?'Pick Up':'Drop Off'} Info</Name>
      <Marginer direction="vertical" margin="1em" />
  <Select options={cityoptions} placeholder="Select Location" className={classes.selectdd}/>
      <Marginer direction="vertical" margin="1em" />
  <DateContainer pickup={props.pickup?true:false}/>
  
    </>
    )
  }
const DateContainer=(props)=>{
  const classes=useStyles()
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);
  const [startDateValue, setstartDateValue] = useState(null)
  const [returnDateValue, setreturnDateValue] = useState(null)
  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  const startChangeDate=(e)=>{
    setstartDateValue(e.getMonth()+1+'-'+e.getDate()+'-'+e.getFullYear())
    setStartDate(e);
    setReturnDate(e);
    toggleStartDateCalendar()
  }
    const returnChangeDate=(e)=>{
    setreturnDateValue(e.getMonth()+1+'-'+e.getDate()+'-'+e.getFullYear())
    setReturnDate(e);
    toggleReturnDateCalendar()
  }
  return(<>
      <ItemContainer>
      <div>
      {startDateValue?<ItemContainer>
        <Name >{props.pickup?'Pick Up':'Drop Off'} Date</Name>
      </ItemContainer>:null}
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>{startDateValue?startDateValue:props.pickup?'Pick Up Date':'Drop Off Date'}</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={startChangeDate as any} minDate={new Date()}
          maxDate={startDateValue?returnDate:null}
          className={classes.datepickerclass}
          />
        )}
      </ItemContainer>
      </div>
      <LineSeperator />
      <div>{returnDateValue?<ItemContainer>
        <Name >{props.pickup?'Pick Up':'Drop Off'} Time</Name>
      </ItemContainer>:null}
      <ItemContainer data-for="main" 
      // data-tip="Please Select PickUp Date"
      >
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>{returnDateValue?returnDateValue:props.pickup?'Pick Up Time':'Drop Off Time' }</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar
            offset
            value={returnDate}
            onChange={returnChangeDate as any}
            minDate={startDate}
          />
        )}
      </ItemContainer>
      </div>
      <ReactTooltip
      disable={startDateValue?true:false}
            id="main"
            place={"top"}
            type={"warning"}
            effect={"float"}
            multiline={true}
          />
          </ItemContainer>
  </>)
}

  return (
  <CardContainer>
  <CardContainers pickup/>
  <Marginer direction="vetical" margin="2em" />
  <CardContainers />
  <Marginer direction="horizontal" margin="2em" />
      <Marginer direction="vertical" margin="1em" />
        <Button text="Book Your Ride" />
        </CardContainer>
  );
}
