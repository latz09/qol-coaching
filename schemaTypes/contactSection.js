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
      description: '5–40 characters',
      validation: (Rule) => [
        Rule.max(40).error('Too long — will break layout'),
        Rule.min(5).warning('This looks a bit short'),
      ],
    },
    {
      name: 'paragraphs',
      title: 'Description Paragraphs',
      type: 'array',
      of: [
        {
          type: 'text',
          validation: (Rule) => [
            Rule.max(200).error('Too long — split into a second paragraph'),
            Rule.min(40).warning('This looks a bit short'),
          ],
        },
      ],
      description:
        'First paragraph will be displayed bold — 40–200 characters each, max 3 paragraphs',
      validation: (Rule) => [
        Rule.max(3).warning('More than 3 paragraphs is too much above a contact form'),
      ],
    },
    {
      name: 'submitButtonText',
      title: 'Submit Button Text',
      type: 'string',
      description: '2–25 characters',
      validation: (Rule) => [
        Rule.max(25).error('Too long — will overflow the button'),
        Rule.min(2).warning('This looks a bit short'),
      ],
    },
  ],
}
