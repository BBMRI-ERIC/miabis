## Definition

Introduced in 2020 ([Eklund et al., 2020](https://www.liebertpub.com/doi/10.1089/bio.2019.0129)), the component <strong>Sample donor</strong> is a person who is a source of either a biological material or a digital representation of a biological entity such as an image. 


| Attribute Code| Attribute Name| Allowed Values| Description| Constraints| Cardinality|
|---|---|---|---|---|---|
| MIABIS-SAMPLEDONOR-01| Sample donor ID| String | Sample donor ID. Unique ID code of the sample donor within the sample collection/biobank| Pseudonymized, alphanumeric| 1|
| MIABIS-SAMPLEDONOR-02| Sex| Enumerated values | Biological sex of the sample donor. [Sex](https://github.com/BBMRI-ERIC/miabis/blob/master/all%20lists.md#sex) | | 1|
| MIABIS-SAMPLEDONOR-03| Data categories| Structured data| The data categories from which data are available or can be linked to the sample donor. Can be several values [Dataset Types](https://github.com/BBMRI-ERIC/miabis/blob/master/all%20lists.md#dataset-type) | | 0...n|
| MIABIS-SAMPLEDONOR-04| Birth date| yyyy-mm-ddThh:mm:ss| Birth date of the sample donor. Coding ISO8601. Can also be partial, for example, YYYY.| Date of birth is required when Event date (MIABIS-EVENT-02) is used, otherwise partial date, as in birth year, can be used| 0|
