import  './footer.css';

import rec197 from '../../assets/Rectangle 197.png';
import vec1 from '../../assets/Vector (1).png';
import vec2 from '../../assets/Vector (2).png';
import vec3 from '../../assets/Vector (3).png';
import vec4 from '../../assets/Vector (4).png';

const footer = () => {

    return(
        <>
        <div className="footerWrappr">
            <div className="topRow">
                <img className='imgFoot' src={rec197} alt="" />
                <p className='pFooter'>We create custom plans for big online shops on social media.<br></br> Our team of experts helps improve your brand's online experience. <br></br>Let us enhance your business with special strategies made just for you.</p>
                <div className="socialGrp">
                    <img src={vec1} alt="" />
                    <img src={vec2} alt="" />
                    <img src={vec3} alt="" />
                    <img src={vec4} alt="" />
                </div>
            </div>
            <div className="btmRow">
                <div className="innerLtt">
                    <p>© 2023 &nbsp; <span className='spanfot'> Emprix Marketing</span> &nbsp; All Rights Reserved</p>
                </div>
                <div className="innerRtt">
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>

        </>
    );

};
export default footer;