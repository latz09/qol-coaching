export default {
  name: 'introductionSection',
  title: 'Introduction Section',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'Introduction Section'}
    },
  },
  fields: [
    {
      name: 'heading',
      title: 'Heading',
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
      rows: 4,
      description: '60–250 characters — displayed larger, keep it punchy',
      validation: (Rule) => [
        Rule.max(250).error('Too long — this is displayed larger, keep it punchy'),
        Rule.min(60).warning('This looks a bit short'),
      ],
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'text',
          rows: 7,
          validation: (Rule) => [
            Rule.max(600).warning('Getting long — consider trimming, but this will still publish'),
            Rule.min(40).warning('This looks a bit short — but will still publish'),
          ],
        },
      ],
      description:
        'Each item is a separate question/answer block. Formatting tips: _wrap in underscores_ = italic | *wrap in asterisks* = bold | *_wrap in both_* = bold & italic. Example: "Are you a *medical provider* feeling _burnt out_? *_You are not alone._*"',
      validation: (Rule) => [Rule.max(4).warning('More than 4 questions may feel overwhelming')],
    },
    {
      name: 'inclusivityLine',
      title: 'Inclusivity Statement',
      type: 'string',
      description:
        'e.g. "All genders, ethnicities, and belief systems welcome." — 10–80 characters',
      validation: (Rule) => [
        Rule.max(80).error('Too long — should be a single short line'),
        Rule.min(10).warning('This looks a bit short'),
      ],
    },
  ],
}
