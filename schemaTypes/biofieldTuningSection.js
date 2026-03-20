export default {
  name: 'biofieldTuningSection',
  title: 'Biofield Tuning',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'Biofield Tuning'}
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
      name: 'paragraphs',
      title: 'Body Paragraphs',
      type: 'array',
      of: [
        {
          type: 'text',
          validation: (Rule) => [
            Rule.max(300).error('Too long — split into a second paragraph'),
            Rule.min(80).warning('This looks a bit short'),
          ],
        },
      ],
      description: 'Each item is a separate paragraph — 80–300 characters, max 3 paragraphs',
      validation: (Rule) => [
        Rule.max(3).warning('More than 3 paragraphs may be too much for this section'),
      ],
    },
    {
      name: 'youtubeVideos',
      title: 'YouTube Video URLs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Video Title',
              type: 'string',
              description: '5–60 characters',
              validation: (Rule) => [
                Rule.max(60).error('Too long — will break the tab label'),
                Rule.min(5).warning('This looks a bit short'),
              ],
            },
            {
              name: 'url',
              title: 'YouTube URL',
              type: 'url',
              validation: (Rule) => Rule.uri({allowRelative: false, scheme: ['https']}),
            },
          ],
          preview: {
            select: {title: 'title', subtitle: 'url'},
          },
        },
      ],
    },
    {
      name: 'sessionHeading',
      title: 'Session Heading',
      type: 'string',
      description: '5–40 characters',
      validation: (Rule) => [
        Rule.max(40).error('Too long — will break layout'),
        Rule.min(5).warning('This looks a bit short'),
      ],
    },
    {
      name: 'sessionSubheading',
      title: 'Session Subheading',
      type: 'text',
      rows: 3,
      description: "80–350 characters — Elizabeth's personal context paragraph",
      validation: (Rule) => [
        Rule.max(350).error('Too long — consider splitting into two paragraphs'),
        Rule.min(80).warning('This looks a bit short'),
      ],
    },
    {
      name: 'sessionBullets',
      title: 'Session Bullet Points',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (Rule) => [
            Rule.max(80).error('Too long — keep each bullet to one concise idea'),
            Rule.min(10).warning('This looks a bit short'),
          ],
        },
      ],
      description: '10–80 characters each, max 6 bullets',
      validation: (Rule) => [Rule.max(6).warning('More than 6 bullets gets hard to scan')],
    },
    {
      name: 'packages',
      title: 'Biofield Tuning Packages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Package Title',
              type: 'string',
              description: '5–40 characters',
              validation: (Rule) => [
                Rule.max(40).error('Too long — will break the card header'),
                Rule.min(5).warning('This looks a bit short'),
              ],
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'e.g. "$150" or "$330" — 1–10 characters',
              validation: (Rule) => [
                Rule.max(10).error('Too long — keep it to the price only'),
                Rule.min(1).warning('Price is empty'),
              ],
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
  ],
}
