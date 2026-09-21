# Data describing Sample donor entity

In current version the sample donor entity is aimed to describe human sample donors only.

## Definition

Introduced in 2020 ([Eklund et al., 2020](https://doi.org/10.1089/bio.2019.0129)), the entity **Sample donor** is a person who is a source of either a biological material or a digital representation of a biological entity such as an image.

## Attribute table for Sample donor

| Attribute Code | Attribute Name | Description | Data Type | Allowed Values | Constraints | Cardinality |
| --- | --- | --- | --- | --- | --- | --- |
| MIABIS-SAMPLEDONOR-01 | Sample donor ID | Sample donor ID. Unique ID code of the sample donor within the sample collection | String | | Pseudonymised, alphanumeric | 1 |
| MIABIS-SAMPLEDONOR-02 | Sex | Biological sex of the sample donor. | Enumerated values | Male, Female, Unknown, Undifferentiated, Not applicable | | 1 |
| MIABIS-SAMPLEDONOR-03 | Dataset type | The data categories from which data are available or can be linked to the sample donor. | Enumerated values | Lifestyle dataset, Environmental dataset, Physiological dataset, Biochemical dataset, Clinical dataset, Psychological dataset, Genomic dataset, Proteomic dataset, Metabolomic dataset, Body (Radiological) image, Whole slide image, Photo image, Genealogical records, Other. | | 0...n |
| MIABIS-SAMPLEDONOR-04 | Birth date | Birth date of the sample donor. | Datetime, yyyy-mm-ddThh:mm:ss. Can also be partial, for example, YYYY. | | ISO-standard 8601. Date of birth is required when Event date (MIABIS-EVENT-02) is used, otherwise partial date, as in birth year, can be used | 0 |
