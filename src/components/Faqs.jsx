"use client"

import Accordion from './Accordion';

export default function FAQSection() {
  return (
    <div className="py-12">
      <div className="mx-auto">
        <h2 className="text-4xl text-gray-700 light:text-gray-300 text-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion
          title="What's the main difference between Western and Korean color analysis?"
          id="difference"
        >
          Western color analysis typically uses four seasons (Spring, Summer,
          Autumn, Winter), while Korean systems often use sixteen or more
          subtypes. Korean methods tend to focus more on skin undertone and
          overall harmony, whereas Western methods emphasize contrast levels and
          hair color.
        </Accordion>

        <Accordion
          title="How does the Korean color analysis system work?"
          id="korean-system"
        >
          The Korean system usually divides colors into warm and cool tones,
          then further categorizes them based on brightness and chroma. It often
          uses terms like "Bright Spring" or "Mute Summer" to describe different
          color types. The analysis considers skin tone, hair color, and overall
          harmony to determine the best palette for an individual.
        </Accordion>

        <Accordion
          title="What are the four seasons in Western color analysis?"
          id="western-seasons"
        >
          The four seasons in Western color analysis are: 1. Spring: Warm and
          bright colors 2. Summer: Cool and soft colors 3. Autumn: Warm and
          muted colors 4. Winter: Cool and bright colors Each season is
          associated with specific characteristics in terms of skin tone, hair
          color, and eye color.
        </Accordion>

        <Accordion
          title="How accurate is personal color analysis?"
          id="accuracy"
        >
          The accuracy of personal color analysis can vary. Both Western and
          Korean methods rely on subjective assessments to some degree. However,
          when done by a trained professional, color analysis can provide
          valuable insights into which colors complement an individual's natural
          features best. It's important to remember that these are guidelines,
          not strict rules.
        </Accordion>

        <Accordion
          title="Can my personal color change over time?"
          id="change-over-time"
        >
          Yes, your personal color can change over time due to factors like
          aging, sun exposure, hair color changes, and overall health. Both
          Western and Korean systems acknowledge that periodic reassessment may
          be necessary. However, drastic changes are relatively rare, and your
          general color family often remains consistent.
        </Accordion>

        <Accordion
          title="Which method is better: Western or Korean?"
          id="which-better"
        >
          Neither method is inherently better; they each have their strengths.
          The Western method is more established and widely recognized globally,
          while the Korean method offers more nuanced categorization. The best
          method often depends on individual preferences, features, and the
          specific analyst's expertise. Some people find that a combination of
          both approaches yields the most comprehensive results.
        </Accordion>
      </div>
    </div>
  )
}
