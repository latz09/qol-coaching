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
    },
    {
      name: 'paragraphs',
      title: 'Body Paragraphs',
      type: 'array',
      of: [{type: 'text'}],
      description: 'Each item is a separate paragraph',
    },
    {
      name: 'youtubeVideos',
      title: 'YouTube Video URLs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Video Title', type: 'string'},
            {name: 'url', title: 'YouTube URL', type: 'url'},
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
    },
    {
      name: 'sessionSubheading',
      title: 'Session Subheading',
      type: 'text',
      rows: 3,
    },
    {
      name: 'sessionBullets',
      title: 'Session Bullet Points',
      type: 'array',
      of: [{type: 'string'}],
    },

    {
      name: 'packages',
      title: 'Biofield Tuning Packages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Package Title', type: 'string'},
            {name: 'price', title: 'Price', type: 'string'},
            {
              name: 'ctaText',
              title: 'Button Text',
              type: 'string',
            },
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
  ],
}
