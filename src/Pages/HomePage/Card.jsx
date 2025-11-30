import React from 'react';
import "./Card.css";
import Taj from "../../assets/Taj.jpg";
import Boat from "../../assets/Houseboat.jpg";
import Munnar from "../../assets/Munnar.jpg";


const Card =() =>{

    return (
        <div  className='container  pb-5'>
            <h2 className='py-3 m-3'>Popular Destination</h2>
            <div className='row'>
                <div className="col">
                    <h1 className='p-3'>Taj Mahal – Symbol of Love 🩷</h1>
                    <p>The Taj Mahal in Agra is a world wonder built by Emperor Shah Jahan for Mumtaz Mahal. Its white marble beauty, perfect symmetry,
                          and timeless love story make it one of the most visited monuments in the world. </p>
                </div>
                <div className="col">
                     <img src={Taj} alt="Taj-Mahal" style={{width:"550px"}}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={Boat} alt="Kerala" style={{width:"550px"}}/>
                </div>
                <div className="col px-3">
                     <h1 className='p-5'>Kerala Houseboat Experience</h1>
                    <p>Glide through Kerala’s serene backwaters on a traditional houseboat, 
                        surrounded by lush greenery and calm waters. A perfect blend of nature and relaxation. </p>
                </div>
            </div>
            <div className="row">
                <div className="col px-3">
                     <h1 className='p-5'>Munnar Hills Getaway</h1>
                   <p>Explore the misty tea gardens and rolling hills of Munnar. Refresh your senses amidst nature’s emerald beauty.</p>
                </div>
                <div className="col">
                    <img src={Munnar} alt="Munnar" style={{width:"550px"}}/>
                </div>
            </div>

        </div>
        // <div className='Card-container'>
        //     <table>
        //         <tbody>
        //         <tr>
        //             <td>
        //             <h1>Taj Mahal – Symbol of Love 🩷</h1>
        //             <p>The Taj Mahal in Agra is a world wonder built by Emperor Shah Jahan for Mumtaz Mahal. Its white marble beauty, perfect symmetry,
        //                  and timeless love story make it one of the most visited monuments in the world. </p>
        //           </td>
        //           <td>
        //         <img src="https://wallpaperaccess.com/full/1894584.jpg" alt="Taj-Mahal" style={{width:"550px"}}/>
        //         </td>
        //         </tr>
        //         <tr>
        //             <td>
        //              <img src="https://indiator.com/tourist-places/wp-content/uploads/2016/11/kerala-houseboat-ravel.jpg" alt="Kerala" style={{width:"550px"}}/>
        //           </td>
        //           <td>
        //         <h1>Kerala Houseboat Experience</h1>
        //             <p>Glide through Kerala’s serene backwaters on a traditional houseboat, 
        //                 surrounded by lush greenery and calm waters. A perfect blend of nature and relaxation. </p>
        //         </td>
        //         </tr>
        //          <tr>
        //             <td>
        //              <h1>Munnar Hills Getaway</h1>
        //             <p>Explore the misty tea gardens and rolling hills of Munnar. Refresh your senses amidst nature’s emerald beauty.</p>
        //           </td>
        //           <td>
        //         <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Munnar-Kerala.jpg" alt="Munnar" style={{width:"550px"}}/>
        //         </td>
        //         </tr>
        //         </tbody>
        //     </table>

        // </div>


       
    );

}

export default Card;

 