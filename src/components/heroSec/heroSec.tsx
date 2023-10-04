import './heroSec.css';
import group7317 from '../../assets/Group 7317.svg';

import group_7318 from '../../assets/Group7318.png';
import group121 from '../../assets/Group121.png';
import group7321 from '../../assets/Group7321.png';
import group7320 from '../../assets/Group7320.png';
import group7318 from '../../assets/Group 7318.svg';
import group7319 from '../../assets/Group7319.png';
import group7327 from '../../assets/Group 7327.png';


const heroSec = () => {

    return(
        <>
        <div className= "heroSec" id='section1'>
            <div className="pentagon-1"></div>
            <div className="pentagon-2"></div>
            <div className="pentagon-3"></div>
            <div className= "mainPara" >
                <div  id="topParaMaiN" >
                <img src={group7318} alt="" />
                </div>
            
         
        <p id = "botmParaMain" >Maximize the complete potential of social media to establish your brand.</p>
        </div>
        <span className = "btnContact" > Book A FREE Consultation Call </span>
        <img  id="group7317" src={group7317} alt="main Section" />
        </div>
        <img id='group121' src={group121} alt="" />
        <div className="sec2main">
        <div className="sec2UnderMainPara">
            <div className="colLtt">
                <img className="colLttImg" src={group7327} alt="" />
                <div className="pentagon-1"></div>
                <h1 id='section2'>What We Offer</h1>
                <p>We specialize in boosting e-commerce businesses through effective social media marketing. Our goal is to enhance your brand's online presence, engage your target audience, and drive growth in the  ever-evolving digital marketplace.</p>
            </div>
            <div className="colRT" >
                <div className="innerLT" >
                    <div className="cellTop">
                        <img src={group_7318} alt="Facebook Ads" />
                        <div className="contTextim">
                        <h6>Facebook Ads</h6>
                        <p>Crafting tailored ads<br></br>targeting your ideal<br></br>customer demographics.</p>

</div>
                    </div>
                    <div className="cellBtm">
                        <img src={group7319} alt="retargeting" />
                        <div className="contTextim">
                        <h6>Retargeting Campaignsy</h6>
                        <p>Re-engaging past visitors and<br></br> converting window shoppers into<br></br> loyal customers.</p>
                    </div>

</div>
                </div>
                <div className="innerRT">
                    <div className="cellTop">
                            <img src={group7321} alt="Audience Building" />
                            <div className="contTextim">

                            <h6>Audience Building</h6>
                            <p>Growing your brand's Facebook<br></br> presence by attracting genuine<br></br> followers.</p>
                        </div>
                            </div>
                        <div className="cellBtm">
                            <img src={group7320} alt="content strategy" />
                            <div className="contTextim">
                            <h6>Content Strategy</h6>
                            <p>Curating posts that resonate with<br></br> your brand identity and engage<br></br> your audience.</p>
                        </div>

</div>
                </div>
            </div>
        </div>

        </div>
        
        </>
    );

};
export default heroSec;