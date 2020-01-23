import React from "react";
import styled from "styled-components";

const PhotoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    padding: 2rem;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 5px 50px 5px 50px;
`;

const Explanation = styled.p`
    display: flex;
    justify-content: center;
    padding: 2rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
`;

const Copyright = styled.h2`
    font-size: 1.2rem;
    color: #fff;
    margin-top: 2rem;
`;
const Photo = (props) => {
    console.log(props);

    function ifElse() {
        const test = ` Credit: ${props.data.data.copyright}`;

        return (!props.data.data.copyright ? '' : test);
    }
    
   

    return(
        <PhotoBox>
            <Explanation>{props.data.data.explanation}</Explanation>
            <Copyright >{ifElse()}</Copyright>
        </PhotoBox>
    )
};

export default Photo;