# Definition

Introduced in 2020 ([Eklund et al., 2020](https://doi.org/10.1089/bio.2019.0129)), the entity **Event** is a generic template that represents something that happens in a given place and time and is related to the sample and/or sample donor.

| Attribute Code | Attribute Name | Description | Data Type | Allowed Values | Constraints | Cardinality |
| --- | --- | --- | --- | --- | --- | --- |
| MIABIS-EVENT-01 | Event ID | Random ID for each event, created by the database implementation. | String | | Required if event is recorded | 1 |
| MIABIS-EVENT-02 | Event date and time | The date and time of the event. Coding ISO8601. Can also be partial, for example YYYY | Datetime, yyyy-mm-ddThh:mm:ss | | Use either age at event or event date, not both. Date of birth is required when event date is used. | 0 |
| MIABIS-EVENT-03 | Age at event | Age at the time of the event | Decimal | | Use either age at event or event date and time, not both | 0 |
| MIABIS-EVENT-04 | Age at event unit | Unit defining age at event | Enumerated Values | Years, Months, Weeks, Days, Gestational weeks | When age at event is provided, age unit is required | 0 |
