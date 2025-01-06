import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Contact() {
    return (<div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

            <div className="mb-10 md:mb-16">
                <h2 className="mb-4 text-center text-4xl font-bold md:mb-6 lg:text-3xl">Contact and Connect With Me</h2>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
                {/* <!-- feature - start --> */}

                {/** Email */}
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                        <MdMarkEmailUnread className="h-6 w-6" />
                    </div>

                    <a
                        className="text-3xl transition-colors hover:font-bold duration-300"
                        href="mailto:apoorvsharma0709@gmail.com">
                        apoorvsharma0709@gmail.com
                    </a>
                </div>


                {/** Phone */}
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                        <FaPhoneAlt className="h-6 w-6" />
                    </div>

                    <a href="#" className="text-3xl transition-colors hover:font-bold duration-300">+91 7089726259</a>
                </div>


                {/**Github */}
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                        <ImGithub className="h-6 w-6" />
                    </div>

                    <a
                        href="https://github.com/Apoorv0901"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl transition-colors hover:font-bold duration-300"
                    >
                        Github
                    </a>
                </div>


                {/**Linkedin */}
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                        <FaLinkedin className="h-6 w-6" />
                    </div>

                    <a
                        href="https://www.linkedin.com/in/apoorv-sharma-487421288/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl transition-colors hover:font-bold duration-300"
                    >
                        linkedin
                    </a>
                </div>



                <div className="flex flex-col items-center">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                        <FaSquareXTwitter className="w-6 h-6" />
                    </div>

                    <a
                        href="https://x.com/Apoorv_360"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:font-bold transition-colors duration-300"
                    >
                        twitter
                    </a>
                </div>
                {/* <!-- feature - end --> */}
            </div>
        </div>
    </div>);

};



// ttps://mail.google.com/mail/u/0/#advanced-search/to=apoorvsharma0709%40gmail.com&query=in%3Asent&isrefinement=true&todisplay=Apoorv+Sharma