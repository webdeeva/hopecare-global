import React from 'react';
import Image from 'next/image';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#0a2540] py-24 px-6 md:px-12 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 mb-12 rounded-3xl overflow-hidden shadow-lg">
          <Image 
            src="/education/story-hero.png" 
            alt="Reflective imagery for Dr. Petrina Harrison's journey"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0a2540]/20" />
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="text-teal-bright uppercase tracking-[0.2em] text-xs font-bold mb-4">
             How It Began
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.05] text-white">
            Turning My Pain and Loss Into Purpose
          </h1>
          <div className="mt-6 h-px w-20 bg-gradient-to-r from-teal-bright to-green-bright" />
        </div>

        {/* Narrative Content */}
        <div className="prose prose-lg text-white/90">
          <p>As my parents' first child, I carried a heavy, personal burden. I went through repeated miscarriages, endometriosis, adenomyosis, obesity, and several surgeries. Years later, I was finally diagnosed with a condition called antiphospholipid syndrome, which helped explain why I kept losing my pregnancies. But that answer came only after years of grief and unanswered questions. I also carried the heartbreak of knowing I would not be able to give my parents their first grandchild, a painful reality I often endured alone.</p>
          <p>My journey started with loss and unanswered questions, but it eventually led me somewhere I never expected: ovarian cancer research, awareness, and advocacy.</p>
          <p>At 38 years old, with no children, my health reached a turning point. After looking closely at my medical history, my surgeon strongly recommended I have a hysterectomy and have my fallopian tubes removed to lower my risk of ovarian cancer. Research now indicates that many high-grade serous ovarian cancers, the most common and aggressive subtype, originate in the fallopian tubes. Removing both tubes substantially lowered my risk of ovarian cancer.</p>
        
          <p>Understanding my own risk, and learning that there's still no reliable routine test to screen for ovarian cancer, gave my pain a new purpose. I focused my doctoral research on how technology can empower healthcare providers and women to identify subtle symptoms and warning signs of ovarian cancer earlier and with greater precision.</p>
          <p>That work became part of my healing. I took my losses and my unanswered questions and turned them into the foundation of HopeCare Global, a nonprofit dedicated to raising awareness about ovarian cancer, sharing real evidence based education, and advocating for women.</p>
          <p>I can't change what I went through. But I can help make the path clearer, and easier, for the women who come after me.</p>
          <p><strong>This is how I turned personal pain into something bigger than myself, and turned loss into a legacy of advocacy.</strong></p>
        </div>
      </div>
    </main>
  );
}
