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
      description: '5–40 characters',
      validation: (Rule) => [
        Rule.max(40).error('Too long — will break layout'),
        Rule.min(5).warning('This looks a bit short'),
      ],
    },
    {
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              description: '15–100 characters',
              validation: (Rule) => [
                Rule.max(100).error('Too long — should fit on 1–2 lines in the accordion'),
                Rule.min(15).warning('This looks a bit short'),
              ],
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 4,
              description: '20–400 characters',
              validation: (Rule) => [
                Rule.max(400).error('Too long — consider splitting into multiple FAQs'),
                Rule.min(20).warning('This looks a bit short'),
              ],
            },
          ],
          preview: {
            select: {title: 'question'},
          },
        },
      ],
      description: 'Max 12 FAQ items recommended',
      validation: (Rule) => [
        Rule.max(12).warning('More than 12 FAQs may overwhelm visitors — consider trimming'),
      ],
    },
  ],
}
