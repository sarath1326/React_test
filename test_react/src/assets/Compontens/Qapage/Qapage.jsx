


import React from 'react'
import "./Qapage.css"
import { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { IoRemoveOutline } from "react-icons/io5";
import { BsArrowReturnRight } from "react-icons/bs";
import { LuSparkles } from "react-icons/lu";
import Qamore from '../Qamore/Qamore';

function Qapage() {

    const [flag, setflag] = useState(true)
    const [qa_more, setqa_more] = useState(false)
    const [view,setview]=useState(false)
    const [icon,seticon]=useState(true)



    const showhide=()=>{
 
        setqa_more(false)
        setview(true)
        
    }


    return (
        <div>

            <div className='qa-main' >

                {

                    flag ?

                        <div className='box-main' >

                            <div className='left-main' >

                                <p> STEP 1/3 </p>

                                <h3> Cost Identification </h3>
                                <span> Identify and categorize the various costs influencing margins. </span>

                            </div>

                            <div className='right-main' >

                                <p> 4 Prompts | 5 mins </p>

                                <div className='btn-main' >

                                    <button onClick={() => { setflag(false) }} >  Get Started  </button>



                                </div>

                            </div>


                        </div>

                        :

                        <div>

                            <div className='prve-main' >

                                <div className='prve-top-main' >

                                    <p> Step 1 </p>

                                    <div className='prev-nav-main' onClick={() => { setflag(true) }}  >

                                        <IoIosArrowUp />

                                    </div>









                                </div>

                                <h3> Cost Identification </h3>

                                <p className='prve-text' >

                                    Identify and categorize the various costs influencing margins. Costs are usually categorized as variable costs (which increase directly with an increase in sales or revenue – for example raw material costs for production), semi-variable costs (which increase with sales too, but not as linearly. For example – manpower costs for some services heavy business) and fixed costs
                                    (which are not linked to the volume of products/sales/revenue directly. For example – headquarter administration costs).

                                </p>
                                <hr />

                                <div className='prve-qa-main'  >

                                    <span className='prve-span-1' > Question 1 out of 3 </span>

                                    {/* {
                                        qa_more ?

                                            <IoRemoveOutline className='prve-qa-icon' onClick={() => { setqa_more(false) }} />

                                            :

                                            <LuPlus className='prve-qa-icon' onClick={() => { setqa_more(true) }} />

                                           

                                    
                                    
                                    } */}


                                    {

                                         icon  ?

                                         <LuPlus className='prve-qa-icon' onClick={() => { setqa_more(true) , seticon(false) }} />

                                         : <IoRemoveOutline className='prve-qa-icon' onClick={() => { setqa_more(false) , seticon(true) ,setview(false) } } />



                                    }





                                </div>

                                <p className='prve-qa-title' > What are the primary components of variable & semi-variable costs impacting gross margins? </p>




                            </div>


                            {

                                qa_more && <div className='qa-more-show' >

                                    <div className='qa-more-show-inner-box' onClick={showhide}  >

                                        <BsArrowReturnRight />
                                        <span > Need more clarification on the section? </span>

                                        <div className='inner-box-icon' >

                                            <LuPlus />

                                        </div>

                                    </div>

                                    <div className='qa-more-show-inner-box' >

                                        <LuSparkles />
                                        <span > Need more clarification on the section? </span>

                                        <div className='inner-box-icon' >

                                            <LuPlus />

                                        </div>

                                    </div>

                                
                                </div>


                            }
                             

                           
                            {

                                 view && <Qamore func={setview} />
                            
                            
                            }


                              
                            
                         








                        </div>






                }







            </div>



        </div>
    )
}

export default Qapage
