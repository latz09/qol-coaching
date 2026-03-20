import {
  HomeIcon,
  InfoOutlineIcon,
  BlockElementIcon,
  CogIcon,
  EnvelopeIcon,
  DocumentsIcon,
  UsersIcon,
  BlockContentIcon,
  HelpCircleIcon,
  ActivityIcon,
} from '@sanity/icons'

const singletonTypes = [
  'navigationSection',
  'heroSection',
  'introductionSection',

  'coachingServicesSection',
  'biofieldTuningSection',
  'aboutElizabethSection',
  'faqSection',
  'contactSection',
  'footerSection',
]

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Page Sections')
            .items([
              S.listItem()
                .title('Navigation')
                .icon(CogIcon)
                .child(
                  S.document().schemaType('navigationSection').documentId('navigationSection'),
                ),
              S.listItem()
                .title('Hero')
                .icon(HomeIcon)
                .child(S.document().schemaType('heroSection').documentId('heroSection')),
              S.listItem()
                .title('Introduction')
                .icon(BlockElementIcon)
                .child(
                  S.document()
                    .schemaType('introductionSection')
                    .documentId('introductionSection'),
                ),
             
              S.listItem()
                .title('Coaching Services & Booking')
                .icon(DocumentsIcon)
                .child(
                  S.document()
                    .schemaType('coachingServicesSection')
                    .documentId('coachingServicesSection'),
                ),
              S.listItem()
                .title('Biofield Tuning')
                .icon(ActivityIcon)
                .child(
                  S.document()
                    .schemaType('biofieldTuningSection')
                    .documentId('biofieldTuningSection'),
                ),
              S.listItem()
                .title('About Elizabeth')
                .icon(UsersIcon)
                .child(
                  S.document()
                    .schemaType('aboutElizabethSection')
                    .documentId('aboutElizabethSection'),
                ),
              S.listItem()
                .title('FAQ')
                .icon(HelpCircleIcon)
                .child(S.document().schemaType('faqSection').documentId('faqSection')),
              S.listItem()
                .title('Contact Form')
                .icon(EnvelopeIcon)
                .child(S.document().schemaType('contactSection').documentId('contactSection')),
              S.listItem()
                .title('Footer')
                .icon(BlockContentIcon)
                .child(S.document().schemaType('footerSection').documentId('footerSection')),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Form Submissions')
        .icon(EnvelopeIcon)
        .child(
          S.documentTypeList('submittedContactForm')
            .title('Form Submissions')
            .defaultOrdering([{field: 'sentAt', direction: 'desc'}]),
        ),
    ])

export const singletonActions = (input, context) => {
  if (singletonTypes.includes(context.schemaType)) {
    return input.filter(
      ({action}) => action && !['unpublish', 'delete', 'duplicate'].includes(action),
    )
  }
  return input
}

export const singletonNewDocument = (prev) =>
  prev.filter((item) => !singletonTypes.includes(item.templateId))
