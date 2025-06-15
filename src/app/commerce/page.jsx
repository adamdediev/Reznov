import './page.scss';
import Homepage from "../component/commerce/homepage/Homepage";
import Comment from "../component/commerce/comment/Comment";
import Suggest from "../component/commerce/suggest/Suggest";
import Cooperation from "../component/commerce/cooperation/Cooperation";
import ContactForm from "../component/contactForm/ContactForm";


export default function page() {
    return (
        <main>
            <Homepage/>
            <Comment/>
            <Suggest/>
            <Cooperation/>
            <ContactForm/>
        </main>

    )
}
