import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Contact() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            {/* Title */}

            {/* Contact Info */}
            <div className="max-w-4xl container border flex-col px-5 py-5 gap-10 sm:gap-2 rounded-lg border-x-8 border-y-8 hover:border-x-20">
                <h2 className="text-4xl font-bold text-center mb-8">Contact Information</h2>
                <div className="text-xl flex-col sm:flex sm:text-3xl">
                    {/* Email Section */}
                    <div className="flex items-center space-x-4">
                        <div className="flex gap-2 text-2xl hover:font-bold">
                            <MdMarkEmailUnread className="size-8"/>
                            <p className="text-blue-500 sm:overflow-hidden">
                                <a href="https://mail.google.com/mail/u/0/#advanced-search/to=apoorvsharma0709%40gmail.com&query=in%3Asent&isrefinement=true&todisplay=Apoorv+Sharma">
                                apoorvsharma0709@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Contact Number */}
                    <div className="flex items-center space-x-4">
                        <div className="flex gap-2 text-2xl hover:font-bold">
                            <FaPhoneAlt className="size-6"/>
                            <p className="text-blue-500"> +91 7089726259
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            {/* Social Links */}
            <div className="mt-12 max-w-4xl border border-spacing-4 flex flex-col px-5 py-5 gap-10 rounded-lg border-x-8 border-y-8 hover:shadow-lg">
                <h3 className="text-4xl font-semibold text-center mb-4">Follow Me</h3>
                <div className="lg:flex justify-center space-x-8 text-2xl md:flex sm:block">
                    <div className="flex gap-3 sm:gap-1 sm:ml-2">

                        <ImGithub className="size-10"/>
                        <a
                            href="https://github.com/Apoorv0901"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl transition-colors hover:font-bold duration-300"
                        >
                            Github
                        </a>
                    </div>

                    <div className="flex gap-3">
                        {/* LinkedIn */}
                        <FaLinkedin className="size-10"/>
                        <a
                            href="https://www.linkedin.com/in/apoorv-sharma-487421288/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl transition-colors hover:font-bold duration-300"
                        >
                            linkedin
                        </a>
                    </div>

                    <div className="flex gap-3">

                        {/* Twitter (Optional) */}
                        <FaSquareXTwitter className="size-10"/>
                        <a
                            href="https://x.com/Apoorv_360"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl hover:font-bold transition-colors duration-300"
                        >
                            twitter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
