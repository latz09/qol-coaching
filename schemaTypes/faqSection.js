export default {
  name: 'faqSection',
  title: 'FAQ',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'Frequently Asked Questions'}
    },
  },
  fields: [
    {
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    },
    {
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', title: 'Question', type: 'string'},
            {name: 'answer', title: 'Answer', type: 'text', rows: 4},
          ],
          preview: {
            select: {title: 'question'},
          },
        },
      ],
    },
  ],
}