export default function Resume() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header & Download */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Paul-Peter Arslan</h1>
            <p className="mt-2 text-lg text-gray-600">HCI Researcher · Embodied Interaction · Neurorehabilitation</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <a 
              href="/api/doc/resume_2026.pdf" 
              target="_blank"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>

        {/* Current Affiliation */}
        <section className="mb-12 bg-indigo-50 p-6 rounded-xl border border-indigo-100">
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">Current Position</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div>
              <h4 className="font-bold text-gray-900">Visiting Research Student</h4>
              <p className="text-indigo-800">Massachusetts Institute of Technology (MIT) — Media Lab</p>
            </div>
            <span className="text-sm text-indigo-600 font-medium mt-1 sm:mt-0">Current (4 months)</span>
          </div>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Working on the <strong>Tangible Co-Ideation</strong> project — designing embodied prompting interfaces for creative thinking with Large Language Models, in collaboration with Prof. Hiroshi Ishii&apos;s Tangible Media Group.
          </p>
          <div className="mt-3 space-y-1 text-sm text-gray-700">
            <p><strong>Coursework:</strong> 4.043 Design Studio: Interaction Intelligence — Teleabsence (Prof. Hiroshi Ishii), Design Intelligence (Prof. Marcelo Coelho)</p>
            <p><strong>Award:</strong> Winner of the Connect track at <strong>MIT Hard Mode: Hardware AI Hackathon</strong> (2026) with IPheromone</p>
          </div>
          <p className="mt-3">
            <a href="/api/doc/Tangible/tangible_co_ideation_submission.pdf" target="_blank" className="text-indigo-600 hover:underline text-sm">
              View Tangible Co-Ideation submission (DIS 2026) &rarr;
            </a>
          </p>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Education</h3>
          <div className="space-y-8">
            
            <div className="relative pl-4 border-l-2 border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Ph.D. — Interaction Design &amp; Neurorehabilitation</h4>
                  <p className="text-gray-600">Institute for Future Technologies / Neuroscience Institute Paris</p>
                  <p className="text-sm text-gray-500 mt-1">Supervisors: Dr. Xiao Xiao (Institute for Future Technologies / MIT), Dr. Pavel Lindberg (INSERM)</p>
                </div>
                <span className="text-sm font-medium text-indigo-600 whitespace-nowrap">2023 – Present</span>
              </div>
            </div>

            <div className="relative pl-4 border-l-2 border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Master Degree in Innovation, Research & Manufacturing</h4>
                  <p className="text-gray-600">IFT ESILV Leonard da Vinci Engineering School, Paris</p>
                  <p className="text-sm text-gray-500 mt-1">GPA: 3.2 / 4</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Relevant Coursework: Advanced Algorithms, Big Data Infrastructure, Deep Machine Learning, Computer Graphics, Soft and Active Matter.
                  </p>
                </div>
                <span className="text-sm font-medium text-gray-500 whitespace-nowrap">2021</span>
              </div>
            </div>

            <div className="relative pl-4 border-l-2 border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">International Exchange</h4>
                  <p className="text-gray-600">UQAC, Canada</p>
                  <p className="text-sm text-gray-500 mt-1">GPA: 3.96 / 4</p>
                  <p className="text-sm text-gray-500 mt-1">Focus: Web development, statistic computing, marketing.</p>
                </div>
                <span className="text-sm font-medium text-gray-500 whitespace-nowrap">Sept 2018 – Dec 2018</span>
              </div>
            </div>

          </div>
        </section>

        {/* Research Experience */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Research Experience</h3>
          <div className="space-y-8">
            
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-bold text-gray-900">Ph.D. Researcher</h4>
                <span className="text-sm text-gray-500">2023 – Present</span>
              </div>
              <p className="text-gray-700 italic mb-3">Institute for Future Technologies / Neuroscience Institute Paris</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
                <li><strong>HD-EMG & AI:</strong> Developed continuous proportional decoding of finger forces using 224-channel HD-EMG and CNN-LSTM architectures (R² &gt; 0.75).</li>
                <li><strong>ReTouche:</strong> Designed an AR piano learning system with embodied feedback; validated via comparative study (n=18) and autoethnography.</li>
                <li><strong>Rhythm Karaoke:</strong> Created a high-resolution metrics engine for fine motor timing precision using the Dextrain Manipulandum.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-bold text-gray-900">Research Engineer</h4>
                <span className="text-sm text-gray-500">Mar 2020 – Aug 2020</span>
              </div>
              <p className="text-gray-700 italic mb-3">Learning Planet Institute, Interdisciplinary Research Center, Paris</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
                <li>Developed a pedagogical concept to teach math to children through games.</li>
                <li>Created games with Unity for application in a connected gymnasium.</li>
                <li>Managed mobile application development.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Teaching Experience */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Teaching Experience</h3>
          <div className="space-y-6">
            
            <div>
              <h4 className="text-lg font-bold text-gray-900">Instructor for Master Students</h4>
              <ul className="mt-3 list-disc list-inside text-gray-600 space-y-2 text-sm">
                <li><strong>Web Development Course:</strong> Taught modern web technologies and frameworks.</li>
                <li><strong>AI Class with Bio-sensors:</strong> Led practical sessions on processing HD-EMG signals with Deep Learning.</li>
                <li><strong>Research Workshops:</strong> Mentored students on research methodologies and prototyping.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900">Chess Instructor</h4>
              <p className="text-sm text-gray-500 mb-2">LCE Chess Club (2007-2018)</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Certified by the French Federation (DIFF certificate).</li>
                <li>Instructed a senior class of 10 students.</li>
                <li>Elo rating: 1880.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Professional Experience</h3>
          <div className="space-y-8">
            
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-bold text-gray-900">Co-Founder & Developer</h4>
                <span className="text-sm text-gray-500">Sept 2020 – Aug 2021</span>
              </div>
              <p className="text-gray-700 italic mb-2">DEVO (Robotic Startup), Paris</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Created and developed a company focused on autonomous mobile robots (Visual SLAM).</li>
                <li>Developed front-end interface and back-end to manage a robot swarm.</li>
                <li>Produced commercial website and promotional video.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-bold text-gray-900">Electronic Engineer (Intern)</h4>
                <span className="text-sm text-gray-500">Jun 2019 – Jul 2019</span>
              </div>
              <p className="text-gray-700 italic mb-2">Usine.io - STATION F, Paris</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Coached 8 teams of 6 students for the IMT Artificial Intelligence Challenge.</li>
                <li>Fast prototyping with 3D printing, laser cutting, and electronics.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-bold text-gray-900">Developer & Project Manager</h4>
                <span className="text-sm text-gray-500">Jun 2018 – Aug 2018</span>
              </div>
              <p className="text-gray-700 italic mb-2">Instant Gaming, Barcelona</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Created a new swimming pool alarm system using Raspberry Pi, Electronics, and Machine Learning.</li>
                <li>Managed project timeline and communication with management.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Programming & Tech</h4>
              <div className="flex flex-wrap gap-2">
                {["Python (PyTorch, TensorFlow, scikit-learn)", "JavaScript/TypeScript (React, Next.js, Node.js)", "C/C++", "C#", "MATLAB", "R", "Arduino & Embedded Systems"].map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-sm font-medium text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Engineering & Design</h4>
              <div className="flex flex-wrap gap-2">
                {["Signal Processing & Neural Decoding", "Deep Learning (CNN, LSTM, Transformer)", "CAD & Rapid Prototyping", "Unity", "Git, Docker, Linux"].map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-sm font-medium text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Languages</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>French:</strong> Native</li>
                <li><strong>English:</strong> Fluent (academic writing &amp; presentations)</li>
                <li><strong>Spanish:</strong> Conversational</li>
                <li><strong>Lebanese:</strong> Comprehension</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership & Activities */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Leadership & Activities</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-900">Eagles, ESILV US Football Team (2017-2018)</h4>
              <p className="text-sm text-gray-600">Wide Receiver. University French Champion 2017.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Slide Session - Ski Association (2017-2019)</h4>
              <p className="text-sm text-gray-600">Organized travel for 150 students (Paris to Alps), managed logistics and security.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Sports</h4>
              <p className="text-sm text-gray-600">Rugby, Skiing, Swimming, Krav Maga (Blue belt, trained with Alain Formaggio).</p>
            </div>
          </div>
        </section>

        {/* Other Documents */}
        <section className="pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Documents</h3>
          <ul className="space-y-2">
            <li>
              <a href="/api/doc/Final_Master_Thesis_2022.pdf" target="_blank" className="text-indigo-600 hover:text-indigo-500 hover:underline flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13z" />
                </svg>
                Master Thesis (2022): Human-Computer Interactions for Learning Purposes
              </a>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
