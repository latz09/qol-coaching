export default {
  name: 'navigationSection',
  title: 'Navigation',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'Navigation'}
    },
  },
  fields: [
    {
      name: 'logoIcon',
      title: 'Nav Logo Icon (Small)',
      type: 'image',
      description: 'Small Q.O.L.C icon used in the sticky nav bar',
      options: {hotspot: true},
    },
    {
      name: 'mobileMenuLogo',
      title: 'Mobile Menu Logo',
      type: 'image',
      description: 'Logo displayed in the mobile slideout menu',
      options: {hotspot: true},
    },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      description: 'Anchor links that scroll to sections on the page',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Label', type: 'string'},
            {
              name: 'anchor',
              title: 'Anchor ID',
              type: 'string',
              description: 'e.g. "about", "coaching", "faq" — no # symbol',
              readOnly: true,
            },
          ],
          preview: {
            select: {title: 'label', subtitle: 'anchor'},
            prepare({title, subtitle}) {
              return {title, subtitle: `#${subtitle}`}
            },
          },
        },
      ],
    },
  ],
}
