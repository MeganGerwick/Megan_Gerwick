
import { Image, } from 'react-bootstrap';
import icon from "../images/emptyicon.png";


export default function FooterComponent() {
    return (
        <div className='center'>
            <p>&copy; Email: gerwickmegan@gmail.com
                <Image src={icon} alt="logo" height={40} width={40} fluid /> Phone Number: (816) 663-9671
                <Image src={icon} alt="logo" height={40} width={40} fluid /> Github: https://github.com/MeganGerwick
        </p>
        </div>
    )
};