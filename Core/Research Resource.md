# Data describing Research Resource entity

## Definition

For MIABIS Core 3.0 purposes, Research Resource is a set of samples and/or data items used and/or analyzed in a common context in past or current research. A research resource may combine material from multiple collections and from multiple biobanks.

The Study (MIABIS Core v1 & v2) was renamed as Research Resource in Core v3 by [Eklund et al. 2024](https://doi.org/10.1089/bio.2023.0074).

## Attribute list

| Attribute Code | Attribute Name | Description | Data Type | Allowed Values | Constraints | Cardinality |
| --- | --- | --- | --- | --- | --- | --- |
| MIABIS-RESEARCHRESOURCE-01 | ID | ID of the Research Resource | Text | | | 1 |
| MIABIS-RESEARCHRESOURCE-02 | Acronym | Short name in use for the Research Resource. If applicable. | Text | | | 0..1 |
| MIABIS-RESEARCHRESOURCE-03 | Name | Name of the Research Resource (preferably in English). | Text | | | 1 |
| MIABIS-RESEARCHRESOURCE-04 | URL | Complete http-address for the Research Resource. | Text | | | 0..1 |
| MIABIS-RESEARCHRESOURCE-05 | Contact Information | Contact information for the contact person/person responsible of the Research Resource . | Structured data | | | 1 |
| MIABIS-RESEARCHRESOURCE-06 | Description | Description of the Research Resource in English. | Text | | | 1 |
| MIABIS-RESEARCHRESOURCE-07 | Sample source | The source from which the samples were collected or isolated. | Enumerated values | Human, Animal, Environment | | 0..1 |
| MIABIS-RESEARCHRESOURCE-08 | Sex | The sex of the individuals in the Research Resource. | Enumerated values | Male, Female, Unknown, Undifferentiated, Not applicable | | 1..n |
| MIABIS-RESEARCHRESOURCE-09 | Age Low | Age of youngest sample donor at time of sample donation. | Integer | | | 0..1 (if applicable) |
| MIABIS-RESEARCHRESOURCE-10 | Age High | Age of oldest sample donor at time of sample donation. | Integer | | | 0..1 (if applicable) |
| MIABIS-RESEARCHRESOURCE-11 | Age Low Unit | Unit defining Age Low. | Enumerated values | Years, Months, Weeks, Days, Gestational weeks | | 0..1 (if applicable) |
| MIABIS-RESEARCHRESOURCE-12 | Age High Unit | Unit defining Age High. | Enumerated values | Years, Months, Weeks, Days, Gestational weeks | | 0..1 (if applicable) |
| MIABIS-RESEARCHRESOURCE-13 | Dataset type | Types of datasets (groups of related data) obtained or otherwise derived from donors or their specimens. | Enumerated values | Lifestyle dataset, Environmental dataset, Physiological dataset, Biochemical dataset, Clinical dataset, Psychological dataset, Genomic dataset, Proteomic dataset, Metabolomic dataset, Body (Radiological) image, Whole slide image, Photo image, Genealogical records, Other | | 1 |
| MIABIS-RESEARCHRESOURCE-14 | Sample type | The biospecimen saved from a biological entity for propagation e.g. testing, diagnostics, treatment or research purposes. | Enumerated values | Blood, Buffy coat, Cancer cell lines, Digital sample, DNA, Entire body organ, Faeces, Embryo or fetal tissue, Immortalized cell lines, Isolated microbes, Other body fluid, Plasma, Primary cells, Post-mortem tissue, RNA, Saliva, Serum, Specimen from environment or food, Swab, Tissue (Frozen), Tissue (FFPE), Urine, Other | | 1 |
| MIABIS-RESEARCHRESOURCE-15 | Storage temperature | The long-term storage temperature at which the sample is stored after preparation, based on SPREC v3. | Enumerated values | RT (Room temperature), 2 °C to 10°C, -18 °C to -35 °C, -60 °C to -85 °C, <-135 °C, Liquid nitrogen vapor-phase, Liquid nitrogen liquid-phase, Other | | 0..n |
| MIABIS-RESEARCHRESOURCE-16 | Disease | The disease or disease category of main interest in the Research Resource, if any. | Structured data | Can be multiple diseases or disease categories. | | 0..n |
| MIABIS-RESEARCHRESOURCE-17 | Sample collection setting | The context in which the sample collection was/is conducted. | Enumerated values | Routine health care setting, Clinical trial, Research study, Public health/population based study, Museum and/or archeological collection, Environment, Unknown, Other | | 0..n |
| MIABIS-RESEARCHRESOURCE-18 | Research Resource design | The overall design of the collection that explains how the collection was/is built up. | Enumerated values | Case-control, Cross-sectional, Longitudinal cohort, Twin-study, Quality control study, Population-based cohort, Disease-specific cohort, Birth cohort, Microbial collection (if applicable with resistance data), Reference collection, Rare disease collection, Other | | 0..n |
| MIABIS-RESEARCHRESOURCE-19 | Use & Access conditions | The conditions that may change the availability of the samples/data in the collection. | Enumerated values | Commercial use, Collaboration, Specific research use, Genetic data use, Outside EU access, Xenograft, Other animal work, Other | | 0..n |
| MIABIS-RESEARCHRESOURCE-20 | Research Resource status | The state of the Research Resource functions. | Enumerated values | Active, Ended, Other | | 0..1 |
| MIABIS-RESEARCHRESOURCE-21 | Total number of subjects | Total number of subjects included in the Research Resource | Integer | | | 0..1 |
| MIABIS-RESEARCHRESOURCE-22 | Inclusion criteria | Information on type of parameters that determine which subjects will become Research Resource participants. | Enumerated values | Can be several values: Health status, Hospital patient, Use of medication, Gravidity, Age group, Familial status, Sex, Country of residence, Ethnic origin, Population representative sampling, Lifestyle/Exposure, Other | | 0..n |
| MIABIS-RESEARCHRESOURCE-23 | Publications | List of key publications produced in the Research Resource (provide DOI’s, if possible) | Text | | | 0..n |
