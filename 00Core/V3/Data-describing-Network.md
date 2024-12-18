# Data describing Network entity

## Definition

For MIABIS Core v3 purposes, Network is defined as a group of interconnected biobanks, collections and/or research resources with defined common governance. Networks are another layer of organisational unit that can consist of biobanks, collections, research resources or a mixture of all of the above. Via Network entity this new level of orgnisational aspects can be described. Similar to biobank, networks do not contain samples and data directly, as they are embedded in collections. 

The Network is first introduced in Core v3 by [Eklund et al. 2024](https://doi.org/10.1089/bio.2023.0074). 

## Attribute list

|Attribute Code | Attribute Name | Data Type | Description | Constraints | Allowed Values | Cardinality
|---|---|---|---|---|---|---|
|MIABIS-NETWORK-01| ID| Text| ID of the Network.| The ID is technical and given by the implementation. Implementation will provide instructions on how to form the ID||1
|MIABIS-NETWORK-02| Acronym| Text| Short name in use for the network. If applicable.||| 0..1
|MIABIS-NETWORK-03| Name| Text| Name of the network (preferably in English).|||1
|MIABIS-NETWORK-04| URL| Text| Complete http-address for the Network.||| 0..1
|MIABIS-NETWORK-05| Juristic person| Text| Juristic person i.e. a university, concern, county council etc. for the network.|||1
|MIABIS-NETWORK-06| Country| Text| Two letter code for the country of the Network.||ISO-standard 3166 alpha2. In the Network multiple values are allowed|1..n
|MIABIS-NETWORK-07| Contact information| Text| Contact information for the contact person/person responsible of the Network.|Free text description of the network. Recommendation max. 2000 char.| (Structured attribute) [MIABIS-NETWORK-07](https://github.com/BBMRI-ERIC/miabis/blob/master/all%20structured%20data.md#contact-information).| 1
|MIABIS-NETWORK-08| Description| Text| Description of the network in English.||| 0..1
|MIABIS-NETWORK-09| Network status| Enumerated values| The state of the network functions.|| Active, Ended, Other| 1
|MIABIS-NETWORK-10| Network members| Text| Names of the entities (organisations, biobanks, collections and/or research resources, etc.) involved in the Network.||| 0..1
|MIABIS-NETWORK-11| Common collaboration topics| Enumerated values| Topics that the network partners collaborate on.||Common charter, Common SOPs, Common data access policy, Common sample access, policy, Common MTA, Common image access policy, Common image MTA, Common representation, Common URL, Other.|0..n
|MIABIS-NETWORK-12| Network type| Enumerated values| Type or main collaboration area of the network.| | BBMRI-ERIC National Node network, Biobank network, Collection network, Disease-specific network, Project network, Rare Disease network, Other| 0..n
