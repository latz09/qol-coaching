export default {
  name: 'submittedContactForm',
  title: 'Form Submission',
  type: 'document',
  readOnly: true,
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'phoneNumber', title: 'Phone', type: 'string'},
    {name: 'message', title: 'Message', type: 'text'},
    {
      name: 'sentAt',
      title: 'Submitted At',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      date: 'sentAt',
    },
    prepare({title, subtitle, date}) {
      return {
        title: title || 'No name',
        subtitle: `${subtitle || ''} — ${date ? new Date(date).toLocaleDateString() : ''}`,
      }
    },
  },
}