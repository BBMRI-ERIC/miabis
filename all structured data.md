# All structured data

Structured data is a set of attributes that are grouped together and used to describe the same subject in more detail. The attributes embedded in the structured attributes are described here together with their entity-specific attribute codes.

* [Anatomical site](#anatomical-site)
* [Contact information](#contact-information)
* [Disease](#disease)


## Anatomical site

| Attribute Name | Description | Data Type | Constraints | Attribute Codes |
|-----|-----|-----|-----|-----|
| Anatomical site ontology             | Name of ontology used for describing the anatomical source of the sample material, for example, ICD-O-3 topography code | String | MIABIS-SAMPLE-05-01 and MIABIS-SAMPLE-05-02 are required if any ontology information is provided | MIABIS-SAMPLE-05-01 |
| Anatomical site ontology version     | Version of selected ontology for anatomical site | String | MIABIS-SAMPLE-05-01 and MIABIS-SAMPLE-05-02 are required if any ontology information is provided | MIABIS-SAMPLE-05-02 |
| Anatomical site ontology code        | Anatomical site code from the selected anatomical site ontology version | String |    | MIABIS-SAMPLE-05-03   |
| Anatomical site ontology description | Description from the selected anatomical site ontology code | String |    | MIABIS-SAMPLE-05-04   |
| Anatomical site free text            | Explanation about Anatomical site in case of unknown Anatomical site or insufficient information  | String |    | MIABIS-SAMPLE-05-05   |
----

## Contact information

| Attribute Name| Description | Data Type | Constraints | Attribute Codes |
|-----|-----|-----|-----|-----|
| First name      | First name of the Contact | String  |                                       | MIABIS-BIOBANK-07-01, MIABIS-COLLECTION-05-01, MIABIS-RESEARCHRESOURCE-05-01, MIABIS-NETWORK-07-01   |
| Last name       | Last name of the the Contact | String |                              | MIABIS-BIOBANK-07-02, MIABIS-COLLECTION-05-02, MIABIS-RESEARCHRESOURCE-05-02, MIABIS-NETWORK-07-02   |
| Phone           | Phone to the Contact including international call prefix  | Formatted String |                               | MIABIS-BIOBANK-07-03, MIABIS-COLLECTION-05-03, MIABIS-RESEARCHRESOURCE-05-03, MIABIS-NETWORK-07-03   |
| Email           | Email address of the Contact person  | String |                              | MIABIS-BIOBANK-07-04, MIABIS-COLLECTION-05-04, MIABIS-RESEARCHRESOURCE-05-04, MIABIS-NETWORK-07-04   |
| Address         | Street name and street number or PO Box of the Contact person  | String |                               | MIABIS-BIOBANK-07-05, MIABIS-COLLECTION-05-05, MIABIS-RESEARCHRESOURCE-05-05, MIABIS-NETWORK-07-05   |
| ZIP             | ZIP of the Contact person | String |                               | MIABIS-BIOBANK-07-06, MIABIS-COLLECTION-05-06, MIABIS-RESEARCHRESOURCE-05-06, MIABIS-NETWORK-07-06   |
| City            | City of the Contact person  | String |                               | MIABIS-BIOBANK-07-07, MIABIS-COLLECTION-05-07, MIABIS-RESEARCHRESOURCE-05-07, MIABIS-NETWORK-07-07   |
| Country         | Country of the Contact person | String | ISO-standard 3166 alpha2      | MIABIS-BIOBANK-07-08, MIABIS-COLLECTION-05-08, MIABIS-RESEARCHRESOURCE-05-08, MIABIS-NETWORK-07-08   |
| Juristic Person | Juristic person for the researcher e.g. a university, concern, county council etc.  | String | Optional, use when applicable | MIABIS-BIOBANK-07-09, MIABIS-COLLECTION-05-09, MIABIS-RESEARCHRESOURCE-05-09, MIABIS-NETWORK-07-09   |
| Department      | Department (e.g. division), or corresponding affiliation of the Contact person | String | Optional, use when applicable | MIABIS-BIOBANK-07-10, MIABIS-COLLECTION-05-10, MIABIS-RESEARCHRESOURCE-05-10, MIABIS-NETWORK-07-10   |
| ORCID           | The persistent digital identifier that distinguishes researchers. As defined by ORCID | String | Optional, use when applicable | MIABIS-BIOBANK-07-11, MIABIS-COLLECTION-05-11, MIABIS-RESEARCHRESOURCE-05-11, MIABIS-NETWORK-07-11   |

----

## Disease

| Attribute Name | Description | Data Type | Constraints | Attribute Codes |
|-----|-----|-----|-----|-----|
| Disease Ontology             | Name of ontology used for disease. Can be several values e.g. ICD, SNOMED                   | String |             | MIABIS-COLLECTION-17-01, MIABIS-RESEARCHRESOURCE-15-01   |
| Disease Ontology Version     | Version of selected ontology for disease e.g. ICD-9, ICD-10, SNOMED-CT                      | String |            | MIABIS-COLLECTION-17-02, MIABIS-RESEARCHRESOURCE-15-02   |
| Disease Ontology Code        | Disease code or main category from the selected Disease Ontology Version e.g. C61           | String |             | MIABIS-COLLECTION-17-03, MIABIS-RESEARCHRESOURCE-15-03   |
| Disease Ontology Description | Description from the selected Disease Ontology Code e.g : Malignant neoplasm of prostate    | String |            | MIABIS-COLLECTION-17-04, MIABIS-RESEARCHRESOURCE-15-04   |
| Disease Free Text            | Explanation about disease or symptom in case of unknown disease or insufficient information | String |           | MIABIS-COLLECTION-17-05, MIABIS-RESEARCHRESOURCE-15-05   |

---




