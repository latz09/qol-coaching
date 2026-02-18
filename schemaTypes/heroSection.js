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
      name: 'logo',
      title: 'Hero Logo (Large)',
      type: 'image',
      description: 'Full Q.O.L.C logo displayed prominently in the hero',
      options: {hotspot: true},
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
    },
    {
      name: 'credentials',
      title: 'Credentials Line',
      type: 'string',
      description: 'e.g. "Elizabeth Mann, MSPAS, MPH, PA-C"',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
 
  ],
}