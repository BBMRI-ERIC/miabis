## Definition

For MIABIS Core 2.0 purpose, Study represents a set of samples brought together in the context of a research study. A study can combine samples from several sample collections and from several biobanks. One sample can be included in multiple studies. (Merino-Martinez et al. Biopreserv Biobank. 2016; 14(4):298-306).

| Attribute Code| Attribute Name| Allowed Values| Description| 
|---|---|---|---|
| MIABIS-2.0-01| ID| Text| The unique ID or acronym of the study| 
| MIABIS-2.0-02| Name| Text| The name of the study in English| 
| MIABIS-2.0-08| Description| Text| A description of the study aim. Recommendation max. 2000 char.| 
| MIABIS-2.0-18| Principal Investigator| Text| The name of the person responsible for the study e.g. the principal investigator| 
| MIABIS-2.0-07| Contact information| Structured data| Contact information for the contact person of the study [MIABIS-2.0-07](Structured-data-and-lists.md#contact-information) and [MIABIS-2.0-23](Structured-data-and-lists.md#researcher-information)| 
| MIABIS-2.0-19| Study design| Text list| The design of the study. Can be one or several values: [MIABIS-2.0-19](Structured-data-and-lists.md#miabis-20-16-and-study-design-miabis-20-19)| 
| MIABIS-2.0-09| Sex| Text list| The sex of the study participants. Can be one or more of the following values: Male, Female, Unknown, Undifferentiated [MIABIS-2.0-09](Structured-data-and-lists.md#sex)| 
| MIABIS-2.0-10| Age Low| Integer| Age of the youngest study participant at time of inclusion| 
| MIABIS-2.0-11| Age High| Integer| Age of the oldest study participant at time of inclusion| 
| MIABIS-2.0-12| Age Unit| Text list| Unit defining Age Low and Age High. Can be one of the following values: years, months, weeks, days| 
| MIABIS-2.0-13| Data categories| Text list| The type of data that is associated with the samples in the study. Can be several values [MIABIS-2.0-13](Structured-data-and-lists.md#data-categories)| 
| MIABIS-2.0-14| Material type| Text list| The biospecimen saved from a biological entity for propagation e.g. testing, diagnostics, treatment or research purposes. Can be several values [MIABIS-2.0-14](Structured-data-and-lists.md#material-type)| 
| MIABIS-2.0-20| Total number of participants| Integer| Total number of individuals recruited to the study| 
| MIABIS-2.0-21| Total number of sample donors| Integer| Total number of individuals with biological samples in the study| 
| MIABIS-2.0-22| Inclusion criteria| Text list| Information on type of parameters that determine which individuals will become study participants. Can be several values [MIABIS-2.0-22](Structured-data-and-lists.md#inclusion-criteria)| 
