# Technology

| Attribute Name | Description | Data Type | Constraints | Cardinality | Belongs to Entity |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------- | ---- | ------------------------------------------------ |
| Measuring technique ontology | Name of ontology used for describing the applied measuring technique/assay. | String | Specify the relevant ontology you are using to describe the technology, e.g. NCI Thesaurus, OBI, etc. | 0..1 | Collection, Research Resource, Digital Pathology |
| Measuring technique ontology version | Version of selected ontology for describing the applied measuring technique/assay. | String | | 0..1 | Collection, Research Resource, Digital Pathology |
| Measuring technique ontology code | Ontology code describing the applied measuring technique/assay used in a Dataset, corresponding to the method used for measuring the corresponding variable(s). | String | Use the code value from the selected ontology | 0..1 | Collection, Research Resource, Digital Pathology |
| Measuring technique description | Text description of applied measuring technique/assay. Either from the selected ontology or a free text description. | String | Use the description text from the selected ontology | 0..1 | Collection, Research Resource, Digital Pathology |
| Measuring technique provider | Name of the vendor whose measuring technique/assay was applied in creating the dataset | String | | 0..1 | Collection, Research Resource, Digital Pathology |
| Measuring technique device | The vendor-stated name of the measuring device or platform applied to measure/derive data | String | | 0..1 | Collection, Research Resource, Digital Pathology |
| Measuring technique software name and version | Software/firmware name and versions of the measuring device applied | String | | 0..1 | Collection, Research Resource, Digital Pathology |
