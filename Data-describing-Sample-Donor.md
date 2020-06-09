## MIABIS proposal for Sample Donor

**NOTE!** The attribute list for Sample Donor is **tentative** and might still be subject to any additional changes.

In the proposal for extending MIABIS with Sample and Sample Donor components, Sample Donor has been defined as  a person whose sample is or has been stored in a sample collection in a biobank.

| Attribute Code| Attribute Name| Allowed Values| Description| Constraints| Cardinality|
|---|---|---|---|---|---|
| MIABIS-SAMPLEDONOR-01| Sample donor ID| Coded String| Sample donor ID. Unique ID code of the sample donor within the sample collection/biobank| Pseudonymized, alphanumeric| 1|
| MIABIS-SAMPLEDONOR-02| Sex| Text list| Biological sex of the sample donor. MIABIS-2.0-9| | 1|
| MIABIS-SAMPLEDONOR-03| Data categories| Structured data| The data categories from which data are available or can be linked to the sample donor. Can be several values (list modified after MIABIS-2.0-13).| |
| MIABIS-SAMPLEDONOR-04| Birth date| yyyy-mm-ddThh:mm:ss| Birth date of the sample donor. Coding ISO8601. Can also be partial, for example, YYYY.| Date of birth is required when Event date (MIABIS-EVENT-02) is used, otherwise partial date, as in birth year, can be used| 0|
