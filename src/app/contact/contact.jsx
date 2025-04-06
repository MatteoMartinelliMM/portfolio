import MarkerIcon from "@/app/components/icons/markerIcon";
import MailIcon from "@/app/components/icons/mailIcon";
import PhoneIcon from "@/app/components/icons/phoneIcon";
import ContactForm from "@/app/contact/contactForm";

function Contact() {
    return <footer className="footer w-full bg-base-200">
        <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center min-h-[75vh] px-8 lg:px-0">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 w-full items-start pt-0.5 lg:pt-0">
                <div className="w-full lg:w-1/2 pt-6 lg:pt-0">
                    <ContactForm formSubmitted={false} sending={false}/>
                </div>
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="footer-title text-xl lg:text-2xl">Contact Info</h2>
                    <div className="flex items-center gap-8 mt-5">
                        <MailIcon className="size-6" />
                        <a className="link link-hover text-lg" href="mailto:tvoosai@gmail.com">tvoosai@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-8 mt-5">
                        <PhoneIcon />
                        <a className="link link-hover text-lg" href="tel:+393468894784">+39 3468894784</a>
                    </div>
                    <div className="flex items-center gap-8 mt-5">
                        <MarkerIcon />
                        <p className="text-lg">Milan, IT</p>
                    </div>
                </div>
            </div>
            <h6 className="footer-title mt-12 text-center">© Tvoosai. All rights reserved</h6>
        </div>
    </footer>

}

export default Contact