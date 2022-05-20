import { FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md'; 
import { HiMail } from 'react-icons/hi'; 
function Contacts(){
    return(
        <div className="contacts-page">
            <div className="contacts-item">
                <FaPhone/>
                <span>+380 XX XXX XX XX</span>
            </div>
            <div className="contacts-item">
                <MdLocationOn/>
                <span>121 Rexford Str., West-Side Av., New York NY-92103-9000</span>
            </div>
            <div className="contacts-item">
                <HiMail/>
                <span>countryofpeace@gmail.com</span>
            </div>
        </div>
    )
}
export default Contacts;