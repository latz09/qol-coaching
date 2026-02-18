export default {
  name: 'footerSection',
  title: 'Footer',
  type: 'document',
  preview: {
    prepare() {
      return {title: 'Footer'}
    },
  },
  fields: [
    {
      name: 'logo',
      title: 'Footer Logo',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'e.g. "Woman Veteran owned and operated business"',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'string',
    },
  ],
}