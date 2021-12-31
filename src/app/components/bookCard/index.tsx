import React, { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
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


const CardContainer = styled.div`  
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    justify-center
    items-center
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
const DateContainer=()=>{
  return(<>
      <ItemContainer>
      <div>
      {startDateValue?<ItemContainer>
        <Name >Pick Up Date</Name>
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
          maxDate={startDateValue?returnDate:null}
          />
        )}
      </ItemContainer>
      </div>
      <LineSeperator />
      <div>{returnDateValue?<ItemContainer>
        <Name >Return Date</Name>
      </ItemContainer>:null}
      <ItemContainer data-for="main" data-tip="Please Select Start Date">
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={startDateValue?toggleReturnDateCalendar:null}>{returnDateValue?returnDateValue:'Return Date'}</Name>
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
      <Marginer direction="vertical" margin="1em" />
  <DateContainer/>
  <Marginer direction="horizontal" margin="2em" />
      <Marginer direction="vertical" margin="1em" />
            <Marginer direction="vertical" margin="1em" />
  <DateContainer/>
  <Marginer direction="horizontal" margin="2em" />
      <Marginer direction="vertical" margin="1em" />
        <Button text="Book Your Ride" />
    </CardContainer>
  );
}
