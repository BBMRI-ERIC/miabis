## Definition

Introduced in MIABIS Core 3.0, Sample represents current status of samples stored in a given biobank. A sample is obtained from a single sample donor, but it is also possible that a biobank will store pooled samples (Eklund et al. Biopreserv Biobank. 2020; 0(0): 1-10).

| Attribute Code| Attribute Name| Allowed Values| Description| Constraints|
|---|---|---|---|---|
| MIABIS-SAMPLE-01| Sample ID| Text| Unique ID of the sample within a sample collection, often represented by the sample barcode; text identifier. Sample ID meant for sharing.|The biospecimen type saved from a biological entity for testing, diagnostic, propagation, treatment or research purposes.|
| MIABIS-SAMPLE-02| Detailed material type| Text list| Unique ID within a sample collection of a parent sample. Only if the sample has a parent sample i.e. if the sample itself is an aliquot or a derivative from another sample.| 
| MIABIS-SAMPLE-03| Sample storage temperature| Text list| The long term storage temperature at which the sample is stored after preparation. Based on SPREC v3 and [MIABIS-2.0-15](https://github.com/MIABIS/miabis/wiki/Structured-data-and-lists#storage-temperature)| 
| MIABIS-SAMPLE-04| Sample creation date and time| Date, ISO8601| The date and time (YYYYMMDDThhmm) when the sample was created in the form currently described in MIABIS-SAMPLE-02 Detailed material type. Could be also only date or year| 
| MIABIS-SAMPLE-05| Anatomical site ontology| String| Name of ontology used for describing the anatomical source of the sampled material, e.g. ICD-O-3 topography code| MIABIS-SAMPLE-05 and MIABIS-SAMPLE-06 are required if any ontology information is provided|
| MIABIS-SAMPLE-06| Anatomical site ontology version| Coded string| Version of selected ontology for Anatomical site| MIABIS-SAMPLE-05 and MIABIS-SAMPLE-06 are required if any ontology information is provided|
| MIABIS-SAMPLE-07| Anatomical site ontology code| Coded string| Anatomical site code from the selected Anatomical site ontology version| MIABIS-SAMPLE-05 and MIABIS-SAMPLE-06 are required if any ontology information is provided|
| MIABIS-SAMPLE-08| Anatomical site ontology description| String| Description from the selected Anatomical site ontology code| MIABIS-SAMPLE-05 and MIABIS-SAMPLE-06 are required if any ontology information is provided|
| MIABIS-SAMPLE-09| Anatomical site free text| String| Explanation about Anatomical site or in case of unknown Anatomical site or insufficient information| MIABIS-SAMPLE-05 and MIABIS-SAMPLE-06 are required if any ontology information is provided|
| MIABIS-10| Sample content diagnosis| Text list| The ICD-10 diagnosis code describing content of the sample, such as whether the sample contains cancerous material | 
| MIABIS-11| Use restrictions| Text list| The restrictions that may change the availability of the samples donated by the sample donor| 