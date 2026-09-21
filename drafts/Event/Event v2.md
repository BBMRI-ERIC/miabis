> [!WARNING]  
> This is a draft, contents may change.

Add provenance-related information to Event entity in [Sample, Sample Donor and Event](../../Individual).
This could be achieved by extending the [Event v1.1](../../Individual/Event.md) list with the following attributes

...

| Attribute Code | Attribute name | Data type | Description | Allowed values | Constraints | Cardinality | Comment |
| --- | --- | --- | --- | --- | --- | --- | --- |
| MIABIS-EVENT-05-DRAFT | Event name | String/Enumerated values | Name of the event (preferably in English) | ... | ... | 1..1 | |
| MIABIS-EVENT-06-DRAFT | Event description | String | Description of the event in English | | Free text description of the event. | ... | ... |
| MIABIS-EVENT-07-DRAFT | Event contact information | Structured data | Contact information for the contact person/person responsible of the event | [Contact information](../../Structured%20Data/Contact%20Information.md) | ... | ... | The person who committed the event action |
