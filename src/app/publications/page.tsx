export default function Publications() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Publications
        </h2>
        <p className="mt-3 text-base text-gray-500 mb-14">
          Peer-reviewed and in-progress work across embodied interaction,
          motor neuroscience, AI-augmented rehabilitation, and tangible interfaces.
        </p>

        <div className="space-y-12">
          {/* CHI 2026 — ReTouche (Accepted) */}
          <article className="border-b border-gray-100 pb-10">
            <div className="flex items-center gap-3 text-xs mb-3">
              <time className="text-gray-400">2026</time>
              <span className="text-gray-500 font-medium">
                ACM CHI 2026 &middot; Accepted
              </span>
            </div>
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              ReTouche: Embodied Representations for Self-Directed Piano
              Learning
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              <strong>Paul-Peter Arslan</strong> et al.
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Qualitative HCI &middot; Autoethnography &middot; Comparative
              Structured Observation (CSO).
            </p>
            <a
              href="/api/doc/Retouche/CHI2026_ReTouche.pdf"
              target="_blank"
              className="mt-3 inline-block text-sm text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
            >
              View manuscript
            </a>
          </article>

          {/* DIS 2026 — Tangible Co-Ideation */}
          <article className="border-b border-gray-100 pb-10">
            <div className="flex items-center gap-3 text-xs mb-3">
              <time className="text-gray-400">2026</time>
              <span className="text-gray-500 font-medium">
                ACM DIS 2026 SDC &middot; Finalist
              </span>
            </div>
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              Tangible Co-Ideation: Designing Embodied Prompting for Creative
              Thinking with Large Language Models
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Yuqing Lucy Li*, Quincy Kuang*,{" "}
              <strong>Paul-Peter Arslan</strong>*, Xiao Xiao, Hiroshi Ishii.
            </p>
            <p className="mt-1 text-sm text-gray-500">
              * Equal contribution. ACM Designing Interactive Systems 2026 Student Design Competition.
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Three families of tangible objects leverage embodiment to structure
              LLM prompting and mitigate information overload during creative
              ideation.
            </p>
            <a
              href="/api/doc/Tangible/tangible_co_ideation_submission.pdf"
              target="_blank"
              className="mt-3 inline-block text-sm text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
            >
              View submission
            </a>
          </article>

          {/* Rhythm Karaoke — Submitted to Scientific Reports */}
          <article className="border-b border-gray-100 pb-10">
            <div className="flex items-center gap-3 text-xs mb-3">
              <time className="text-gray-400">2025</time>
              <span className="text-gray-500 font-medium">
                Scientific Reports (Springer Nature) &middot; Submitted
              </span>
            </div>
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              A Novel Method for Rhythmic Imitation of Finger Movements and the
              Effects of Auditory Stimuli and Feedback
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              <strong>Paul-Peter Arslan</strong> et al.
            </p>
            <p className="mt-1 text-sm text-gray-500">
              A stroke-oriented extension is currently in preparation as part of
              the PhD thesis.
            </p>
            <a
              href="/api/doc/RhythmKaraoke/Rhythm Karaoke_22july2025.pdf"
              target="_blank"
              className="mt-3 inline-block text-sm text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
            >
              View manuscript
            </a>
          </article>

          {/* Tangible Prompting — UIST 2026 submitted */}
          <article className="border-b border-gray-100 pb-10">
            <div className="flex items-center gap-3 text-xs mb-3">
              <time className="text-gray-400">2026</time>
              <span className="text-gray-500 font-medium">
                ACM UIST 2026 &middot; Submitted (Demo accepted at ACM CHI 2026)
              </span>
            </div>
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              Tangible Prompting: A Physical Vocabulary for Navigating
              Conceptual Spaces in Human-AI Co-Ideation
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Yuqing Lucy Li*, Quincy Kuang*,{" "}
              <strong>Paul-Peter Arslan</strong>*, Xiao Xiao, Hiroshi Ishii.
            </p>
            <p className="mt-1 text-sm text-gray-500">* Equal contribution.</p>
          </article>

          {/* HD-EMG + AI */}
          <article className="border-b border-gray-100 pb-10">
            <div className="flex items-center gap-3 text-xs mb-3">
              <time className="text-gray-400">2026</time>
              <span className="text-gray-500 font-medium">
                Nature-family journal &middot; In preparation
              </span>
            </div>
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              Predicting Continuous Finger Forces from High-Density EMG with AI
              Regression Models
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              <strong>Paul-Peter Arslan</strong> et al.
            </p>
            <p className="mt-1 text-sm text-gray-500">
              224-channel HD-EMG, causal Transformer (FITLight) and GRU (MFTEventGRU) architectures for continuous finger-force decoding.
            </p>
          </article>

          {/* JNER — Rhythm Karaoke Stroke */}
          <article className="border-b border-gray-100 pb-10">
            <div className="flex items-center gap-3 text-xs mb-3">
              <time className="text-gray-400">2026</time>
              <span className="text-gray-500 font-medium">
                Journal of NeuroEngineering and Rehabilitation &middot; In preparation
              </span>
            </div>
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              Rhythmic Finger Tapping Performance in Stroke Survivors:
              Effects of Auditory Stimuli and Feedback
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              <strong>Paul-Peter Arslan</strong> et al.
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Extension of Rhythm Karaoke to stroke rehabilitation,
              measuring rhythmic finger tapping with the Dextrain Manipulandum.
            </p>
          </article>

          {/* Co-authored — Kinésithérapie Scientifique 2025 */}
          <article className="border-b border-gray-100 pb-10">
            <div className="flex items-center gap-3 text-xs mb-3">
              <time className="text-gray-400">2025</time>
              <span className="text-gray-500 font-medium">
                Kinésithérapie Scientifique &middot; Published
              </span>
            </div>
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              Mécanismes sensoriels de la récupération de la dextérité manuelle après AVC : protocole d&apos;une étude de cohorte prospective
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Dziezuk, E., <strong>Arslan, P.-P.</strong>, et al.
            </p>
          </article>

          {/* Co-authored — IEEE Trans Haptics under review */}
          <article className="border-b border-gray-100 pb-10">
            <div className="flex items-center gap-3 text-xs mb-3">
              <time className="text-gray-400">2026</time>
              <span className="text-gray-500 font-medium">
                IEEE Transactions on Haptics &middot; Under review
              </span>
            </div>
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              A novel haptic stimulation device to improve finger movements: a validation and reliability study in healthy subjects
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Dziezuk, E., Badr, L., <strong>Arslan, P.-P.</strong>, et al.
            </p>
            <p className="mt-1 text-sm text-gray-500">Submitted Feb. 2026.</p>
          </article>

          {/* Co-authored — Motor Unit Coherence in prep */}
          <article className="pb-10">
            <div className="flex items-center gap-3 text-xs mb-3">
              <time className="text-gray-400">2026</time>
              <span className="text-gray-500 font-medium">In preparation</span>
            </div>
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              Motor Unit Coherence and Discharge Behavior During Single-Finger Isometric Contractions After Stroke
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Duan, Z., <strong>Arslan, P.-P.</strong>, Plantin, J., Lindberg, P. G., Wang, R.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
