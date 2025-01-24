Add provenance-related information to Event entity in [Sample, Sample Donor and Event](https://github.com/BBMRI-ERIC/miabis/tree/master/Sample%2BSampleDonor%2BEvent).
This could be achieved by extending the [Event v1.1](https://github.com/BBMRI-ERIC/miabis/blob/5a478a90ad31bc0164d76566ee3d948c76a925a6/Sample%2BSampleDonor%2BEvent/V1/Data-describing-Event.md) list with the following attributes

...
|Attribute Code| Attribute name | Data type | Description | Allowed values | Constraints | Cardinality | Comment |
|---|---|---|---|---|---|---|---|
| MIABIS-EVENT-05-DRAFT| Event name | String/Enumerated values | Name of the event (preferably in English)| ... |...| 1..1 | |
| MIABIS-EVENT-06-DRAFT| Event description| String | Description of the event in English | | Free text description of the event.| ... | ...|
| MIABIS-EVENT-07-DRAFT| Event contact information |Structured data | Contact information for the contact person/person responsible of the event (Structured attribute)| [See Contact information](https://github.com/BBMRI-ERIC/miabis/blob/5a478a90ad31bc0164d76566ee3d948c76a925a6/all%20structured%20data.md#contact-information)|...| ...| The person who committed the event action|
