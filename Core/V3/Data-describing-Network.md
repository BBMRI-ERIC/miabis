# Data describing Network entity

## Definition

For MIABIS Core v3 purposes, Network is defined as a group of interconnected biobanks, collections and/or research resources with defined common governance. Networks are another layer of organisational unit that can consist of biobanks, collections, research resources or a mixture of all of the above. Via Network entity this new level of orgnisational aspects can be described. Similar to biobank, networks do not contain samples and data directly, as they are embedded in collections (Eklund et al. Biopres biobank. 2024 [in press]). 

## Attribute list

|Attribute Code|Attribute Name|Allowed Values|Description|Constraints|Cardinality
|---|---|---|---|---|---|
|MIABIS-NETWORK-01| ID| Text| ID of the network.| The ID is technical and given by the implementation. Implementation will provide instructions on how to form the ID| 1
|MIABIS-NETWORK-02| Acronym| Text| Short name in use for the network. If applicable.| | 0..1
|MIABIS-NETWORK-03| Name| Text| Name of the network (preferably in English).| | 1
|MIABIS-NETWORK-04| URL| Text| Complete http-address for the network.| | 0..1
|MIABIS-NETWORK-05| Juristic person| Text| Juristic person i.e. a university, concern, county council etc. for the network.| | 1
|MIABIS-NETWORK-06| Country| Text| Two letter code for the country of the network.| ISO-standard 3166 alpha2. In Network component multiple values are allowed| 1..n
|MIABIS-NETWORK-07| Contact information| Text| Contact information for the contact person/person responsible of the network (Structured attribute) [MIABIS-NETWORK-07](https://github.com/BBMRI-ERIC/miabis/blob/master/Structured-data-and-lists.md#contact-information).| Free text description of the network. Recommendation max. 2000 char.| 1
|MIABIS-NETWORK-08| Description| Text| Description of the network in English.| | 0..1
|MIABIS-NETWORK-09| Network status| Enumerated values| The state of the network functions: Active, Ended, Other| | 1
|MIABIS-NETWORK-10| Network members| Text| Names of the entities (organisations, biobanks, collections and/or research resources, etc.) involved in the network.| | 0..1
|MIABIS-NETWORK-11| Common collaboration topics| Enumerated values| Topics that the network partners collaborate on. Can be multiple values: Common charter, Common SOPs, Common data access policy, Common sample access, policy, Common MTA, Common image access policy, Common image MTA, Common representation, Common URL, Other.| | 0..n
