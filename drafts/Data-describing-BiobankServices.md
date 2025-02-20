> [!WARNING]  
> This is a draft, contents may change.

The scope of the "Biobank and Biomolecular Research Services" component aims to improve the MIABIS to help researchers find the right biobank or further biomolecular research services services by adding a new data structure.

| Attribute Code | Attribute Name | Description | Data type | Allowed values| Constraints | Cardinality | 
| --- | --- | --- | --- | --- | --- | ---|
| MIABIS-SERVICES-01 | ID | ID of the service. | String | | The ID is technical and given by the implementation. Implementation will provide instructions on how to form the ID | 1 |
| MIABIS-SERVICES-02 | Name | Name of the service (preferably in English) | String | | | 1  |
| MIABIS-SERVICES-03 | Service Type  | Related service types  | Enumerated values |  |  | 1-n  |
| MIABIS-SERVICES-04 | Acronym | Short name in use for the service. If applicable.  | String  |  |  |
| MIABIS-SERVICES-05 | Description | Description of the service (in English) | String | |    | 1  |
| MIABIS-SERVICES-06 | URL   | URL address for the complete service description. If available   | String  |  | | 0-1    |
| MIABIS-SERVICES-07 | Device  | Name of the device(s) if the service is provided with the use of them  | String  |  |   | 0-n   |
| MIABIS-SERVICES-08 | Device system | Name of a software system or platform if important for the device characteristics  | String   |  | | 0-n         |
| MIABIS-SERVICES-09 | Technology Readiness Level | Self-assessed Technology Readiness Level of the service maturity.  | Enumerated values | Can be one of the following values:<br>TLR-1 Basic principles observed<br>TLR-2 Technology concept formulated<br>TLR-3 Experimental proof of concept<br>TLR-4 Technology validated in lab<br>TLR-5 Technology validated in relevant environment (industrially relevant environment in the case of key enabling technologies)<br>TLR-6 Technology demonstrated in relevant environment (industrially relevant environment in the case of key enabling technologies)<br>TLR-7 System prototype demonstration in operational environment<br>TLR-8 System complete and qualified<br>TLR-9 Actual system proven in operational environment (competitive manufacturing in the case of key enabling technologies; or in space) | | 0-1 |
| MIABIS-SERVICES-10 | Access description | Description of the access policy of the service | String  |  |  | 1           |
| MIABIS-SERVICES-11 | Access description URL     | URL of the service access policy. If available.  | String  | | | 0-1         |
| MIABIS-SERVICES-12 | Unit of access  | Information about a standard unit used in calculations of costs of service provision | String   |  | | 0-1         |
| MIABIS-SERVICES-13 | Unit cost    | Cost per unit    | String  |  |  | 0-1         |
| MIABIS-SERVICES-14 | Quality standard   | The standards and/or technical specifications that the service provider is certified or accredited for. | Enumerated values |  |   | 0-n         |
| MIABIS-SERVICES-15 | Contact Information        | Contact information for the contact person/person responsible of the service (Structured attribute).    | Structured data   | Can be one or more of the following values: ISO 20387, ISO 9001, ISO 15189, ISO 15190, ISO 17020, ISO 17025, ISO 17034, ISO 17043, ISO 21899, ISO 20166-1, ISO 20166-2, ISO 20166-3, ISO 20184-1, ISO 20184-2, ISO 20184-3, ISO 20186-1, ISO 20186-2, ISO 20186-3, CEN/TS 16826-1, CEN/TS 16826-2, CEN/TS 16827-1, CEN/TS 16827-2, CEN/TS 16827-3, CEN/TS 16835-1, CEN/TS 16835-2, CEN/TS 16835-3, CEN/TS 16945    |  | 0-1         |
