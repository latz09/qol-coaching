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
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
    },

    {
      name: 'packages',
      title: 'Coaching Packages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Package Title', type: 'string'},
            {name: 'price', title: 'Price', type: 'string', description: 'e.g. "$300" or "$825"'},
            {
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{type: 'string'}],
              description: 'Checkmark bullet items',
            },
            {name: 'ctaText', title: 'Button Text', type: 'string'},
            {
              name: 'ctaLink',
              title: 'Button Link',
              type: 'url',
              description: 'Acuity scheduling URL',
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
