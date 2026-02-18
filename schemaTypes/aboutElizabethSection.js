export default {
  name: 'aboutElizabethSection',
  title: 'About Elizabeth',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'About Elizabeth'}
    },
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'headshot',
      title: 'Headshot Photo',
      type: 'image',
      options: {hotspot: true},
      description: 'Optional — design accommodates adding this later',
    },
    {
      name: 'paragraphs',
      title: 'Bio Paragraphs',
      type: 'array',
      of: [{type: 'text'}],
      description: 'Each item is a separate paragraph',
    },
    {
      name: 'credentials',
      title: 'Pertinent Credentials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'credential', title: 'Credential', type: 'string'},
            {name: 'year', title: 'Year/Range', type: 'string', description: 'e.g. "2008–present"'},
          ],
          preview: {
            select: {title: 'credential', subtitle: 'year'},
          },
        },
      ],
    },
  ],
}