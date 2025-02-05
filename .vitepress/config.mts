import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'MIABIS',
    description: 'Minimum Information About BIobank data Sharing',
    head: [['link', {rel: 'icon', href: '/favicon.ico'}]],
    lastUpdated: true,
    base: process.env.DOCS_BASE || "",
    themeConfig: {
    logo: {src: '/favicon.ico', width: 24, height: 24},
    nav: [
      {text: 'About', link: '/README'},
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
          {text: 'About', link: '/Core/README'},
          {text: 'V3', collapsed: false, items: [
              {text: 'Network', link: '/Core/V3/Data-describing-Network'},
              {text: 'Biobank', link: '/Core/V3/Data-describing-Biobank'},
              {text: 'Collection', link: '/Core/V3/Data-describing-Collection'},
              {text: 'Research Resource', link: '/Core/V3/Data-describing-ResearchResource'}
            ]},
          {
            text: 'V2',collapsed: true, items: [
                  {text: 'Study', link: '/Core/V2/Data-describing-Study'},
                  {text: 'Biobank', link: '/Core/V2/Data-describing-Biobank'},
                  {text: 'Collection', link: '/Core/V2/Data-describing-SampleCollection'},
                  {text: 'Database Implementation', link: '/Core/V2/Database-Implementation'}
                ]
          }
        ]},
      {
        text: 'Components',
        collapsed: false,
        items: [
          {text: 'Individual', items: [
              {text: 'V1.1', link: '/Individual/V1.1/readme_v1.1', collapsed: false, items: [
                  {text: 'Donor', link: '/Individual/V1.1/Data-describing-Sample-Donor'},
                  {text: 'Sample', link: '/Individual/V1.1/Data-describing-Sample'},
                  {
                    text: 'Event', link: '/Individual/V1.1/Data-describing-Event',
                  }
                ]},
              {text: 'V1.0', collapsed: true, items: [
                  {text: 'Donor', link: '/Individual/V1.0/Data-describing-Sample-Donor'},
                  {text: 'Sample', link: '/Individual/V1.0/Data-describing-Sample'},
                  {
                    text: 'Event', link: '/Individual/V1.0/Data-describing-Event',
                  }
                ]}
            ]},
          {text: 'Digital Pathology', link: 'DigitalPathology/README'},
        ]
      }
    ],
    footer: {
      message: 'TBD',
      copyright: 'Copyright© 2019-present MIABIS community'
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/BBMRI-ERIC/miabis'}
    ]
  }
})

