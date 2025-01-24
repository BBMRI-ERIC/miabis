## Definition

Introduced in 2020 ([Eklund et al., 2020](https://www.liebertpub.com/doi/10.1089/bio.2019.0129)), the component <strong>Event</strong> is a generic template that represents something that happens in a given place and time and is related to the sample and/or sample donor.

| Attribute Code| Attribute Name| Allowed Values| Description| Constraints| Cardinality|
|---|---|---|---|---|---|
| MIABIS-EVENT-01| Event ID| Coded string| Random ID for each event, created by the database implementation.| Required if event is recorded| 1|
| MIABIS-EVENT-02| Event date and time| yyyy-mm-ddThh:mm:ss| The date and time of the event. Coding ISO8601. Can also be partial, for example YYYY| Use either age at event or event date, not both. Date of birth ir required when event date is used.| 0|
| MIABIS-EVENT-03| Age at event| Decimal| Age at the time of the event| Use either age at event or event date and time, not both| 0|
| MIABIS-EVENT-04| Age at event unit| List: years, months, weeks, days, gestational weeks| Unit defining age at event| When age at event is provided, age unit is required| 0|
