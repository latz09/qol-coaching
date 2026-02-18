export default {
  name: 'aboutCoachingSection',
  title: 'About QoL Coaching',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'About QoL Coaching'}
    },
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 4,
      description: 'First large paragraph',
    },
    {
      name: 'paragraphs',
      title: 'Body Paragraphs',
      type: 'array',
     
      of: [{type: 'text', rows: 5}],
      description: 'Each item is a separate paragraph',
    },
    {
      name: 'inclusivityLine',
      title: 'Inclusivity Statement',
      type: 'string',
      description: 'e.g. "All genders, ethnicities, and belief systems welcome."',
    },
  ],
}