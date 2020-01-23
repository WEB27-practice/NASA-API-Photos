import React from "react";
import Photo from "./Photo";
// import axios from "axios";


const PhotoContainer = (props) => {
    console.log(props);
    // const [galaxies, setGalaxies] = useState([]);
  

    // useEffect(() => {
    //     axios.get(`https://api.nasa.gov/planetary/apod?api_key=O1yRgiiJB1AfSVJkCNslz1fyPqmSFSRqkt2pMfvE`)
    //         .then(res => {
    //             console.log(res.data)
    //             setGalaxies(res.data);
    //         })
    //         .catch(err => {
    //             console.log(`There was an error`, err)
    //         });
    // }, []);

    return(
        <div className="photo-container">
            <Photo data={props}/>
        </div>
    );
}


export default PhotoContainer;