## MIABIS proposal for samples

| Attribute Code| Attribute Name| Allowed Values| Description| 
|---|---|---|---|
| MIABIS-39| Sample ID| Text| Unique ID of the sample within a sample collection, often represented by the sample barcode; text identifier, recommendation maximum 30 characters.| 
| MIABIS-40| Parent sample ID| Text| Unique ID within a sample collection of a parent sample. Only if the sample has a parent sample i.e. if the sample itself is an aliquot or a derivative from another sample.| 
| MIABIS-41| Material type| Text list| The biospecimen type saved from a biological entity for testing, diagnostic, propagation, treatment or research purposes. Can be several values [MIABIS-2.0-14](https://github.com/MIABIS/miabis/wiki/Structured-data-and-lists#material-type)| 
| MIABIS-42| Storage temperature| Text list| The long term storage temperature at which the samples are stored after preparation. Can be several values: [MIABIS-2.0-15](https://github.com/MIABIS/miabis/wiki/Structured-data-and-lists#storage-temperature)| 
| MIABIS-43| Sampled time| Date| The time when the sample is taken according to ISO 8601 i.e. YYYYMMDDThhmm| 
| MIABIS-44| Anatomical site| Structured list| The anatomical position of the body where the solid sample was taken from. MIABIS-44| 
| MIABIS-45| Sample Collection ID| Text| ID of the sample collection to which the sample belongs to. | 