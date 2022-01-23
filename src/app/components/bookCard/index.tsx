import React, { useState,useEffect, type ElementConfig } from "react";
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
import "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";
import Select,{components} from 'react-select'
import {createUseStyles} from 'react-jss'
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

const useStyles = createUseStyles({
selectdd:{  
  '& .css-1s2u09g-control':
  {cursor:'pointer'},
},
timedd:{
  color:'rgb(75,85,99)',
  fontSize:'0.875rem',
  '& .css-tlfecz-indicatorContainer':{color:'black'},
  '& .css-14el2xx-placeholder':{color:'darkslategray'},
    '& .css-1pahdxg-control':
  {
    boxShadow:'0 0 0 0 transparent',
    '&:hover':{borderColor:'transparent'},
    '&:focus':{borderColor:'transparent'},
    '&:active':{borderColor:'transparent'},
    cursor:'pointer',
borderColor:'ransparent',
'& .css-319lph-ValueContainer':{padding:0,},
'& .css-1okebmr-indicatorSeparator':{display:'none'}},
  '& .css-1s2u09g-control':
  {cursor:'pointer',
  '&:hover':{borderColor:'transparent'},
borderColor:'transparent',
'& .css-319lph-ValueContainer':{padding:0,},
'& .css-1okebmr-indicatorSeparator':{display:'none'}},
},
datepickerclass:
{'& .react-calendar':{zIndex:1}}
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
  z-index:1;
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


export function BookCard(props) {
  var cityoptions = [
  { value: 'pune', label: 'Pune' },
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'aurangabad', label: 'Aurangabad' },
  { value: 'akola', label: 'Akola' },
  { value: 'chennai', label: 'Chennai' }
]
var timeoptions = [
  { value: 1, label: '1:00' },
  { value: 2, label: '2:00' },
  { value: 3, label: '3:00' },
  { value: 4, label: '4:00' },
  { value: 5, label: '5:00' },
  { value: 6, label: '6:00' },
  { value: 7, label: '7:00' },
  { value: 8, label: '8:00' },
  { value: 9, label: '9:00' },
  { value: 10, label: '10:00' },
  { value: 11, label: '11:00' },
  { value: 12, label: '12:00' },
  { value: 13, label: '13:00' },
  { value: 14, label: '14:00' },
  { value: 15, label: '15:00' },
  { value: 16, label: '16:00' },
  { value: 17, label: '17:00' },
  { value: 18, label: '18:00' },
  { value: 19, label: '19:00' },
  { value: 20, label: '20:00' },
  { value: 21, label: '21:00' },
  { value: 22, label: '22:00' },
  { value: 23, label: '23:00' },
  { value: 24, label: '24:00' },
]
const navigate=useNavigate()
  const [startDate, setStartDate] = useState(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [startDateValue, setstartDateValue] = useState(null)
  const [returnDateValue, setreturnDateValue] = useState(null)
  const [startTime, setStartTime] = useState(Number);
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);
  const [returnTime, setReturnTime] = useState(Number);
  const [startTimeValue, setstartTimeValue] = useState(null)
  const [returnTimeValue, setreturnTimeValue] = useState(null)
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
    setStartDate(e);
    setReturnDate(e);
    toggleReturnDateCalendar()
  }
  const DropdownIndicator = (
  props: ElementConfig<typeof components.DropdownIndicator>
) => {
  return (
    <components.DropdownIndicator {...props}>
              <FontAwesomeIcon
            icon={props.selectProps.menuIsOpen ? faCaretUp : faCaretDown}
          />
    </components.DropdownIndicator>
  );
};
 
const clickfn=()=>{
  if(startDateValue&&returnDateValue&&startTime&&returnTime&&props.picklocation&&props.droplocation){
    props.setstartdate(startDateValue)
    props.setenddate(returnDateValue)
    props.setstarttime(startTime)
    props.setendtime(returnTime)
    navigate('booking')
  }
  else     alert('please fill all fields')
  
}

const classes=useStyles()
  return (
  <CardContainer>
<>
  <span style={{padding:'5px 10px',borderRadius:'50%',border:'1px solid rgba(255,255,255,1)',boxShadow:'0 1.3px 12px -3px rgb(0 0 0 / 40%)',color:'rgba(239,68,68,1)'}}>
    <FontAwesomeIcon icon={faLevelDownAlt}/>
    </span>
      <Marginer direction="vertical" margin="0.5em" />
  <Name>{'Pick Up'} Info</Name>
      <Marginer direction="vertical" margin="1em" />
  <Select options={cityoptions} 
  placeholder="Select Location" className={classes.selectdd}
  onChange={(e)=>props.setpicklocation(e.value)}
  />
      <Marginer direction="vertical" margin="1em" />
  {/* <DateContainer pickup={props.pickup?true:false}/> */}
  <>
      <ItemContainer>
      <div>
      {startDateValue?<ItemContainer>
        <Name >{'Pick Up'} Date</Name>
      </ItemContainer>:null}
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>{startDateValue?startDateValue:'Pick Up Date'}</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={startChangeDate as any} minDate={new Date()}
          maxDate={returnDateValue?returnDate:null}
          // maxDate={returnDate}
          className={classes.datepickerclass}
              showTimeSelect

          />
        )}
      </ItemContainer>
      </div>
      <LineSeperator />
      <div>{startTimeValue?<ItemContainer>
        <Name >{'Pick Up'} Time</Name>
      </ItemContainer>:null}
      <ItemContainer data-for="main" 
      // data-tip="Please Select PickUp Date"
      >
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
          <Select options={returnTime?timeoptions.filter((i)=>i.value<returnTime):timeoptions} placeholder={startTimeValue?startTimeValue:'Pick Up Time' } className={classes.timedd}
              components={{ DropdownIndicator }}
              onChange={(e)=>setStartTime(e.value)}
          />
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
  </>
    </>
  <Marginer direction="vetical" margin="2em" />
  <>
  <span style={{padding:'5px 10px',borderRadius:'50%',border:'1px solid rgba(255,255,255,1)',boxShadow:'0 1.3px 12px -3px rgb(0 0 0 / 40%)',color:'rgba(239,68,68,1)'}}>
    <FontAwesomeIcon icon={faLevelUpAlt}/>
    </span>
      <Marginer direction="vertical" margin="0.5em" />
  <Name>{'Drop Off'} Info</Name>
      <Marginer direction="vertical" margin="1em" />
  <Select options={cityoptions}
  onChange={(e)=>props.setdroplocation(e.value)}
  placeholder="Select Location" className={classes.selectdd}/>
      <Marginer direction="vertical" margin="1em" />
  {/* <DateContainer pickup={props.pickup?true:false}/> */}
  <>
      <ItemContainer>
      <div>
      {returnDateValue?<ItemContainer>
        <Name >{'Drop Off'} Date</Name>
      </ItemContainer>:null}
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>{returnDateValue?returnDateValue:'Drop Off Date'}</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar value={returnDate} onChange={returnChangeDate as any} minDate={startDate}
          // maxDate={startDateValue?returnDate:null}
          className={classes.datepickerclass}
          />
        )}
      </ItemContainer>
      </div>
      <LineSeperator />
      <div>{returnTimeValue?<ItemContainer>
        <Name >{'Drop Off'} Time</Name>
      </ItemContainer>:null}
      <ItemContainer data-for="main" 
      // data-tip="Please Select PickUp Date"
      >
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
          
          <Select options={timeoptions.filter((i)=>i.value>startTime)} placeholder={returnTimeValue?returnTimeValue:'Drop Off Time' } className={classes.timedd}
              components={{ DropdownIndicator }}
              onChange={(e)=>setReturnTime(e.value)}
          />
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
  </>
    </>
  <Marginer direction="horizontal" margin="2em" />
      <Marginer direction="vertical" margin="1em" />
        <Button text="Book Your Ride" 
        clickbtn={clickfn}
        />
        </CardContainer>
  );
}
