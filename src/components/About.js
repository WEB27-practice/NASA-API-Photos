import React from "react";

import styled from "styled-components" ;

const PhotoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    padding: 2rem;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 0.5rem;
    opacity: 0.5;
    :hover {
        opacity: 1;
    }
`;

const Title = styled.h1`
    color: #fff;
`;

const Text = styled.p`
    color: #fff;
`;

const About = () => {

    return (
        <div>
            <PhotoBox>
                <Title>NASA API Project</Title>
                <Text>Tech used: HTML, CSS, JS</Text>
                <Text>I was first challenged do complete this project as a student.</Text>
            </PhotoBox>
        </div>
    )
}

export default About;