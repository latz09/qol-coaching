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
      description: '5–40 characters',
      validation: (Rule) => [
        Rule.max(40).error('Too long — will break layout'),
        Rule.min(5).warning('This looks a bit short'),
      ],
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
      of: [
        {
          type: 'text',
          validation: (Rule) => [
            Rule.max(400).error('Too long — split into a second paragraph'),
            Rule.min(60).warning('This looks a bit short'),
          ],
        },
      ],
      description: 'Each item is a separate paragraph — 60–400 characters, max 4 paragraphs',
      validation: (Rule) => [
        Rule.max(4).warning('More than 4 paragraphs may overwhelm this section'),
      ],
    },
    {
      name: 'credentials',
      title: 'Pertinent Credentials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'credential',
              title: 'Credential',
              type: 'string',
              description: '5–60 characters',
              validation: (Rule) => [
                Rule.max(60).error('Too long — will wrap awkwardly in the list'),
                Rule.min(5).warning('This looks a bit short'),
              ],
            },
            {
              name: 'year',
              title: 'Year/Range',
              type: 'string',
              description: 'e.g. "2008–present" — 4–20 characters',
              validation: (Rule) => [
                Rule.max(20).error('Too long — keep it to a year or range'),
                Rule.min(4).warning('This looks a bit short'),
              ],
            },
          ],
          preview: {
            select: {title: 'credential', subtitle: 'year'},
          },
        },
      ],
      description: 'Each credential — 5–60 characters, max 8 items',
      validation: (Rule) => [Rule.max(8).warning('More than 8 credentials gets hard to scan')],
    },
  ],
}
