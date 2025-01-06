import Image from 'next/image';

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Welcome to my portfolio! I am Apoorv Sharma an aspiring software engineer, a passionate tech enthusiast,
                and currently pursuing a B.Tech in Electronics and Communication Engineering. With a strong foundation in both hardware and software, I’m constantly exploring innovative solutions and expanding my skills. My journey is driven by a deep curiosity to learn, create, and contribute to the ever-evolving world of technology. Through this portfolio, I aim to showcase my projects, skills,
                and experiences as I continue to grow in the fields of software development and engineering.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">My Journey as a learner</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              From eager learner to skilled engineer, here's how I developed my expertise through academics, hands-on experience, and problem-solving
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/reclogo.jpeg" alt="college logo" className="w-80 h-80 rounded-full shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Spark of Curiosity</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  I began my academic journey at Frommans Memorial School,
                  a respected state board institution, where I developed a passion for science and mathematics.
                  I completed my 10th standard with 89.4% and my 12th standard in the PCM stream with 89.3%.
                  These achievements reflect my dedication and laid the foundation for my career in engineering and technology.

                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/prof.jpg" alt="Harry learning new skills" className="w-full h-80 rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  My college journey at a government engineering college has been transformative,
                  overcoming challenges and making the most of limited resources. In my second year,
                  I began learning programming languages, sparking my interest in software development.
                  By third year, I expanded my skills to include Data Structures, Algorithms, and web development,
                  working on projects that integrated web development and IoT.
                  After my third year, I completed an internship at AB Logics, Bangalore, where I gained hands-on experience with RFID technology. These experiences have fueled my passion for technology and continue to shape my growth as a software engineer               </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="/techfest.jpg" alt="college logo" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  During my 7th semester, in the final year of college,
                  I had the incredible opportunity to be part of the Diamond Jubilee Celebration of our college,
                  a grand three-day event that highlighted the essence of innovation and progress.
                  One of the major attractions was Technovation, a cutting-edge tech fest where each department showcased its best projects.
                  I proudly represented the Electronics and Communication Engineering (ECE) department with my Smart Colony project, a vision for smarter, sustainable urban living powered by IoT.
                </p>
                <br />
                <div className="mt-4 text-gray-600 dark:text-gray-50">
                  What made this event truly unforgettable was the chance to present our work to some

                  of the most influential figures, including :
                  <ul className='list-disc'>
                    <li>Shri Mangubhai Patel, the Governor of Madhya Pradesh</li>
                    <li>Shri Inder Singh Parmar, the Technical Education Minister of Madhya Pradesh</li>
                    <li>Shri Rajendra Shukla, the Deputy Chief Minister of Madhya Pradesh</li>
                    <li>Dr. A. Sivathanu Pillai, the Founder of BrahMos Missiles</li>
                    <li>And several prestigious alumni of our college</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="/award.jpg" alt="Harry mentoring others" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Giving Back</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  On the final day, our project was honored with an award by our alumni, which not only boosted our spirits but also fueled my passion for technology and innovation. This experience stands as one of the most rewarding milestones of my college journey, marking the beginning of my journey toward transforming ideas into impactful solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}