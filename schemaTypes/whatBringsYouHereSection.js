export default {
  name: 'whatBringsYouHereSection',
  title: 'What Brings You Here',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'What Brings You Here'}
    },
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Section Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'questions',
      title: 'Hook Questions',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Bullet questions that resonate with the target audience',
    },
  
  ],
}