import React from "react";
import styled from "@emotion/styled";
const Condition = ({condition,temp}) => {

  const Temp = styled.h1`
  font-family: 'Fira Sans',sans-serif;
    font-size: 2rem;
    font-weight:200;
  `

const State = styled.h3`
font-family: 'Merriweather',sans-serif;
    font-size: 1.2rem;
`
    return (
      <>
        <Temp className='condition'>{condition}</Temp>
        <State className='temp'>{temp} oC</State>
      </>
        );
}
 
export default Condition;
