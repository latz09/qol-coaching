export default {
  name: 'heroSection',
  title: 'Hero',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'Hero'}
    },
  },
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Full-width calming background image',
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: '10–60 characters',
      validation: (Rule) => [
        Rule.max(60).error('Too long — will break layout'),
        Rule.min(10).warning('This looks a bit short'),
      ],
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
      description: '20–100 characters',
      validation: (Rule) => [
        Rule.max(100).error('Too long — will break layout'),
        Rule.min(20).warning('This looks a bit short'),
      ],
    },
    {
      name: 'credentials',
      title: 'Credentials Line',
      type: 'string',
      description: 'e.g. "Elizabeth Mann, MSPAS, MPH, PA-C" — 5–60 characters',
      validation: (Rule) => [
        Rule.max(60).error('Too long — will wrap to a second line'),
        Rule.min(5).warning('This looks a bit short'),
      ],
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: '2–35 characters',
      validation: (Rule) => [
        Rule.max(35).error('Too long — will overflow the button'),
        Rule.min(2).warning('This looks a bit short'),
      ],
    },
    {
      name: 'ctaLink',
      title: 'CTA Booking Link',
      type: 'url',
      description: 'General Acuity scheduling page URL (opens in booking panel)',
      validation: (Rule) => Rule.uri({allowRelative: false, scheme: ['https']}),
    },
  ],
}
