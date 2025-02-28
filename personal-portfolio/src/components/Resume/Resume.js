import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 bg-opacity-75 rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-green-400 mb-8 border-b border-green-400 pb-4">
          Resume
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-green-400">
                Senior Developer
              </h3>
              <div className="text-green-300">Tech Company Inc.</div>
              <div className="text-green-300 italic">Jan 2020 - Present</div>
              <ul className="list-disc ml-5 mt-2 text-green-300">
                <li>Led development of a complex web application.</li>
                <li>Mentored junior developers.</li>
                <li>Implemented CI/CD pipelines.</li>
                <li>Collaborated with UX designers.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-400">
                Web Developer
              </h3>
              <div className="text-green-300">Digital Solutions LLC</div>
              <div className="text-green-300 italic">Jun 2017 - Dec 2019</div>
              <ul className="list-disc ml-5 mt-2 text-green-300">
                <li>Developed responsive websites for clients.</li>
                <li>Created and maintained RESTful APIs.</li>
                <li>Improved site performance and optimization.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-green-400">
                Master of Computer Science
              </h3>
              <div className="text-green-300">University Name</div>
              <div className="text-green-300 italic">2015 - 2017</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-400">
                Bachelor of Science in Computer Science
              </h3>
              <div className="text-green-300">University Name</div>
              <div className="text-green-300 italic">2011 - 2015</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-400 mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-green-300">
            <div>
              <h3 className="text-xl font-bold text-green-400">Frontend</h3>
              <ul className="list-disc ml-5 mt-2">
                <li>HTML, CSS, JavaScript</li>
                <li>React, Redux</li>
                <li>Tailwind CSS, SCSS</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-400">Backend</h3>
              <ul className="list-disc ml-5 mt-2">
                <li>Node.js, Express</li>
                <li>MongoDB, SQL</li>
                <li>RESTful APIs</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-8 text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-6 py-3 border border-green-400 rounded-full text-green-400 hover:bg-green-400 hover:text-black transition"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
