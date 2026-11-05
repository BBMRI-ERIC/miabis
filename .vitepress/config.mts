import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MIABIS',
  description: 'Minimum Information About BIobank data Sharing',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lastUpdated: true,
  base: process.env.DOCS_BASE || "",
  themeConfig: {
    logo: { src: '/favicon.ico', width: 24, height: 24 },
    nav: [
      { text: 'About', link: '/README' },
      {
        text: 'Publications', items: [
          {
            text: 'MIABIS version 2 (Core)',
            link: 'https://www.liebertpub.com/doi/abs/10.1089/bio.2015.0070',
          },
          {
            text: 'MIABIS version 3 (Sample, Sample Donor and Event)',
            link: 'https://www.liebertpub.com/doi/10.1089/bio.2019.0129'
          },
          {
            text: 'MIABIS version 3 (Core)',
            link: 'https://www.liebertpub.com/doi/full/10.1089/bio.2023.0074'
          }
        ]
      },
      { text: 'BBMRI-ERIC', link: 'https://www.bbmri-eric.eu/' }],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/bbmri-eric/miabis/edit/master/:path',
      text: 'Edit this page on GitHub'
    },
    sidebar: [
      { text: 'About', link: '/README' },
      {
        text: 'Core', collapsed: false, link: '/Core/README', items: [
          { text: 'Biobank', link: '/Core/Biobank' },
          { text: 'Collection', link: '/Core/Collection' },
          { text: 'Network', link: '/Core/Network' },
          { text: 'Research Resource', link: '/Core/Research Resource' },
          {
            text: 'Services', collapsed: false, link: '/Core/Services/README', items: [
              { text: 'Services', link: '/Core/Services/Services' }
            ]
          },
        ]
      },
      {
        text: 'Individual',
        collapsed: false,
        link: '/Individual/README',
        items: [
          {
            text: 'Digital Pathology', link: '/Individual/Digital Pathology/README', collapsed: false, items: [
              { text: 'Assay', link: '/Individual/Digital Pathology/Assay' },
              { text: 'File', link: '/Individual/Digital Pathology/File' },
              { text: 'Scan', link: '/Individual/Digital Pathology/Scan' },
            ]
          },
          { text: 'Event', link: '/Individual/Event' },
          { text: 'Sample', link: '/Individual/Sample' },
          { text: 'Sample Donor', link: '/Individual/Sample Donor' },
        ]
      },
      {
        text: 'Structured Data', link: 'Structured Data/README', collapsed: true, items: [
          { text: 'Anatomical Site', link: '/Structured Data/Anatomical Site' },
          { text: 'Contact Information', link: '/Structured Data/Contact Information' },
          { text: 'Disease', link: '/Structured Data/Disease' },
          { text: 'Technology', link: '/Structured Data/Technology' },
        ]
      },
      {
        text: 'Value Sets', link: 'Value Sets/README', collapsed: true, items: [
          { text: 'Age Unit', link: '/Value Sets/Age Unit' },
          { text: 'Collection Design', link: '/Value Sets/Collection Design' },
          { text: 'Common Collaboration Topics', link: '/Value Sets/Common Collaboration Topics' },
          { text: 'Component Status', link: '/Value Sets/Component Status' },
          { text: 'Dataset Type', link: '/Value Sets/Dataset Type' },
          { text: 'Inclusion Criteria', link: '/Value Sets/Inclusion Criteria' },
          { text: 'Network Type', link: '/Value Sets/Network Type' },
          { text: 'Quality Management Standard', link: '/Value Sets/Quality Management Standard' },
          { text: 'Sample Collection Setting', link: '/Value Sets/Sample Collection Setting' },
          { text: 'Sample Source', link: '/Value Sets/Sample Source' },
          { text: 'Sample Type', link: '/Value Sets/Sample Type' },
          { text: 'Service Type', link: '/Value Sets/Service Type' },
          { text: 'Sex', link: '/Value Sets/Sex' },
          { text: 'Storage Temperature', link: '/Value Sets/Storage Temperature' },
          { text: 'Use and Access Conditions', link: '/Value Sets/Use and Access Conditions' },
        ]
      },
      {
        text: 'Mappings', collapsed: true, items: [
          { text: 'MIABIS to FHIR', link: '/mappings/MIABIS to BBMRI.de FHIR' },
          { text: 'MIABIS Sample Type', link: '/mappings/MIABIS-SampleType to SPREC SNOMED-CT OMOP HL7-FHIR' },
        ]
      },
    ],
    footer: {
      copyright: 'Copyright© 2016-present MIABIS community'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BBMRI-ERIC/miabis' }
    ]
  }
})

