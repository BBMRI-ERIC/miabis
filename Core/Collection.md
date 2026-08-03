# Data describing Collection entity

## Definition

For MIABIS Core 3.0 purpose, Collection represents a set of samples and/or data items collected and/or derived in a common context and stored under a common stewardship and available for future research.

The MIABIS v2 Sample Collection was renamed as Collection to make it more inclusive and generic, and to allow description of data collections in Core v3 by [Eklund et al. 2024](https://doi.org/10.1089/bio.2023.0074). 

## Attribute list

| Attribute Code | Attribute Name | Allowed Data Types | Description | Constraints | Allowed Values | Cardinality |
|---|---|---|---|---|---|---|
| MIABIS-COLLECTION-01| ID| Text| ID of the collection.| The ID is technical and given by the implementation. Implementation will provide instructions on how to form the ID. || 1
| MIABIS-COLLECTION-02| Acronym| Text| Short name in use for the collection. If applicable.|||0..1
| MIABIS-COLLECTION-03| Name| Text| Name of the collection (preferably in English).|||1
| MIABIS-COLLECTION-04| URL| Text| Complete http-address for the collection.||| 0..1
| MIABIS-COLLECTION-05| Contact Information| Structured data| Contact information for the contact person/person responsible of the collection (Structured attribute).||[MIABIS-COLLECTION-05](https://github.com/BBMRI-ERIC/miabis/blob/master/all%20structured%20data.md#contact-information).| 1
| MIABIS-COLLECTION-06| Description| Text| Description of the collection in English.| Free text description of the Collection. Recommendation max. 2000 char.||1
| MIABIS-COLLECTION-07| Sample source| Enumerated values| The source from which the samples were collected or isolated.|| Human, Animal, Environment.|0..1
| MIABIS-COLLECTION-08| Sex| Enumerated values| The sex of the individuals in the collection.||Male, Female, Unknown, Undifferentiated, Not applicable.|1..n
| MIABIS-COLLECTION-9| Age Low| Integer| Age of youngest sample donor at time of sample donation.||| 0..1 (If applicable)
| MIABIS-COLLECTION-10| Age High| Integer| Age of oldest sample donor at time of sample donation.||| 0..1 (If applicable)
| MIABIS-COLLECTION-11| Age Low Unit| Enumerated values| Unit defining Age Low.|| Years, Months, Weeks, Days, Gestational weeks.| 0..1 (If applicable)
| MIABIS-COLLECTION-12| Age High Unit| Enumerated values| Unit defining Age High.|| Years, Months, Weeks, Days, Gestational weeks.| 0..1 (If applicable)
| MIABIS-COLLECTION-13| Dataset type| Enumerated values| Types of datasets (groups of related data) obtained or otherwise derived from donors or their specimens.||Lifestyle dataset, Environmental dataset, Physiological dataset, Biochemical dataset, Clinical dataset, Psychological dataset, Genomic dataset, Proteomic dataset, Metabolomic dataset, Body (Radiological) image, Whole slide image, Photo image, Genealogical records, Other.| 1 
| MIABIS-COLLECTION-14| Sample type| Enumerated values| The biospecimen saved from a biological entity for propagation e.g. testing, diagnostics, treatment or research purposes.||Blood, Buffy coat, Cancer cell lines, Digital sample, DNA, Entire body organ, Faeces, Embryo or fetal tissue, Immortalized cell lines, Isolated microbes, Other body fluid, Plasma, Primary cells, Post-mortem tissue, RNA, Saliva, Serum, Specimen from environment or food, Swab, Tissue (Frozen), Tissue (FFPE), Urine, Other.| 1
| MIABIS-COLLECTION-15| Storage temperature| Enumerated values| The long-term storage temperature at which the sample is stored after preparation, based on SPREC v3.||RT (Room temperature), 2 °C to 10°C, -18 °C to -35 °C, -60 °C to -85 °C, <-135 °C, Liquid nitrogen vapor-phase, Liquid nitrogen liquid-phase, Other.| 0..n
| MIABIS-COLLECTION-16| Disease| Structured data| The disease or disease category of main interest in the collection, if any.||Can be multiple diseases or disease categories as defined in [MIABIS-COLLECTION-16](https://github.com/BBMRI-ERIC/miabis/blob/master/all%20structured%20data.md#disease).|0..n 
| MIABIS-COLLECTION-17| Sample collection setting| Enumerated values| The context in which the sample collection was/is conducted.|| Routine health care setting, Clinical trial, Research study, Public health/population based study, Museum and/or archeological collection, Environment, Unknown, Other.|| 0..n
| MIABIS-COLLECTION-18| Collection design| Enumerated values| The overall design of the collection that explains how the collection was/is built up. ||Case-control, Cross-sectional, Longitudinal cohort, Twin-study, Quality control study, Population-based cohort, Disease-specific cohort, Birth cohort, Microbial collection (if applicable with resistance data), Reference collection, Rare disease collection, Other.| 0..n
| MIABIS-COLLECTION-19| Use & Access conditions| Enumerated data| The conditions that may change the availability of the samples/data in the collection.|| Commercial use, Collaboration, Specific research use, Genetic data use, Outside EU access, Xenograft, Other animal work, Other.| 0..n
| MIABIS-COLLECTION-20| Collection status| Enumerated values| The state of the collection functions.|| Active, Ended, Other| 0..1
| MIABIS-COLLECTION-21| Total number of subjects| Integer| Total number of subjects included in the collection.||| 0..1
| MIABIS-COLLECTION-22| Inclusion criteria| Enumerated values| Information on type of parameters that determine which subjects will become collection participants.|| Health status, Hospital patient, Use of medication, Gravidity, Age group, Familial status, Sex, Country of residence, Ethnic origin, Population representative sampling, Lifestyle/Exposure, Other| 0..n
| MIABIS-COLLECTION-23| Publications| Text| List of key publications produced in the collection.|Provide DOI, if possible|| 0..n
