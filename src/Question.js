import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (isi) => {
  //data
  const { title,info } = isi;
  //data show
  const [baca,setBaca] = useState(false);

  return (
    <article className='question'>
      <header>
      <h4>{title}</h4>
      {baca === false ? <button className='btn' onClick={()=>setBaca(!baca)}><AiOutlinePlus /></button>
      :
      <button className='btn' onClick={()=>setBaca(!baca)}><AiOutlineMinus /></button>
      }
      </header>
      {baca === true ? <p>{info}</p> : <p></p>}
    </article>
    );
};

export default Question;
