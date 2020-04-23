import React, { useState, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";

const Modal = styled.div`
    margin: auto;
    background-color:#fff;
    height: 30rem;
    width: 30rem;
    border-radius: 1rem;
    padding: 1rem;
    z-index: 10000;
    visibility: hidden;
`;

const DateBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem;
padding: 2rem;
border-radius: 0.5rem;
opacity: 0.5;
z-index: -2;
:hover {
    opacity: 1;
}
`;

const PhotoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -2;
    margin: 2rem;
    padding: 2rem;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 0.5rem;
    opacity: 0.1;
    :hover {
        opacity: 1;
    }
`;

const Title = styled.h1`
    color: #fff;
`;

const Explanation = styled.p`
    display: flex;
    justify-content: center;
    padding: 2rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
`;

const Copyright = styled.h3`
    font-size: 1.2rem;
    font-style: italic;
    color: #fff;
    margin-top: 2rem;
`;

const Container = () => {

    const [daily, setDaily] = useState([]);
    const [newDate, setNewDate] = useState(`2014-05-11`);
    const [openModal, setOpenModal] = useState(true);

    useEffect(() => {
        
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=O1yRgiiJB1AfSVJkCNslz1fyPqmSFSRqkt2pMfvE&date=${date}`)
        .then(res => {
            setDaily(res.data);
            const grab = document.querySelector('.App');
            const backgroundImg = res.data.url;
            grab.style.background = 'url("'+backgroundImg+'") repeat center center/cover';   
        })
        .catch(err => {
            console.log(`There was an error`, err)
        });
    }, []);
   
    const handleChange = (e) => {
        console.log(e.target.value)
        return (e.target.value < `1995-06-16` ? alert(`There are no pictures past June 16th, 1995. Please select another date and try again.`) : setNewDate(e.target.value));
    }
        
    const date = newDate;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=O1yRgiiJB1AfSVJkCNslz1fyPqmSFSRqkt2pMfvE&date=${date}`)
        .then(res => {
            setDaily(res.data);
            const grab = document.querySelector('.App');
            const backgroundImg = res.data.url;
            grab.style.background = 'url("'+backgroundImg+'") repeat center center/cover';   
        })
        .catch(err => {
            console.log(`There was an error`, err)
        }, []);
    };

    const { copyright, explanation, title } = daily;
    
    function ifElse() {
        const test = ` Credit: ${copyright}`;

        return (!copyright ? '' : test);
    }

    function closeModal() {
        setOpenModal(false);
    }

    return (
        <div>
            // the modal 
            <Modal id="myModal" className="modal">

                // Modal content
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <p>Some text in the Modal..</p>
                </div>

            </Modal>
            <DateBox>
                <form className="nasa-form" onSubmit={handleSubmit}>
                <div className="form-box">
                    <input
                    className="nasa-input"
                    type="date"
                    name="date"
                    onChange={handleChange}
                    />
                    <button className="nasa-button">Get a new image</button>
                </div>
                </form>
            </DateBox>
            <PhotoBox>
                <Title>{title}</Title>
                <Explanation>{explanation}</Explanation>
                <Copyright>{ifElse()}</Copyright>
            </PhotoBox>
        </div>
    );
}

export default Container;

