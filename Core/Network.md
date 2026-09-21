# Data describing Network entity

## Definition

For MIABIS Core v3 purposes, Network is defined as a group of interconnected biobanks, collections and/or research resources with defined common governance. Networks are another layer of organisational unit that can consist of biobanks, collections, research resources or a mixture of all of the above. Via Network entity this new level of orgnisational aspects can be described. Similar to biobank, networks do not contain samples and data directly, as they are embedded in collections.

The Network is first introduced in Core v3 by [Eklund et al. 2024](https://doi.org/10.1089/bio.2023.0074).

## Attribute list

| Attribute Code | Attribute Name | Description | Data Type | Allowed Values | Constraints | Cardinality |
| --- | --- | --- | --- | --- | --- | --- |
| MIABIS-NETWORK-01 | ID | ID of the Network. | Text | | The ID is technical and given by the implementation. Implementation will provide instructions on how to form the ID | 1 |
| MIABIS-NETWORK-02 | Acronym | Short name in use for the network. If applicable. | Text | | | 0..1 |
| MIABIS-NETWORK-03 | Name | Name of the network (preferably in English). | Text | | | 1 |
| MIABIS-NETWORK-04 | URL | Complete http-address for the Network. | Text | | | 0..1 |
| MIABIS-NETWORK-05 | Juristic person | Juristic person i.e. a university, concern, county council etc. for the network. | Text | | | 1 |
| MIABIS-NETWORK-06 | Country | Two letter code for the country of the Network. | Text | ISO-standard 3166 alpha2. In the Network multiple values are allowed | | 1..n |
| MIABIS-NETWORK-07 | Contact information | Contact information for the contact person/person responsible of the Network. | Structured data | [Contact Information](../Structured%20Data/Contact%20Information.md) | | 1 |
| MIABIS-NETWORK-08 | Description | Description of the network in English. | Text | | | 0..1 |
| MIABIS-NETWORK-09 | Network status | The state of the network functions. | Enumerated values | Active, Ended, Other | | 1 |
| MIABIS-NETWORK-10 | Network members | Names of the entities (organisations, biobanks, collections and/or research resources, etc.) involved in the Network. | Text | | | 0..1 |
| MIABIS-NETWORK-11 | Common collaboration topics | Topics that the network partners collaborate on. | Enumerated values | Common charter, Common SOPs, Common data access policy, Common sample access, policy, Common MTA, Common image access policy, Common image MTA, Common representation, Common URL, Other. | | 0..n |
| MIABIS-NETWORK-12 | Network type | Type or main collaboration area of the network. | Enumerated values | BBMRI-ERIC National Node network, Biobank network, Collection network, Disease-specific network, Project network, Rare Disease network, Other | | 0..n |
