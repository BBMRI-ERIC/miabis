# Anatomical Site

| Attribute Name | Description | Data Type | Constraints | Attribute Codes |
|-----|-----|-----|-----|-----|
| Anatomical site ontology             | Name of ontology used for describing the anatomical source of the sample material, for example, ICD-O-3 topography code | String | MIABIS-SAMPLE-05-01 and MIABIS-SAMPLE-05-02 are required if any ontology information is provided | MIABIS-SAMPLE-05-01 |
| Anatomical site ontology version     | Version of selected ontology for anatomical site | String | MIABIS-SAMPLE-05-01 and MIABIS-SAMPLE-05-02 are required if any ontology information is provided | MIABIS-SAMPLE-05-02 |
| Anatomical site ontology code        | Anatomical site code from the selected anatomical site ontology version | String |    | MIABIS-SAMPLE-05-03   |
| Anatomical site ontology description | Description from the selected anatomical site ontology code | String |    | MIABIS-SAMPLE-05-04   |
| Anatomical site free text            | Explanation about Anatomical site in case of unknown Anatomical site or insufficient information  | String |    | MIABIS-SAMPLE-05-05   |