export default {
  name: 'coachingServicesSection',
  title: 'Coaching Services & Booking',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'Coaching Services & Booking'}
    },
  },
  fields: [
    {
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: '5–50 characters',
      validation: (Rule) => [
        Rule.max(50).error('Too long — will break layout'),
        Rule.min(5).warning('This looks a bit short'),
      ],
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
      description: '30–150 characters — should be a single sentence',
      validation: (Rule) => [
        Rule.max(150).error('Too long — should be one sentence'),
        Rule.min(30).warning('This looks a bit short'),
      ],
    },
    {
      name: 'packages',
      title: 'Coaching Packages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Package Title',
              type: 'string',
              description: '10–50 characters',
              validation: (Rule) => [
                Rule.max(50).error('Too long — will break the card header'),
                Rule.min(10).warning('This looks a bit short'),
              ],
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'e.g. "$300" or "$825" — 1–10 characters',
              validation: (Rule) => [
                Rule.max(10).error('Too long — keep it to the price only'),
                Rule.min(1).warning('Price is empty'),
              ],
            },
            {
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [
                {
                  type: 'string',
                  validation: (Rule) => [
                    Rule.max(90).error('Too long — should be one concise idea per bullet'),
                    Rule.min(10).warning('This looks a bit short'),
                  ],
                },
              ],
              description: 'Checkmark bullet items — 10–90 characters each, max 7 bullets',
              validation: (Rule) => [Rule.max(7).warning('More than 7 bullets gets hard to scan')],
            },
            {
              name: 'ctaText',
              title: 'Button Text',
              type: 'string',
              description: '5–35 characters',
              validation: (Rule) => [
                Rule.max(35).error('Too long — will overflow the button'),
                Rule.min(5).warning('This looks a bit short'),
              ],
            },
            {
              name: 'ctaLink',
              title: 'Button Link',
              type: 'url',
              description: 'Acuity scheduling URL',
              validation: (Rule) => Rule.uri({allowRelative: false, scheme: ['https']}),
            },
          ],
          preview: {
            select: {title: 'title', subtitle: 'price'},
          },
        },
      ],
    },
    {
      name: 'image',
      title: 'Section Image',
      type: 'image',
      options: {hotspot: true},
    },
  ],
}
