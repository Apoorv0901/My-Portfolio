"use client"

import { Link } from "lucide-react"

export default function Projects() {
  return (
    <div className="md:scroll-smooth sm:scroll-smooth mx-2 px-3">
      <h1 className="text-4xl font-bold mb-8 text-center flex justify-center">Projects</h1>
      <br></br>

      <section className="lg:flex gap-5">
        {/*Smart colony */}
        <div
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
          <div className="min-h-[256px]">
            <img src="/smartcolony.jpg" className="w-full" />
          </div>

          <div className="p-6">
            <h3 className="text-gray-800 text-xl font-bold">Smart colony Iot Project</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              ● My Smart Colony project integrates IoT systems for enhanced sustainability and automation. It features:
              <br />
              - Solar energy with solar tracker<br />
              - Home security using RFID and PIR sensors<br />
              - Automatic irrigation system<br />
              - Home automation<br />
              - Swimming pool management<br />
              - Smart garbage bin for waste monitoring<br />
              <br />
              ● The project utilizes various sensors and controller boards (Arduino, Node MCU) for seamless integration and real-time monitoring.
              <br />
              <br />
              ● Through this project, I gained hands-on experience in:
              <br />
              - Designing IoT-based systems<br />
              - Integrating sensors and actuators<br />
              - Developing real-time data processing algorithms<br />
              - Ensuring secure data transmission<br />
              - Troubleshooting and optimizing IoT systems<br />
            </p>
          </div>
        </div>

        {/*Chat App */}
        <div
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
          <div className="min-h-[256px]">
            <img src="/chatapp.png" className="w-full" />
          </div>

          <div className="p-6">
            <h3 className="text-gray-800 text-xl font-bold">Chat App</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              ● My Chat App project is built using the MERN stack, offering seamless communication features. It includes:
              <br />
              - Secure JWT authentication for signup and login<br />
              - Real-time communication enabled by Shocket.io <br />
              - Instant messaging with real-time chat updates<br />
              - Online status monitoring for connected users<br />
              <br />
              ● This project showcases efficient, scalable, and secure communication solutions.
              <br />
              <br />
              ● Through this project, I gained hands-on experience in:
              <br />
              - Implementing JWT authentication<br />
              - Building real-time communication systems<br />
              - Developing scalable messaging systems<br />
              - Managing real-time updates<br />
              - Ensuring security and data integrity<br />
            </p>
            <div className="flex gap-2">

              <a href="https://github.com/Apoorv0901/ChatApp/tree/master/backend">
                <button type="button"
                  className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">Backend</button>
              </a>
              <a href="https://github.com/Apoorv0901/Chat-App-frontend">
                <button type="button"
                  className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">Frontend</button>
              </a>
            </div>
          </div>
        </div>


        {/*Job Portal */}
        <div
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
          <div className="min-h-[256px]">
            <img src="/hirrd.png" className="w-full" />
          </div>

          <div className="p-6">
            <h3 className="text-gray-800 text-xl font-bold">Job Portal {"(Hirrd)"}</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              ● My Job Portal website, Hirrd, is built using React.js, Tailwind CSS, and Shadow UI, with Supabase as the backend and Clerk for authentication. Key features include:
              <br />
              - User authentication via Clerk<br />
              - Job listings with filtering and search functionality<br />
              - Company profiles and job posting management<br />
              - Real-time job application tracking<br />
              - Secure and scalable Supabase backend infrastructure<br />
              - Separate dashboards for Job Seekers and Recruiters<br />
              - Recruiters can post job openings, receive and manage applications from candidates<br />
              <br />
              ● Hirrd streamlines the job search process, connecting candidates with employers efficiently.

              <br />
              <br />

              ● Through this project, I gained hands-on experience in:
              <br />
              - Designing scalable backend architectures<br />
              - Integrating third-party APIs<br />
              - Developing responsive UIs with React.js<br />
              - Managing real-time updates<br />
              - Ensuring security and data integrity<br />
            </p>


            <div className="flex gap-2">

              <a href="https://github.com/Apoorv0901/job-portal">
                <button type="button"
                  className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">GitHub</button>
              </a>
              <a href="https://marvelous-dango-068f07.netlify.app">
                <button type="button"
                  className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button>
              </a>
            </div>
          </div>
        </div>

        {/* Vedio tube */}

        <div
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
          <div className="min-h-[256px]">
            <img src="/vt.jpg" className="w-full" />
          </div>

          <div className="p-6">
            <h3 className="text-gray-800 text-xl font-bold">Vedio Tube {"(Backend)"}</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              ● My VedioTube backend project is a YouTube-like video sharing platform built using Node.js, Express.js, Mongoose, and MongoDB. It features:
              <br />
              - User registration and login with JWT authentication<br />
              - Video upload, update, and deletion<br />
              - Video categorization and tagging<br />
              - Commenting and liking/disliking videos<br />
              - User profile management<br />
              - Video search and filtering<br />
              - Cloudinary integration for secure and scalable video storage<br />
              <br />
              ● Through this project, I gained hands-on experience in:<br />

              - Building scalable RESTful APIs with Node.js and Express.js<br />
              - Implementing JWT authentication and MongoDB databases with Mongoose<br />
              - Integrating Cloudinary for media storage<br />
              - Managing complex data relationships and queries<br />
              - Ensuring data integrity and security<br />
            </p>

            <a href="https://github.com/Apoorv0901/vedioTube-backend">

              <button type="button"
                className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">GitHub</button>
            </a>
          </div>
        </div>


        {/** Billing Software */}
        <div
          className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
          <div className="min-h-[256px]">
            <img src="billing.png" className="w-full" />
          </div>

          <div className="p-6">
            <h3 className="text-gray-800 text-xl font-bold">Billing Software</h3>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed"> ● My Billing Software project is a simple and intuitive invoicing system built using Python and Tkinter for the UI. It features:
              <br />
              - User-friendly interface for creating and managing invoices<br />
              - Billing and payment tracking<br />
              - Customer and item management<br />
              - Tax calculation and reporting<br />
              - Secure storage of billing history on local file system<br />
              <br />
              ● Through this project, I gained hands-on experience in:<br />

              - Building desktop applications with Python and Tkinter<br />
              - Designing user-friendly and intuitive interfaces<br />
              - Implementing file system operations for data storage and retrieval<br />
              - Managing data relationships and queries in a local storage environment<br />


            </p>
            <a href="https://github.com/Apoorv0901/Python-project/blob/main/billingSoftware.py">

              <button type="button"
                className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">GitHub</button>
            </a>
          </div>
        </div>

      </section>
    </div>
  )
}

