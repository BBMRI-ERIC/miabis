import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'MIABIS',
    description: 'Minimum Information About BIobank data Sharing',
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: true,
    base: process.env.DOCS_BASE || "",
    themeConfig: {
    logo: {src: '/favicon.ico', width: 24, height: 24},
    nav: [
      {text: 'About', link: '/readme'},
      {
        text: 'Publications', items: [
          {
            text: 'MIABIS Core',
            link: 'https://www.liebertpub.com/doi/abs/10.1089/bio.2015.0070',
          },
          {
            text: 'MIABIS Sample and Sample Donor',
            link: 'https://www.liebertpub.com/doi/10.1089/bio.2019.0129'
          },
          {
            text: 'MIABIS Core v3',
            link: 'https://www.liebertpub.com/doi/full/10.1089/bio.2023.0074'
          }
        ]
      },
      {text: 'BBMRI-ERIC', link: 'https://www.bbmri-eric.eu/'}],
    sidebar: [
      {text: 'About', link: '/readme'},
      {text: 'Core', collapsed: false,items: [
          {text: 'About', link: '/00Core/readme'},
          {text: 'V3', collapsed: false, items: [
              {text: 'Network', link: '/00Core/V3/data-describing-network'},
              {text: 'Biobank', link: '/00Core/V3/data-describing-biobank'},
              {text: 'Collection', link: '/00Core/V3/data-describing-collection'},
              {text: 'Research Resource', link: '/00Core/V3/data-describing-researchresource'}
            ]},
          {
            text: 'V2',collapsed: true, items: [
                  {text: 'Study', link: '/00Core/V2/data-describing-study'},
                  {text: 'Biobank', link: '/00Core/V2/data-describing-biobank'},
                  {text: 'Collection', link: '/00Core/V2/data-describing-samplecollection'},
                  {text: 'Database Implementation', link: '/00Core/V3/database-implementation'}
                ]
          }
        ]},
      {
        text: 'Components',
        collapsed: false,
        items: [
          {text: 'Individual', items: [
              {text: 'V1.1', link: '/Individual/V1.1/readme_v1.1', collapsed: false, items: [
                  {text: 'Donor', link: '/Individual/V1.1/Data-describing-sample-donor'},
                  {text: 'Sample', link: '/Individual/V1.1/Data-describing-sample'},
                  {
                    text: 'Event', link: '/Individual/V1.1/Data-describing-event',
                  }
                ]},
              {text: 'V1.0', collapsed: true, items: [
                  {text: 'Donor', link: '/Individual/V1.0/Data-describing-sample-donor'},
                  {text: 'Sample', link: '/Individual/V1.0/Data-describing-sample'},
                  {
                    text: 'Event', link: '/Individual/V1.0/Data-describing-event',
                  }
                ]}
            ]},
          {text: 'Digital Pathology', link: 'DigitalPathology/readme'},
        ]
      }
    ],
    footer: {
      message: 'Released under the AGPL-3.0 License.',
      copyright: 'Copyright© 2019-present BBMRI-ERIC'
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/BBMRI-ERIC/miabis'}
    ]
  }
})

