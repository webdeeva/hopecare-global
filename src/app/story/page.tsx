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
          <p>As my parents’ only daughter, I carried a deeply personal burden—recurrent miscarriages, endometriosis, adenomyosis, obesity, and multiple surgeries. Years later, a diagnosis of antiphospholipid syndrome (APS) finally helped explain my pregnancy losses, but only after years of grief and unanswered questions. I also carried the heartbreak of knowing I would not be able to give my parents their first grandchild—a painful reality I often endured alone.</p>
          <p>At age 38, my health journey reached a critical juncture. After reviewing my complex clinical history, my gynecologic surgeon strongly recommended a hysterectomy and removing my fallopian tubes to reduce my risk of ovarian cancer.</p>
          <p>That recommendation led to a hysterectomy with opportunistic salpingectomy—the planned removal of my fallopian tubes during an already medically necessary pelvic procedure. I could not have fully understood the significance of that decision at the time. Research now indicates that many high-grade serous ovarian cancers originate in the fallopian tubes. Although salpingectomy does not eliminate ovarian cancer risk, it can provide an important risk-reduction strategy.</p>
          <p>Understanding my risk factors—and recognizing that ovarian cancer has no reliable routine screening test—gave my trauma a new direction. I focused my doctoral research on how clinical decision support systems can help healthcare professionals recognize subtle symptoms and risk factors earlier and with greater precision.</p>
          <p>That work became an essential part of my healing. I transformed my losses and unanswered questions into the foundation of HopeCare Global, a nonprofit dedicated to ovarian cancer awareness, evidence-based education, and advocacy.</p>
          <p>I cannot change the path I endured, but I can help create a clearer, more informed path for the women who come after me.</p>
          <p><em><strong>This is how I transformed personal pain into institutional purpose—and converted loss into a legacy of advocacy.</strong></em></p>
        </div>
      </div>
    </main>
  );
}
