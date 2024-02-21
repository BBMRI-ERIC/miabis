## Definition

MIABIS Core 3.0 defines a **Collection** as a set of samples and/or data items collected and/or derived in a common context and stored under a common stewardship and available for future research (Modified according to Merino-Martinez et al, 2016).

| Attribute Code| Attribute Name| Allowed Values| Description |
|---|---|---|---|
| MIABIS-COLLECTION-01 |	ID |	Text |	ID of the [component]|
| MIABIS-COLLECTION-02 |	Acronym |	Text |	Short name in use for the [component]. If applicable|
| MIABIS-COLLECTION-03 |	Name |	Text |	Name of the [component] (preferably in English)|
| MIABIS-COLLECTION-04 |	URL |	Text |	Complete http-address for the [component]|
| MIABIS-COLLECTION-05 |	Contact Information |	Structured data |	Contact information for the contact person/person responsible of the [component] (Structured attribute)|
| MIABIS-COLLECTION-06 |	Description |	Text |	Description of the [component] in English|
| MIABIS-COLLECTION-07 |	Sample source |	Enumerated values |	The source from which the samples were collected or isolated. Can be one of the following values: Human, Animal, Environment|
| MIABIS-COLLECTION-08 |	Sex |	Enumerated values |	The sex of the individuals in the [component]. Can be one or more of the following values: Male, Female, Unknown, Undifferentiated, Not applicable|
| MIABIS-COLLECTION-09 |	Age Low |	Integer |	Age of youngest sample donor at time of sample donation|
| MIABIS-COLLECTION-10 |	Age High |	Integer |	Age of oldest sample donor at time of sample donation|
| MIABIS-COLLECTION-11 |	Age Low Unit |	Enumerated values |	Unit defining Age Low. Can be one of the following values: Years, Months, Weeks, Days, Gestational weeks
| MIABIS-COLLECTION-12 | 	Age High Unit	| Enumerated values |	Unit defining Age High. Can be one of the following values: Years, Months, Weeks, Days, Gestational weeks
| MIABIS-COLLECTION-13 |	Dataset type |	Enumerated values |	Types of datasets (groups of related data) obtained or otherwise derived from donors or their specimens. Can be one or more of the following values: Lifestyle dataset, Environmental dataset, Physiological dataset, Biochemical dataset, Clinical dataset, Psychological dataset, Genomic dataset, Proteomic dataset, Metabolomic dataset, Body (Radiological) image, Whole slide image, Photo image, Genealogical records, Other
| MIABIS-COLLECTION-14 |	Sample type |	Enumerated values |	The biospecimen saved from a biological entity for propagation e.g. testing, diagnostics, treatment or research purposes. Can be one of the following values: Blood, Buffy coat, Cancer cell lines, Digital sample, DNA, Entire body organ, Faeces, Embryo or fetal tissue, Immortalized cell lines, Isolated microbes, Other body fluid, Plasma, Primary cells, Post-mortem tissue, RNA, Saliva, Serum, Specimen from environment or food, Swab, Tissue (Frozen), Tissue (FFPE), Urine, Other|
| MIABIS-COLLECTION-15 |	Storage temperature |	Enumerated values |	The long-term storage temperature at which the sample is stored after preparation, based on SPREC v3.: RT (Room temperature), 2 °C to 10°C, -18 °C to -35 °C, -60 °C to -85 °C, <-135 °C, Liquid nitrogen vapor-phase, Liquid nitrogen liquid-phase, Other|
| MIABIS-COLLECTION-16 |	Disease |	Structured data |	The disease or disease category of main interest in the [component], if any. Can be multiple diseases or disease categories. (Structured attribute)|
| MIABIS-COLLECTION-17 |	Sample collection setting |	Enumerated values |	The context in which the sample collection was/is way . Can be one or more of the following values: Routine health care setting, Clinical trial, Research study, Public health/population based study, Museum and/or archeological collection, Environment, Unknown, Other|
| MIABIS-COLLECTION-18 |	[Component] design |	Enumerated values |	The overall design of the [component] that explains how it was/is built up. Can one or more of the following values: Case-control, Cross-sectional, Longitudinal cohort, Twin-study, Quality control study, Population-based cohort, Disease-specific cohort, Birth cohort, Microbial collection (if applicable with resistance data), Reference collection, Rare disease collection, Other|
| MIABIS-COLLECTION-19 |	Use & Access conditions |	Enumerated values |	The conditions that may change the availability of the samples/data in the [component]. Can be one or more of the following values: Commercial use, Collaboration, Specific research use, Genetic data use, Outside EU access, Xenograft, Other animal work, Other|
| MIABIS-COLLECTION-20 |	[Component] status |	Enumerated values |	The state of the [component] functions: Active, Ended, Other|
| MIABIS-COLLECTION-21 | Total number of subjects |	Integer	| Total number of subjects included in the [component]|
| MIABIS-COLLECTION-22 |	Inclusion criteria |	Enumerated values |	Information on type of parameters that determine which subjects will become [component] participants. Can be several values: Health status, Hospital patient, Use of medication, Gravidity, Age group, Familial status, Sex, Country of residence, Ethnic origin, Population representative sampling, Lifestyle/Exposure, Other|
| MIABIS-COLLECTION-23 |	Publications |	Text |	List of key publications produced in the [component] (provide DOI’s, if possible)| 

