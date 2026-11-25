import Link from "next/link";

const linkClass = "text-indigo-600 hover:underline";

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-sm font-medium text-gray-700">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        {/* Header & Download */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Paul-Peter Arslan</h1>
            <p className="mt-2 text-lg text-gray-600">HCI Researcher · Human-AI Interaction · Simulation of AI Agents</p>
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

        {/* Current position */}
        <section className="mb-12 bg-indigo-50 p-6 rounded-xl border border-indigo-100">
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">Current Position</h3>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div>
              <h4 className="font-bold text-gray-900">Research Engineer</h4>
              <p className="text-indigo-800">Institute for Future Technologies (IFT)</p>
            </div>
            <span className="text-sm text-indigo-600 font-medium mt-1 sm:mt-0">May 2026 – Present</span>
          </div>
          <p className="mt-3 text-gray-700 text-sm leading-relaxed">
            Simulations and pre-registered experiments on how LLM agents and learning agents behave when they work together.
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
            <li>
              <Link href="/projects/persistent-partners" className={linkClass}><strong>Persistent Partners</strong></Link> (first author):
              keeping learning pricing agents matched with the same partner raises prices, even when they cannot punish each other. arXiv preprint, under review.
            </li>
            <li>
              <Link href="/projects/faultline" className={linkClass}><strong>FaultLine</strong></Link> (first author):
              in a six-agent LLM pipeline, the LLM auditor repeats the conclusions it is given instead of checking them. Pre-registered; arXiv preprint, under review.
            </li>
            <li>
              <Link href="/projects/policy-town" className={linkClass}><strong>PolicyTown</strong></Link> (first author):
              a simulator of a nine-agent LLM triage pipeline, with a live dashboard; how much the auditor can review, not how many agents there are, decides whether bias is caught. Preprint.
            </li>
            <li>
              <strong>Self-improvement loops:</strong> two pre-registered studies of when LLMs trained on their own answers lock in their mistakes, and how little ground truth it takes to get them out. In preparation.
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Education</h3>
          <div className="space-y-8">

            <div className="relative pl-4 border-l-2 border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Ph.D. in Computer Science: Human-AI Interaction &amp; Behavioral Modeling</h4>
                  <p className="text-gray-600">Institute for Future Technologies / Neuroscience Institute Paris</p>
                  <p className="text-sm text-gray-500 mt-1">Supervisors: Dr. Xiao Xiao (Institute for Future Technologies / MIT), Dr. Pavel Lindberg (INSERM)</p>
                </div>
                <span className="text-sm font-medium text-indigo-600 whitespace-nowrap">2023 – 2026</span>
              </div>
            </div>

            <div className="relative pl-4 border-l-2 border-gray-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Master Degree in Innovation, Research & Manufacturing</h4>
                  <p className="text-gray-600">IFT ESILV Leonard da Vinci Engineering School</p>
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
                <h4 className="text-lg font-bold text-gray-900">Visiting Research Student</h4>
                <span className="text-sm text-gray-500">Until May 2026</span>
              </div>
              <p className="text-gray-700 italic mb-3">MIT Media Lab, Tangible Media Group</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
                <li>
                  <Link href="/projects/tangible-co-ideation" className={linkClass}><strong>Tangible Prompting / Co-Ideation</strong></Link> (co-first author, with Prof. Hiroshi Ishii):
                  physical objects to steer an LLM during brainstorming. Figurines stand for AI experts, one object finds related research, and tokens set the goal. A user study with 16 pairs compared it with a screen-only version. Demo Award at ACM CHI 2026; ACM DIS 2026 finalist; full paper under review at ACM CHI 2027.
                </li>
                <li>
                  <Link href="/projects/light-language" className={linkClass}><strong>Light Language Objects</strong></Link> (with Prof. Marcelo Coelho):
                  AI lanterns that listen to speech but answer only with light, and a tool that lets people build their own visual vocabulary. NeurIPS 2026 Creative AI Track.
                </li>
                <li>
                  <Link href="/projects/ipheromone" className={linkClass}><strong>IPheromone</strong></Link> (team project):
                  wearable device where each person&apos;s LLM agent learns about them and talks with other agents to find good matches. Winner, Connect track, MIT Hard Mode Hardware AI Hackathon 2026.
                </li>
                <li>
                  <strong>Coursework:</strong> 4.043 Design Studio: Interaction Intelligence (Teleabsence, Prof. Hiroshi Ishii); Design Intelligence (Prof. Marcelo Coelho).
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-bold text-gray-900">Ph.D. Researcher</h4>
                <span className="text-sm text-gray-500">2023 – 2026</span>
              </div>
              <p className="text-gray-700 italic mb-3">Institute for Future Technologies / Neuroscience Institute Paris</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm leading-relaxed">
                <li>
                  <Link href="/projects/retouche" className={linkClass}><strong>ReTouche</strong></Link> (first author, ACM CHI 2026):
                  AI turns piano tutorial videos into guidance projected onto a self-playing piano. Evaluated with a comparative study, a long-term self-study and expert interviews.
                </li>
                <li>
                  <Link href="/projects/rhythm-karaoke" className={linkClass}><strong>Rhythm Karaoke</strong></Link> (first author, Scientific Reports 2026):
                  a rhythm imitation task with millisecond timing, measuring how melody, lyrics and feedback change precision and experience. Extension to stroke survivors submitted to Scientific Reports.
                </li>
                <li>
                  <Link href="/projects/hd-emg-ai" className={linkClass}><strong>Predicting finger forces from muscle signals</strong></Link> (first author):
                  Transformer and GRU models that predict finger forces in real time from 224-channel HD-EMG, tested on new participants. Submitted to IEEE TNSRE.
                </li>
                <li>2nd-author contributions: TMS-based motor mapping, haptic feedback prototypes, embedded firmware, and front-end interfaces for collaborator studies.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-bold text-gray-900">Research Engineer</h4>
                <span className="text-sm text-gray-500">Mar 2020 – Aug 2020</span>
              </div>
              <p className="text-gray-700 italic mb-3">Learning Planet Institute, Interdisciplinary Research Center</p>
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
                <li>Certified by the French Chess Federation (DIFF certificate).</li>
                <li>Instructed a senior class of 10 students.</li>
                <li>FIDE Elo rating: 1880 (World Chess Federation).</li>
                <li>2nd place, PACA Open; 1st place, National IV Team Competition.</li>
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
              <p className="text-gray-700 italic mb-2">DEVO (Robotic Startup)</p>
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
              <p className="text-gray-700 italic mb-2">Usine.io - STATION F</p>
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
              <p className="text-gray-700 italic mb-2">Instant Gaming</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Created a new swimming pool alarm system using Raspberry Pi, Electronics, and Machine Learning.</li>
                <li>Managed project timeline and communication with management.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-bold text-gray-900">Volunteer, Sales Assistant</h4>
                <span className="text-sm text-gray-500">Jul 2018</span>
              </div>
              <p className="text-gray-700 italic mb-2">Sue Ryder (charity shop)</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Worked register (cash management, customer interaction).</li>
                <li>Collected and prepared donations for the shop.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillGroup
              title="Research Methods"
              skills={["Designing and running user studies", "Comparing interface versions", "Interviews & focus groups", "Quantitative & qualitative analysis", "Pre-registered experiments (OSF)", "Statistics (Python, R, MATLAB)"]}
            />
            <SkillGroup
              title="Simulation & AI"
              skills={["Multi-agent LLM simulators", "LLM evaluation & auditing", "Multi-agent reinforcement learning", "Fine-tuning (LoRA, GRPO)", "Retrieval-Augmented Generation (RAG)", "PyTorch", "Transformer, GRU, LSTM", "Signal processing & real-time inference"]}
            />
            <SkillGroup
              title="Prototyping & Software"
              skills={["Python", "TypeScript / JavaScript (React, Next.js, Node.js)", "Interactive dashboards", "C#", "Unity", "Projection AR", "Tangible interfaces", "Arduino, Raspberry Pi, embedded firmware", "CAD & rapid prototyping", "Git, Docker, Linux"]}
            />
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Languages</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>French:</strong> Native</li>
                <li><strong>English:</strong> Fluent (academic writing &amp; presentations)</li>
                <li><strong>Spanish:</strong> Conversational</li>
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
              <p className="text-sm text-gray-600">Wide Receiver. University French Champion 2017 (US Football Association).</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Sports</h4>
              <p className="text-sm text-gray-600">Rugby, Skiing, Swimming, Krav Maga.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Music</h4>
              <p className="text-sm text-gray-600">Composition with FL Studio (Fruity Loops).</p>
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
