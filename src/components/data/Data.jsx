import React, { useEffect, useState } from 'react';
import Images from '../../assets/pattern-divider-desktop.svg';
import Dice from '../../assets/icon-dice.svg';
import axios from 'axios';

const Data = () => {
  const [advice, setAdvice] = useState('');
  const [id, setId] = useState(null);
  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      console.log(response);
      setAdvice(response.data.slip.advice);
      const { slip } = response.data;
      setAdvice(slip.advice);
      setId(slip.id);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="main">
      <p className="advice2">
        ADVICE #<span class="advice">{id}</span>
      </p>
      <p className="body">{advice}</p>
      <img className="icon1" src={Images} alt="" />
      <span onClick={fetchAdvice} className="click">
        <img src={Dice} alt="" />
      </span>
    </div>
  );
};

export default Data;
