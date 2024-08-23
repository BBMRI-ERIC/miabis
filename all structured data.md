# All structured data

Structured data is a set of attributes that are grouped together and used to describe the same subject in more detail. The attributes embedded in the structured attributes are described here together with their entity-specific attribute codes.

* [Contact Information](#contact-information)
* [Disease](#disease)
* [Anatomical site](#anatomical-site)


## Contact information

| Attribute Name| Data type | Description | Constraints | Attribute Code_BIOBANK | Attribute Code_COLLECTION | Attribute Code_RESEARCHRESOURCE | Attribute Code_NETWORK |
|-----|-----|-----|-----|-----|-----|-----|-----|
| First name      | Text           | First name of the Contact |                               | MIABIS-BIOBANK-07-01   | MIABIS-COLLECTION-05-01   | MIABIS-RESEARCHRESOURCE-05-01   | MIABIS-NETWORK-07-01   |
| Last name       | Text           | Last name of the the Contact |                               | MIABIS-BIOBANK-07-02   | MIABIS-COLLECTION-05-02   | MIABIS-RESEARCHRESOURCE-05-02   | MIABIS-NETWORK-07-02   |
| Phone           | Formatted Text | Phone to the Contact including international call prefix  |                               | MIABIS-BIOBANK-07-03   | MIABIS-COLLECTION-05-03   | MIABIS-RESEARCHRESOURCE-05-03   | MIABIS-NETWORK-07-03   |
| Email           | Text           | Email address of the Contact person  |                               | MIABIS-BIOBANK-07-04   | MIABIS-COLLECTION-05-04   | MIABIS-RESEARCHRESOURCE-05-04   | MIABIS-NETWORK-07-04   |
| Address         | Text           | Street name and street number or PO Box of the Contact person  |                               | MIABIS-BIOBANK-07-05   | MIABIS-COLLECTION-05-05   | MIABIS-RESEARCHRESOURCE-05-05   | MIABIS-NETWORK-07-05   |
| ZIP             | Text           | ZIP of the Contact person |                               | MIABIS-BIOBANK-07-06   | MIABIS-COLLECTION-05-06   | MIABIS-RESEARCHRESOURCE-05-06   | MIABIS-NETWORK-07-06   |
| City            | Text           | City of the Contact person  |                               | MIABIS-BIOBANK-07-07   | MIABIS-COLLECTION-05-07   | MIABIS-RESEARCHRESOURCE-05-07   | MIABIS-NETWORK-07-07   |
| Country         | Text           | Country of the Contact person | ISO-standard 3166 alpha2      | MIABIS-BIOBANK-07-08   | MIABIS-COLLECTION-05-08   | MIABIS-RESEARCHRESOURCE-05-08   | MIABIS-NETWORK-07-08   |
| Juristic Person | Text           | Juristic person for the researcher e.g. a university, concern, county council etc.  | Optional, use when applicable | MIABIS-BIOBANK-07-09   | MIABIS-COLLECTION-05-09   | MIABIS-RESEARCHRESOURCE-05-09   | MIABIS-NETWORK-07-09   |
| Department      | Text           | Department (e.g. division), or corresponding affiliation of the Contact person | Optional, use when applicable | MIABIS-BIOBANK-07-10   | MIABIS-COLLECTION-05-10   | MIABIS-RESEARCHRESOURCE-05-10   | MIABIS-NETWORK-07-10   |
| ORCID           | Text           | The persistent digital identifier that distinguishes researchers. As defined by ORCID | Optional, use when applicable | MIABIS-BIOBANK-07-11   | MIABIS-COLLECTION-05-11   | MIABIS-RESEARCHRESOURCE-05-11   | MIABIS-NETWORK-07-11   |

----


## Disease

| Attribute Name | Data type | Description | Constraints | Attribute Code_COLLECTION | Attribute Code_RESEARCHRESOURCE |
|-----|-----|-----|-----|-----|-----|
| Disease Ontology             | Text      | Name of ontology used for disease. Can be several values e.g. ICD, SNOMED                   |             | MIABIS-COLLECTION-17-01   | MIABIS-RESEARCHRESOURCE-15-01   |
| Disease Ontology Version     | Text      | Version of selected ontology for disease e.g. ICD-9, ICD-10, SNOMED-CT                      |             | MIABIS-COLLECTION-17-02   | MIABIS-RESEARCHRESOURCE-15-02   |
| Disease Ontology Code        | Text      | Disease code or main category from the selected Disease Ontology Version e.g. C61           |             | MIABIS-COLLECTION-17-03   | MIABIS-RESEARCHRESOURCE-15-03   |
| Disease Ontology Description | Text      | Description from the selected Disease Ontology Code e.g : Malignant neoplasm of prostate    |             | MIABIS-COLLECTION-17-04   | MIABIS-RESEARCHRESOURCE-15-04   |
| Disease Free Text            | Text      | Explanation about disease or symptom in case of unknown disease or insufficient information |             | MIABIS-COLLECTION-17-05   | MIABIS-RESEARCHRESOURCE-15-05   |

---


## Anatomical site

| Attribute Name  | Data type | Description | Constraints | Attribute Code_SAMPLE |
|-----|-----|-----|-----|-----|
| Anatomical site ontology             | Text      | Name of ontology used for describing the anatomical source of the sample material, for example, ICD-O-3 topography code | MIABIS-SAMPLE-05-01 and MIABIS-SAMPLE-05-02 are required if any ontology information is provided | MIABIS-SAMPLE-05-01 |
| Anatomical site ontology version     | Text      | Version of selected ontology for anatomical site | MIABIS-SAMPLE-05-01 and MIABIS-SAMPLE-05-02 are required if any ontology information is provided | MIABIS-SAMPLE-05-02 |
| Anatomical site ontology code        | Text      | Anatomical site code from the selected anatomical site ontology version |    | MIABIS-SAMPLE-05-03   |
| Anatomical site ontology description | Text      | Description from the selected anatomical site ontology code |    | MIABIS-SAMPLE-05-04   |
| Anatomical site free text            | Text      | Explanation about Anatomical site in case of unknown Anatomical site or insufficient information  |    | MIABIS-SAMPLE-05-05   |

