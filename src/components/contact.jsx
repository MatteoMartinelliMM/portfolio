import MailIcon from "./icons/mailIcon.jsx";
import PhoneIcon from "./icons/phoneIcon.jsx";
import MarkerIcon from "./icons/markerIcon.jsx";

function Contact() {
    return <footer className="footer w-full bg-base-200 flex justify-center items-center ">
        <div className="w-full max-w-5xl">
            <div className="grid gap-8 w-full  min-h-[75vh] lg:grid-cols-2">
                <div className="w-full pt-4 px-8 lg: w-3/4  my-auto ">
                    <form>
                        <div className="flex items-center gap-2">
                            <MailIcon className="size-10"/>
                            <h2 className="footer-title text-xl pt-1">Get in touch.</h2>
                        </div>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-lg">Name</span>
                            </div>
                            <input type="text" className="input input-bordered input-md input-primary w-full "/>
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-lg">Email</span>
                            </div>
                            <input type="email" className="input input-bordered input-md input-primary w-full "/>
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-lg">Message</span>
                            </div>
                            <textarea className="textarea textarea-primary h-24 w-full"></textarea>
                        </label>
                        <button className="btn btn-outline btn-primary mt-5 w-full">Submit</button>
                    </form>

                </div>
                <div className="w-full px-8   lg: w-1/2 mt-36">
                    <h2 className="footer-title text-xl pt-1">Contact Info:</h2>
                    <div className="flex items-center gap-8 mt-5">
                        <MailIcon className="size-6"/>
                        <a className="link link-hover text-lg" href="mailto:tvoosai@gmail.com">tvoosai@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-8 mt-5">
                        <PhoneIcon className=""/>
                        <a className="link link-hover text-lg" href="tel:+393468894784">+39 3468894784</a>
                    </div>
                    <div className="flex items-center gap-8 mt-5">
                        <MarkerIcon className=""/>
                        <p className="text-lg">Milan, IT</p>
                    </div>
                </div>
            </div>
            <h6 className="footer-title mx-auto">© Tvoosai. All rights reserved</h6>
        </div>
    </footer>
}

export default Contact