import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero with portrait */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            {/* Photo */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="/Moi.jpg"
                alt="Paul-Peter Arslan"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Bio */}
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">
                About
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                Paul-Peter Arslan
              </h1>
              <p className="mt-2 text-base text-gray-500">
                HCI Researcher &middot; Embodied Interaction &middot; Neurorehabilitation
              </p>

              <div className="mt-8 space-y-5 text-[15px] leading-7 text-gray-700">
                <p>
                  I don&apos;t believe in talent. I believe in conditions,
                  the right environment, the right feedback, the right moment
                  of trust. My work begins from the conviction that anyone can
                  reach any goal if they are given the conditions to grow. That
                  conviction is not abstract for me. It is what drives every
                  system I design.
                </p>

                <p>
                  It started with education. My first project, Second Self, was
                  an augmented mirror that turned the body into a learning
                  interface. Modules for sign language, dance, music, each
                  designed to give learners immediate, embodied feedback. I
                  wanted to show people something they didn&apos;t yet know
                  about themselves: that they were capable.
                </p>

                <p>
                  When I decided to pursue a PhD, I built my own research topic
                  around that same idea, using technology to make learning
                  visible. But funding a PhD in France is not straightforward.
                  After contacting over a hundred companies and institutions, I
                  found my way in: not through education, but through
                  rehabilitation. In French, the words tell the story
                  themselves. <em>Éducation</em> and{" "}
                  <em>rééducation</em>. One teaches you to
                  move. The other helps you move again. For me, the mission is
                  the same. If I can design an interaction that makes someone
                  believe they can recover, that they can play again, tap
                  again, feel agency in their own body, then that is the most
                  meaningful work I can imagine.
                </p>

                <p>
                  My PhD at IFT lives at this junction. I built
                  ReTouche, an augmented reality piano system where embodied
                  representations guide learners without replacing their
                  judgment. I created Rhythm Karaoke, a timing engine that
                  measures fine motor precision through musical imitation, and
                  is now being extended toward stroke recovery. I developed deep
                  learning pipelines that decode continuous finger forces from
                  224-channel HD-EMG arrays, turning invisible neural signals
                  into something a clinician and a patient can read together.
                </p>

                <p>
                  At the MIT Media Lab, working in Prof. Hiroshi Ishii&apos;s
                  Tangible Media Group, I explored how physical objects can
                  restructure the way we think with AI. Tangible Co-Ideation
                  moves prompting out of the chatbox and into the hands,
                  making creative collaboration spatial, tactile, and deeply
                  human.
                </p>

                <p>
                  Across all of this, I hold one belief: somewhere there exists
                  a perfect interaction for each of us, one that meets us
                  exactly where we are and gently shows us what we can become.
                  That is what I want to build. It is why I am an HCI
                  researcher at heart, despite a subject grounded in
                  neuroscience and health. The body is not just data. It is
                  where we experience possibility.
                </p>

                <p>
                  I see artificial intelligence as a partner in this search. Not
                  AI that replaces human effort, but AI that amplifies human
                  perception, models that reveal patterns we cannot see, that
                  adapt in real time to the person in front of them, that make
                  the feedback loop between intention and sensation fast enough
                  to feel like intuition. The future I work toward is one where
                  technology is so attuned to the learner, the patient, the
                  creator, that growth feels less like effort and more like
                  discovery.
                </p>
              </div>

              {/* Links */}
              <div className="mt-10 flex flex-wrap gap-6 text-sm">
                <Link
                  href="/resume"
                  className="font-medium text-gray-950 underline decoration-gray-300 underline-offset-4 transition hover:decoration-gray-950"
                >
                  Resume
                </Link>
                <Link
                  href="/publications"
                  className="text-gray-600 transition hover:text-gray-950"
                >
                  Publications
                </Link>
                <a
                  href="https://github.com/Polpii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition hover:text-gray-950"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/paul-peter-arslan-6442892a1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition hover:text-gray-950"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="border-t border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-sm font-medium uppercase tracking-widest text-gray-400">
            Collaborations &amp; Affiliations
          </h2>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600">
            <span>MIT Media Lab</span>
            <span>Sorbonne University</span>
            <span>Institute for Future Technologies IFT</span>
            <span>Institute of Psychiatry and Neuroscience of Paris | INSERM IPNP</span>
            <span>Paris Brain Institute research teams</span>
            <span>KTH Royal Institute of Technology, Sweden</span>
            <span>University of Oxford</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
          <h2 className="text-sm font-medium uppercase tracking-widest text-gray-400">
            Get in touch
          </h2>
          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <p>
              <a href="mailto:paulpeterarslan@gmail.com" className="hover:text-gray-950 transition">
                paulpeterarslan@gmail.com
              </a>
            </p>
            <p>
              <a href="mailto:paul-peter.arslan@devinci.fr" className="hover:text-gray-950 transition">
                paul-peter.arslan@devinci.fr
              </a>
            </p>
            <p>
              <a href="mailto:polpii97@mit.edu" className="hover:text-gray-950 transition">
                polpii97@mit.edu
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
