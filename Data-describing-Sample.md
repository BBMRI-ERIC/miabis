## Definition

Introduced in 2020 ([Eklund et al., 2020](https://www.liebertpub.com/doi/10.1089/bio.2019.0129)), the component <strong>Sample</strong> is a portion or quantity of biological material that is collected from a sample donor, or which is a digital representation of a biological entity of the sample donor, such as an image. 

| Attribute Code | Attribute Name | Allowed Values | Description | Constraints | Cardinality | 
| --- | --- | --- | --- | --- | --- |
| MIABIS-SAMPLE-01 | Sample ID | Coded string | Unique ID of the sample within a sample collection, often represented by the sample barcode; text identifier. Sample ID meant for sharing. | Pseudonymized, alphanumeric. It is recommended that sample IDs will be persistent within a given biobank. | 1 |
| MIABIS-SAMPLE-02| Detailed sample type| Text list| The sample type saved from a biological entity for testing diagnostic, propagation, treatment or research purposes| | 1|
| MIABIS-SAMPLE-03| Sample storage temperature| List: RT, 2oC to 10oC, -18oC to -35oC, -60oC to -85oC, <-135oC, Liquid nitrogen vapor phase, Liquid nitrogen liquid phase, Other| The long term storage temperature at which the sample is stored after preparation, based on SPREC v3 and [MIABIS-2.0-15](Structured-data-and-lists.md#storage-temperature)| | 0|
| MIABIS-SAMPLE-04| Sample creation date and time| yyyy-mm-ddThh:mm:ss| The date and time the sample was created in the form currently described in MIABIS-SAMPLE-02 Detailed material type. Format according to ISO8601. Could also be partial, for example, YYYY| | 0|
| MIABIS-SAMPLE-05| Anatomical site ontology| String| Name of ontology used for describing the anatomical source of the sample material, for example, ICD-O-3 topography code| MIABIS-SAMPLE-05 and MIABIS-SAMPLE-06 are required if any ontology information is provided| 0/1|
| MIABIS-SAMPLE-06| Anatomical site ontology version| Coded string| Version of selected ontology for anatomical site| MIABIS-SAMPLE-05 and MIABIS-SAMPLE-06 are required if any ontology information is provided| 0/1|
| MIABIS-SAMPLE-07| Anatomical site ontology code| Coded string| Anatomical site code from the selected anatomical site ontology version| MIABIS-SAMPLE-05 and MIABIS-SAMPLE-06 are required if any ontology information is provided| 0|
| MIABIS-SAMPLE-08| Anatomical site ontology description| String| Description from the selected anatomical site ontology code| MIABIS-SAMPLE-05 and MIABIS-SAMPLE-06 are required if any ontology information is provided| 0|
| MIABIS-SAMPLE-09| Anatomical site free text| String| Explanation about Anatomical site in case of unknown Anatomical site or insufficient information| MIABIS-SAMPLE-05 and MIABIS-SAMPLE-06 are required if any ontology information is provided| 0|
| MIABIS-SAMPLE-10| Sample content diagnosis| Text list| The ICD-10 diagnosis code describing content of the sample, such as whether the sample contains cancerous material | | 0...n|
| MIABIS-SAMPLE-11| Use restrictions| Text list| The restrictions that may change the availability of the samples donated by the sample donor| | 0...n|
