# All attributes

Here are listed all the attributes currently forming MIABIS terminology. The table shows attribute names, descriptions and the entities they belong to. The attribute codes are left out from the table and can be found in the entity-specific tables. 

|Attribute Name | Description | Belongs to entity|
|---|---|---|
[Entity] ID | ID of the [entity] | Biobank, Collection, Research resource, Network, Sample, Sample donor, Event
Acronym | Short name in use for the [entity]. If applicable | Biobank, Collection, Research resource, Network
Name | Name of the [entity] (preferably in English) | Biobank, Collection, Research resource, Network
URL | Complete http-address for the [entity] | Biobank, Collection, Research resource, Network
Juristic Person | Juristic person i.e. a university, concern, county council etc. for the [entity] | Biobank, Network
Country | Two letter code for the country of the [entity] | Biobank, Network
Contact Information | Contact information for the contact person/person responsible of the [entity] (Structured attribute) | Biobank, Collection, Research resource, Network
Description | Description of the [entity] in English | Biobank, Collection, Research resource, Network
[Entity] status | The state of the [entity] functions: Active, Ended, Other | Collection, Research resource, Network
[Entity] members | Names of the entities (organisations, biobanks, collections and/or research resources, etc.) involved in the [entity]. | Network
Common collaboration topics | Topics that the [entity] partners collaborate on. Can be multiple values: Common charter, Common SOPs, Common data access policy, Common sample access, policy, Common MTA, Common image access policy, Common image MTA, Common representation, Common URL, Other. | Network
Network type | Type or main collaboration area of the network. Can be one or more of the following values: BBMRI-ERIC National Node network, Biobank network, Collection network, Disease-specific network, Project network, Rare Disease network, Other | Network
Sample source | The source from which the samples were collected or isolated. Can be one of the following values: Human, Animal, Environment | Collection, Research resource
Storage temperature | The long-term storage temperature at which the sample is stored after preparation, based on SPREC | Collection, Sample
The long-term storage temperature at which the sample is stored after preparation, based on SPREC v3.Sex | The biological sex of the individuals in the [entity]. Can be one or more of the following values: Male, Female, Unknown, Undifferentiated, Not applicable | Collection, Research resource, Sample donor
Age | Age at the time of the event | Event
Age Low | Age of youngest sample donor at time of sample donation | Collection, Research resource
Age High | Age of oldest sample donor at time of sample donation | Collection, Research resource
Age Unit | Unit defining Age at event. Can be one of the following values: Years, Months, Weeks, Days, Gestational weeks | Event
Age Low Unit | Unit defining Age Low. Can be one of the following values: Years, Months, Weeks, Days, Gestational weeks | Collection, Research resource
Age High Unit | Unit defining Age High. Can be one of the following values: Years, Months, Weeks, Days, Gestational weeks | Collection, Research resource
Dataset type | Types of datasets (groups of related data) obtained or otherwise derived from donors or their specimens. Can be one or more of the following values: Lifestyle dataset, Environmental dataset, Physiological dataset, Biochemical dataset, Clinical dataset, Psychological dataset, Genomic dataset, Proteomic dataset, Metabolomic dataset, Body (Radiological) image, Whole slide image, Photo image, Genealogical records, Other | Collection, Research resource, Sample donor
Detailed sample type | The sample type saved from a biological entity for testing, diagnostic, propagation, treatment or research purposes. Can be one of the following values: Amniotic fluid; Ascites fluid; Bile; Body cavity fluid; Bone; Bone marrow aspirate; Bone marrow plasma; Bone marrow, whole; Breast milk; Bronchoalveolar lavage; Buffy Coat; Cancer cell lines; Cerebrospinal fluid; Cord blood; Dental pulp; DNA; Embryo; Entire body organ; Faeces; Fetal tissue; Fibroblasts; Food specimen; Gas, exhaled (=breath); Gastric fluid; Hair; Immortalized cell lines; Isolated microbes; Isolated or enriched exosomes; Isolated Tumor Cell (neoplastic cell); Liquid Biopsy; Menstrual blood; Nail; Nasal washing; Organoids; Pericardial fluid; Peripheral blood mononuclear cells (PBMC); Placenta; Plasma; Pleural fluid; Post-mortem tissue; Primary cells; Protein; Red blood cells; RNA; Saliva; Semen; Serum; Specimen from environment; Sputum; Stem cells (and iPS cells); Swab; Sweat; Synovial fluid; Tears; Teeth; Tissue (fixed); Tissue (fresh frozen); Umbilical cord; Urine; Urine Sediment; Vitreous fluid; Whole blood; Whole blood, dried (e.g. Guthrie cards); Other | Sample (V1.1)
Sample content diagnosis | The ICD-10 diagnosis code describing content of the sample, such as whether the sample contains cancerous material. Can be one of the following values: Healthy, [ICD-10 code], Unknown, Not applicable | Sample
Anatomical site ontology | Name of ontology used for describing the anatomical source of the sample material, for example, ICD-O-3 topography code | Sample
Anatomical site ontology version | Version of selected ontology for anatomical site. | Sample
Anatomical site ontology code | Anatomical site code from the selected anatomical site ontology version | Sample
Anatomical site ontology description | Description from the selected anatomical site ontology code | Sample
Anatomical site free text | Explanation about Anatomical site in case of unknown Anatomical site or insufficient information | Sample
Sample content diagnosis | The ICD-10 diagnosis code describing content of the sample, such as whether the sample contains cancerous material | Collection, Research resource, Sample
Disease | The disease or disease category of main interest in the [entity], if any. Can be multiple diseases or disease categories. (Structured attribute) | Collection, Research resource, Entity
Sample collection setting | The context in which the sample collection was/is conducted. Can be one or more of the following values: Routine health care setting, Clinical trial, Research study, Public health/population based study, Museum and/or archeological collection, Environment, Unknown, Other | Collection, Research resource
[Entity] design | The overall design of the collection that explains how the collection was/is built up. Can one or more of the following values: Case-control, Cross-sectional, Longitudinal cohort, Twin-study, Quality control study, Population-based cohort, Disease-specific cohort, Birth cohort, Microbial collection (if applicable with resistance data), Reference collection, Rare disease collection, Other | Collection, Research resource
Use & Access conditions | The conditions that may change the availability of the samples/data in the collection. Can be one or more of the following values: Commercial use, Collaboration, Specific research use, Genetic data use, Outside EU access, Xenograft, Other animal work, Other | Collection, Research resource, Sample
Total number of subjects | Total number of subjects included in the [entity] | Collection, Research resource
Inclusion criteria | Information on type of parameters that determine which subjects will become [entity] participants. Can be several values: Health status, Hospital patient, Use of medication, Gravidity, Age group, Familial status, Sex, Country of residence, Ethnic origin, Population representative sampling, Lifestyle/Exposure, Other | Collection, Research resource
Publications | List of key publications produced in the [entity] (provide DOI’s, if possible) | Collection, Research resource
Infrastructural capabilities | The technical infrastructural capabilities that the [entity] can offer to the clients. Can be one or more of the following values: Sample storage, Data storage, Biosafety abilities | Biobank
Organisational capabilities | The organisational capabilities and services that the [entity] can provide to support clients. Can be one or more of the following values: Recontact with donors, Facilitating clinical trials, Setting up prospective collections, Access to omics data, Access to laboratory analysis data, Access to donors'clinical data, Access to pathology archive, Access to radiology archive, Access to national medical registries, Other | Biobank
Bioprocessing and analytical capabilities | Bioprocessing and analytical services that the [entity] can offer to the clients. Can be one or more of the following values: Biochemical analyses, Genomics, Nucleic acid extraction, Proteomics, Metabolomics, Histology, Cell-lines processing, Virology, Sample processing, Sample shipping, Sample quality control services, Other | Biobank
Quality Management standard | The standards that the [entity] is certified or accredited for, Can be one or more of the following values: ISO 20387, ISO 9001, Other | Biobank
Date and time | The date and time of the event, sample collection, sample creation or sample donor birth.  | Sample, Sample donor, Event
