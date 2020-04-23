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

const Text = styled.h3`
    color: #fff;
    margin-top: 1rem;
`;

const About = () => {

    return (
        <div>
            <PhotoBox>
                <Title>NASA API Project</Title>
                <Text>How to use:</Text>
                <Text>1). Select a date </Text>
                <Text>2). Click the 'Get a new image' button</Text>
                <Text>3). Watch the background change </Text>
                <Text>The purpose of this project is to showcase NASA's Picture of the Day. Therefore, I have prioritized the image set to the background by making the calendar and accompanying description almost completely see-through. You can read the text by moving the mouse over the text.</Text>
                <Text>NASA has provided software engineers various Application Programming Interfaces (APIs) to practice with. In order to gain access to these APIs, we must request a unique API key. With this key, we make a request to the API and in the response, we receive an object that has the image, title, description, credit, etc. Through some basic JavaScript and CSS, I have taken the image that comes in the response and set it to the background. This specific API has images stored for every day of the year going all the way back to July 16th, 1995.  </Text>
                <Text>Tech used: HTML, CSS, JS</Text>
            </PhotoBox>
        </div>
    )
}

export default About;