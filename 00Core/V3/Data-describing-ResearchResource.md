# Data describing Research Resource entity

## Definition
For MIABIS Core 3.0 purposes, Research Resource is a set of samples and/or data items used and/or analyzed in a common context in past or current research. A research resource may combine material from multiple collections and from multiple biobanks.

The Study (MIABIS Core v1 & v2) was renamed as Research Resource in Core v3 by [Eklund et al. 2024](https://doi.org/10.1089/bio.2023.0074).

## Attribute list

| Attribute Code | Attribute Name | Allowed Data Types | Description | Constraints | Allowed Values | 
|---|---|---|---|---|---|
|MIABIS-RESEARCHRESOURCE-01 | ID |	Text |	ID of the Research Resource |
|MIABIS-RESEARCHRESOURCE-02 |	Acronym |	Text |	Short name in use for the Research Resource. If applicable.|
|MIABIS-RESEARCHRESOURCE-03 |	Name |	Text |	Name of the Research Resource (preferably in English).|
|MIABIS-RESEARCHRESOURCE-04 |	URL |	Text	| Complete http-address for the Research Resource.|
|MIABIS-RESEARCHRESOURCE-05 |	Contact Information |	Structured data |	Contact information for the contact person/person responsible of the Research Resource .||(Structured attribute)
|MIABIS-RESEARCHRESOURCE-06 |	Description |	Text |	Description of the Research Resource in English.|
|MIABIS-RESEARCHRESOURCE-07 |	Sample source |	Enumerated values |	The source from which the samples were collected or isolated.|| Human, Animal, Environment|
|MIABIS-RESEARCHRESOURCE-08 |	Sex |	Enumerated values |	The sex of the individuals in the Research Resource.||Male, Female, Unknown, Undifferentiated, Not applicable|
|MIABIS-RESEARCHRESOURCE-09 |	Age Low |	Integer |	Age of youngest sample donor at time of sample donation.|
|MIABIS-RESEARCHRESOURCE-10 |	Age High |	Integer |	Age of oldest sample donor at time of sample donation.|
|MIABIS-RESEARCHRESOURCE-11 |	Age Low Unit |	Enumerated values |	Unit defining Age Low. ||Years, Months, Weeks, Days, Gestational weeks
|MIABIS-RESEARCHRESOURCE-12 |	Age High Unit |	Enumerated values |	Unit defining Age High.||Years, Months, Weeks, Days, Gestational weeks
|MIABIS-RESEARCHRESOURCE-13 |	Dataset type |	Enumerated values |	Types of datasets (groups of related data) obtained or otherwise derived from donors or their specimens. ||Lifestyle dataset, Environmental dataset, Physiological dataset, Biochemical dataset, Clinical dataset, Psychological dataset, Genomic dataset, Proteomic dataset, Metabolomic dataset, Body (Radiological) image, Whole slide image, Photo image, Genealogical records, Other
|MIABIS-RESEARCHRESOURCE-14 |	Sample type |	Enumerated values |	The biospecimen saved from a biological entity for propagation e.g. testing, diagnostics, treatment or research purposes.||Blood, Buffy coat, Cancer cell lines, Digital sample, DNA, Entire body organ, Faeces, Embryo or fetal tissue, Immortalized cell lines, Isolated microbes, Other body fluid, Plasma, Primary cells, Post-mortem tissue, RNA, Saliva, Serum, Specimen from environment or food, Swab, Tissue (Frozen), Tissue (FFPE), Urine, Other|
|MIABIS-RESEARCHRESOURCE-15 |	Storage temperature |	Enumerated values |	The long-term storage temperature at which the sample is stored after preparation, based on SPREC v3.||RT (Room temperature), 2 °C to 10°C, -18 °C to -35 °C, -60 °C to -85 °C, <-135 °C, Liquid nitrogen vapor-phase, Liquid nitrogen liquid-phase, Other|
|MIABIS-RESEARCHRESOURCE-16 |	Disease |	Structured data |	The disease or disease category of main interest in the Research Resource, if any.|| Can be multiple diseases or disease categories. (Structured attribute)|
|MIABIS-RESEARCHRESOURCE-17 |	Sample collection setting |	Enumerated values |	The context in which the sample collection was/is conducted.||Routine health care setting, Clinical trial, Research study, Public health/population based study, Museum and/or archeological collection, Environment, Unknown, Other|
|MIABIS-RESEARCHRESOURCE-18 |	Research Resource design |	Enumerated values |	The overall design of the collection that explains how the collection was/is built up.||Case-control, Cross-sectional, Longitudinal cohort, Twin-study, Quality control study, Population-based cohort, Disease-specific cohort, Birth cohort, Microbial collection (if applicable with resistance data), Reference collection, Rare disease collection, Other|
|MIABIS-RESEARCHRESOURCE-19 |	Use & Access conditions	| Enumerated values |	The conditions that may change the availability of the samples/data in the collection.||Commercial use, Collaboration, Specific research use, Genetic data use, Outside EU access, Xenograft, Other animal work, Other|
|MIABIS-RESEARCHRESOURCE-20 |	Research Resource status |	Enumerated values |	The state of the Research Resource functions.|| Active, Ended, Other|
|MIABIS-RESEARCHRESOURCE-21 |	Total number of subjects |	Integer |	Total number of subjects included in the Research Resource|
|MIABIS-RESEARCHRESOURCE-22 |	Inclusion criteria |	Enumerated values |	Information on type of parameters that determine which subjects will become Research Resource participants.|| Can be several values: Health status, Hospital patient, Use of medication, Gravidity, Age group, Familial status, Sex, Country of residence, Ethnic origin, Population representative sampling, Lifestyle/Exposure, Other|
|MIABIS-RESEARCHRESOURCE-23 |	Publications |	Text |	List of key publications produced in the Research Resource (provide DOI’s, if possible)|
