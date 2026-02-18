export default {
  name: 'contactSection',
  title: 'Contact Form',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'Contact / Questions'}
    },
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'paragraphs',
      title: 'Description Paragraphs',
      type: 'array',
      of: [{type: 'text'}],
      description: 'First paragraph will be displayed bold. Each item is a separate paragraph.',
    },
    {
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
    },
  ],
}