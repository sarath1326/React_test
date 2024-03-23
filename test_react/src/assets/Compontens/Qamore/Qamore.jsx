


import React from 'react'
import "./Qamore.css"
import { BsArrowReturnRight } from "react-icons/bs";
import { IoRemoveOutline } from "react-icons/io5";
import { PiBinocularsFill } from "react-icons/pi";
import { BsArrowsAngleContract } from "react-icons/bs";
import { useState } from 'react';
import { BsArrowClockwise } from "react-icons/bs";
import { RxRows } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import { IoIosMore } from "react-icons/io";



function Qamore(props) {

    const [show, setshow] = useState(true)
    const [more1,setmore1]=useState(false)
    const [more2,setmore2]=useState(false)

    return (

        <div>

            <div className='qa-more-main' >

                <div className='qa-more-inner-main' >

                    <div className='a-more-inner-top' >

                        <div>
                            <BsArrowReturnRight style={{ color: "blue" }}  />
                            <span > Need more clarification on the section? </span>
                        </div>

                        <div className='a-more-inner-top-icon-box' >

                            <IoRemoveOutline onClick={()=>{props.func(false)}} />

                        </div>


                    </div>


                    {
                        show ?

                            <div className='qa-more-conn' onClick={() => { setshow(false) }} >

                                <div className='more-conn-icon-box' >

                                    <PiBinocularsFill style={{ color: "blue" }}  />


                                </div>

                                <span > How do I connect this to my business context?  </span>

                                < BsArrowsAngleContract className='arrow-icon' />

                            </div>

                            :

                            <div className='coon-more-main' >

                                <div className='coon-more-main-top' >

                                    <div style={{ display: "flex" }} >

                                        <div className='more-conn-icon-box' >

                                            <PiBinocularsFill style={{ color: "blue" }} />


                                        </div>

                                        <span style={{ marginLeft: "5px" }} > How do I connect this to my business context?  </span>




                                    </div>

                                    <div style={{ display: "flex" }} >

                                        <BsArrowClockwise style={{ marginRight: "20px" }} />
                                        <BsArrowsAngleContract className='coon-more-main-top-icon' />

                                    </div>









                                </div>

                                <div className='coon-more-main-inner-main ' >

                                    <div className='coon-more-main-inner-boxs' >

                                        <div className='coon-inner-box-top' >

                                            <div style={{ display: "flex" }} >

                                                <RxRows />

                                                <span style={{ color: "black" }} > Add raw materials costs as variable costs </span>

                                                <SlArrowDown className='d-arrow' onClick={()=>{setmore1(!more1)}} />

                                            </div>
                                            </div>

                                        <span style={{fontSize:"15px",marginLeft:"5px"}} >  Energy and Utility costs are Lorem ipsum dolor sit amet...  </span>

                                        {
                                             more1 &&
                                             <>
                                             <div className='more-main' >

                                                <div className='acc' >
 
                                                    <span style={{color:"white",fontSize:"12px"}} > Accept </span>
                                                    <BiSolidDownArrowCircle />
                                                </div>

                                                <div className='dis' > 

                                                <span style={{color:"black",fontSize:"12px"}} > Dismiss </span>
                                                <RiCloseLine />


                                                </div>

                                                < IoIosMore style={{marginLeft:"10px"}} />

                                             </div>

                                             </>
                                        }
                                        
                                        




                                       

                                      
                                      </div>

                                      <div className='coon-more-main-inner-boxs' >

                                        <div className='coon-inner-box-top' >

                                            <div style={{ display: "flex" }} >

                                                <RxRows />

                                                <span style={{ color: "black" }} > Add raw materials costs as variable costs </span>

                                                <SlArrowDown className='d-arrow' onClick={()=>{setmore2(!more2)}} />

                                            </div>
                                            </div>

                                        <span style={{fontSize:"15px",marginLeft:"5px"}} >  Energy and Utility costs are Lorem ipsum dolor sit amet...  </span>

                                        {
                                             more2 &&
                                             <>
                                             <div className='more-main' >

                                                <div className='acc' >
 
                                                    <span style={{color:"white",fontSize:"12px"}} > Accept </span>
                                                    <BiSolidDownArrowCircle />
                                                </div>

                                                <div className='dis' > 

                                                <span style={{color:"black",fontSize:"12px"}} > Dismiss </span>
                                                <RiCloseLine />


                                                </div>

                                                < IoIosMore style={{marginLeft:"10px"}} />

                                             </div>

                                             </>
                                        }
                                        
                                        




                                       

                                      
                                      </div>







                                </div>


                            </div>





                    }






                </div>


            </div>



        </div>
    )
}

export default Qamore
