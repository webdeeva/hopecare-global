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

        {/* Updated Header Style to match section headers */}
        <div className="mb-10">
          <div className="text-teal-bright uppercase tracking-[0.2em] text-xs font-bold mb-4">
             How It Began
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.05] text-white">
            Turning My Pain and Loss Into Purpose
          </h1>
          <div className="mt-6 h-px w-20 bg-gradient-to-r from-teal-bright to-green-bright" />
        </div>

        <div className="prose prose-lg text-white/90">
          <p>As the first daughter, I carried a deeply personal burden from a young age—recurrent miscarriages, endometriosis, adenomyosis, obesity, and multiple surgeries. Much later, a diagnosis of antiphospholipid syndrome (APS) finally helped explain the pregnancy losses I had endured, but that understanding came only after years of grief and unanswered questions.</p>
          <p>As the first daughter of my parents, I also carried the heartbreak of knowing that I would not be able to give my mother and father their first grandchild. It was a painful reality that I often felt I had to carry alone.</p>
          <p>At age 38, my health journey reached a critical juncture. My gynecological surgeon, evaluating my complex clinical history, underscored the urgency: <em>&ldquo;Given your risk factors, I strongly recommend a hysterectomy and removing your fallopian tubes to reduce your risk of ovarian cancer.&rdquo;</em> This imperative led to a hysterectomy with opportunistic salpingectomy—the surgical removal of my fallopian tubes during an already necessary pelvic procedure. At the time, I could not have fully grasped the significance of that decision. Emerging research now identifies the fallopian tubes as a primary site of origin for many ovarian malignancies; while salpingectomy does not eliminate risk entirely, it provides a crucial risk-reduction strategy.</p>
          <p>Knowing my personal risk factors—and understanding that ovarian cancer often progresses without the benefit of a reliable, routine screening test—gave my trauma a new, constructive direction. I chose to channel my doctoral research into ovarian cancer, specifically investigating how clinical decision support (CDS) systems can empower healthcare professionals to identify subtle symptoms and risk factors with greater precision and alacrity.</p>
          <p>That work became more than an academic endeavor; it became an integral part of my healing.</p>
          <p>I transformed my losses, my unanswered questions, and the burden I once carried in isolation into the foundation of HopeCare Global—a nonprofit organization dedicated to ovarian cancer awareness, evidence-based education, and advocacy, empowering women to recognize when their bodies are signaling distress.</p>
          <p>My opportunistic salpingectomy may have served as a vital intervention. Now, I strive to ensure my experience serves as a protective barrier for others. I cannot retroactively alter the path I endured, but I am committed to carving a clearer, more informed trajectory for those who come after me.</p>
          <p><em><strong>This is how I transformed personal pain into institutional purpose—and converted loss into a legacy of advocacy.</strong></em></p>
        </div>
      </div>
    </main>
  );
}
