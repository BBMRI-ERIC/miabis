## MIABIS proposal for Sample Donor

**NOTE!** The attribute list for Sample Donor is **tentative** and might still be subject to any additional changes.

In the proposal for extending MIABIS with Sample and Sample Donor components, Sample Donor has been defined as  a person whose sample is or has been stored in a sample collection in a biobank.

| Attribute Code| Attribute Name| Allowed Values| Description| Constraints|
|---|---|---|---|---|
| MIABIS-SAMPLEDONOR-01| Sample donor ID| Coded String, ASCII| Sample donor ID. Unique ID-code of the sample donor within the sample collection/biobank| Pseudonymized, alphanumeric|
| MIABIS-SAMPLEDONOR-02| Sex| Text list| Biological sex of the person. Can be one of the following values: MIABIS-13| |
| MIABIS-SAMPLEDONOR-03| Data categories| Structured data| The data categories from which data from the person is available. Can be several values (list modified after MIABIS-2.0-13).| |
| MIABIS-SAMPLEDONOR-04| Birth year| Text string, ISO8601| Birth year of the sample donor.| |
