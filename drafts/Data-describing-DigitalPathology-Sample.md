## Definition


In balloting, currently


Attribute Name | Description | Cardinality | Allowed Value | Comment | 
|---|---|---|---|---|
Collection Procedure | Describes performed procedure to obtain physical biospecimen from a donor for diagnostic or research purposes | 1:1 | Controlled Value Set based on CID 8109. Specimen Collection Procedure | Values as Biopsy, Excision, Scraping,... Bronchoalveolar lavage/washing, Cytobrush, Body Fluids collection, CSF (Cerebrospinal fluid) Collection are not included in the DICOM CID
Sample Type | Extends the MIABIS sample type with general anatomical and physical description of a collected bio-specimen | 1:1 | Controlled Value Set based on CID 8103. Anatomic Pathology Specimen Type | Values as e.g. Entire body, Tissue specimen, Smear sample Is CID 8103 enough? How to extend the MIABIS sample type attributes? |
Sample Relationships | Describes relationships between samples and samples, containers and images. | 0:n | (named) link to other entities | Should we provided named relationships? e.g., derivedFrom; sectionOf; Should we allow relations of “brothers”? e.g derivedFromTheSameBlock; derivedFromTheSamePrimarySampe; Can this be a concept used in different domains? e.g., a block is derived from a primary but also a scan is derived from a container; |
Fixative | Chemical substance, which preserve structural and biological properties of bio-specimens | 0:1 | Controlled Value Set based on CID 8114. Specimen Fixatives | none |
Embedding Medium | Substances enclose bio-specimens and provide support during sectioning | 0:1 | Controlled Value Set based on CID 8115. Specimen Embedding Media | none |
Sampling Procedure | Description of examining and sampling procedures that create physical samples from “parent samples” for further laboratory analysis | 0:1 | Controlled Value Set based on CID 8110. Specimen Sampling Procedure | Values as e.g. e.g. Dissection, Core sampling, Block sectioning, Touch preparation, Laser microdissection, Smear procedure; A sampling procedure can have a report linked, e.g. the gross evaluation; The collection procedure is outside of the laboratory the sampling procedure is applied after a (primary) sample arrives at the; pathology laboratory; Sampling procedure does not include image annotation”sampling” of a digital file e.g., annotation of tumor area |
Quality Assessment | Evaluates suitability of samples and containers for interpretation and further analysis performed according to the intended purpose | 0:1 | Free text and/or a Controlled Value Set (QC-OK, QC-PROBLEM) | Should we have different quality indicator for the differents steps? Preparation Q; Assay procedures (staining) Q; Scanning Q |
Sample Quantity | Amount of sample available | 0:1 | Number denoting e.g. ml or mg, or a flag to indicate availability | Can be used to indicate how much material is still available from a tissue block |
Section Thickness | Thickness of a tissue section given in micrometers | 0:1  | Number | We could also code a controlled value set as Medium, Thin, Ultrathin, ... Could also be added to the container as an overall attribute assuming that a container only contains sections with the same thickness |
