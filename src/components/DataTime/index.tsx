import React, {useState, useEffect} from 'react';
import {Wrapper, Text} from './styles';

import {Weeks, Months} from '../../utils/weeksAndMonths';

const DataTime = () => {
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');

  const setTimer = async () => {
    let getHour = new Date().getHours();
    let getMinute = new Date().getMinutes();

    let hourFormated =
      String(getHour).length < 2 ? '0' + String(getHour) : String(getHour);

    let minutesFormated =
      String(getMinute).length < 2
        ? '0' + String(getMinute)
        : String(getMinute);

    setHour(`${hourFormated}:${minutesFormated}`);
  };

  const setDateTime = async () => {
    let day = new Date().getDate();
    let week = Weeks[new Date().getDay()];
    let month = Months[new Date().getMonth()];

    setDate(`${week.slice(0, 3)} ${day}/${month.slice(0, 3)}`);
  };

  useEffect(() => {
    setTimer();

    setInterval(() => {
      setTimer();
    }, 6000);

    setDateTime();
  }, []);

  return (
    <Wrapper>
      <Text>{hour}</Text>
      <Text>{date}</Text>
    </Wrapper>
  );
};

export default DataTime;
