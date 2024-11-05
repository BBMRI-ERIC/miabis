## Definition

currently in balloting

Attribute Name | Description | Cardinality | Allowed Value | Comment |
|---|---|---|---|---|
Container Configuration | Classifies a container based on the organization of its specimens | 1:1 | Controlled Value Set: • Tissue Microarray (TMA) - A slide containing multiple small tissue samples from various sources, arranged in a grid pattern for high-throughput analysis; • Multiple Patients - A slide containing specimens from more than one patient, arranged for comparative studies or educational purposes, but not in a TMA format; • Multiple Blocks - A slide with specimens from different tissue blocks, which can be from the same patient, facilitating the comparison of different tissue types or disease states; • Single Block - A slide prepared from a single tissue block, typically representing one specific tissue site or disease state of a patient; • Single Section / Cytology - A slide that carries only one section of tissue from a single block, focused on a specific area of interest within that specimen | none |
Container Identifier | A unique identifier of the container | 1:1 | Identifier | none |
Specimens | Identifies one or more specimens placed on/in a container | 1:n | List of Identifiers | Should also the position be given ? |
Container Type | Describes the type of the “non-biological” object used during handling, preparing and storing of bio-specimen | 1:1 | Controlled Value Set: CID 8101. Container Type, e.g. Tissue cassette; Microscope slide; Specimen vial (frozen samples), etc. | none |
Tissue Type | Identifies the type of tissue that is labeled and examined | 1:n | Controlled Value Set: Epithelial tissue; Muscle tissue; Muscle skeletal; Muscle smooth; Muscle cardiac; Connective tissue; Connective tissue loose; Connective tissue dense; Connective tissue; Fat; Connective tissue lymphatic; Connective Tissue Blood; Connective tissue cartilage; Nervous tissue;| none |
Cell Type | Identifies a subset or a selected group of cells labeled and examined by the laboratory assay | 0:n | Controlled Value Set: e.g., Goblet cells; Leukocytes, B-cell type; Leukocytes, T-cell type | This attribute (optional but recommended) adds a “detailed” information to the tissue type which is a required attribute. Can the “Cell Type” attribute replace the “Tissue Type” attribute? In other word, is it possible to define the cell type for each assay? |
Pathogen Type | Classifies the type of a pathogenic microorganism(s) for which a test has been performed | 0:1 | Controlled Value Set: Viruses; Bacteria; Fungi; Parasites; | e.g., Gomori methenamine silver stain (GMS) for Fungi; Acid-Fast Bacilli (AFB) for Bacterium Do you agree to include this attribute or the “Pathogen Identifier” attribute is enough? |
Pathogen Identifier | Identifies the type of a microorganism(s) for which a test has been performed | 0:1 | How to code the values, link to controlled vocabularies, ontologies? e.g., Gomori methenamine silver stain (GMS) for Pneumocystis Carinii , Acid-Fast Bacilli (AFB) for Mycobacterium Tuberculosis | There is a list from the CDC, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1480044/ Is there a registry or list which is used in EU to identify Pathogens? |
Biomarker Type | Clssifies the basic cellular component of a biospecimen that has been tested or labeled | 0:1 | Controlled Value Set: Protein; DNA (Nucleic Acid); RNA (Nucleic Acid); Carbohydrate; Lipid; Inorganic ions; e.g., Oli Red O “stains” Lipid; Haematoxylin “stains” DNA and RNA; Pearls iron “stains” Fe2+ (Inorganic ions); IHC for specific proteins; FISH for a DNA segment etc. | Conditionally required if the attribute “Assay type” is not H&E |
Biomarker Spatial Localization | Identifies a subcellular location of a biomarker or biomarkers | 0:1 | Controlled Value Set: Extracellular matrix; Cell membrane (plasma membranes); Cytoplasm; Nucleus; Microorganism; Other | The value „Microorganism“ is specified in this context, despite the fact that Microorganisms reside in one or more of the specified cellular substructure. The value „Other“ can be used to provide detailed sublocalizion within a specific cellular compartment, e.g., Mitochondria |
Assay Type | Describes a laboratory test performed on a bio-specimen(s) mounted on a glass slide (container) | 1:1 | Controlled Value Set: Hematoxylin and Eosin stain; Special stains; Immunohistochemistry; Immunocytochemistry; Immunofluorescence; In situ hybridization; Fluorescence in situ hybridization; Fluorescent multiplex immunohistochemistry; Multiplex immunohistochemistry; Other | The value “Hematoxylin and Eosin stain” and “Special Stains” are the only values that are considered laboratory staines. We intentionally separate them from other targeted assays. This Attribute covers only assays that are sources of Digital Pathology Files. Other assays such as NGS e.g. are not covered under this attribute. |
Special Stin Technique | Identifies the method of staining technique performed to visualize a selected tissue type or tissue element, a cell type, or a pathogene. This includes all staining techniques used for tissue and cytology samples except for the H&E stain method | 1:0 | Free text, e.g., Oil Red O staining; Masson's Trichrome, etc | Whereas H&E stain is considered a routine procedure and general ”not special” stain for almost all tissue types, defined special stains are performed either a) routinely for a subset of samples e.g., Masson's Trichrome is a routine stain for liver and kidney biopsies. Or b) as targeted stain e.g., Acid-Fast Bacilli (AFB) is requested for samples where Tuberculosis is a differential diagnosis. Additional information are to be captured under the “Dye Name” attribute |
Dye Name | Identities a neutral or synthetic colored substance that is able to react with defined tissues or cellular components | 1:0 | Controlled Value Set: CID 8112. Specimen Stain. e.g., Alcian Blue 8GX, | Can be classified based on the chemical structure or application use, etc. Dye name can be the same name given to a special stain. Do we include Chromogenic Substrates and Fluorophore Substances as Dyes? Is CID 8112. Specimen Stain enough or a Free Text? |
Antibody Name | Identifies the name of an antibody used to visualize and test an antigen | 0:1 | Controlled Value Set or free text of the most common used antibodies, e.g. PDL1; HER2; etc. | none |
Antibody Identifier | Specifies a unique ID for an antibody used in an assay. The UID helps to obtain detailed information about the antibody such as clonality, host, vendor and catalogue number. | 0:1 | Controlled Value Set e.g. from https://www.antibodyregistry.org/ | Is the source “Antibody Registry https://www.antibodyregistry.org/” enough or do you suggest additional or other sources? |
Chromogenic Substrate Name | Identifies the name of a chromogenic compound used in an assay | 0:n | Controlled Value Set : 3,3′-Diaminobenzidine (DAB); 3-Amino-9-Ethylcarbazole (AEC); 3,3 ́,5,5 ́-tetramethylbenzidine (TMB); Fast red, Permanent red, Emerald; BCIP/NBT; Other| none |
Fluorophore Substance Name | Identifies the name of a fluorescent material used in an assay | 0:n | Controlled Value Set e.g., DAPI, 4′,6-diamidino-2-phenylindole; Phalloidin; | none |
FISH Signal Pattern | Describes a spatial location of fluorescent probes or signals | 0:1 | Controlled Value Set : Deletion probes; Amplification probes; Dual-colour breakapart probes; Deletion/fusion probes; Tri-colour breakapart probes; Translocation, dual fusion probes; Other | none |
FISH Probe Identifier | Identifies the name of a probe(s) used in FISH assays mainly provides a gene name or specific DNA segment | 0:n | Controlled Value Set, e.g., BCL2 Break Apart FISH Probe | Is there a probe registry similar to the antibody registry? |
Counter Labeling | Provides information on the counter labeling technique used to highlight certain cellular or tissue structures as a complementary method to the principal labeling to be analyzed | 1:n | Controlled Value Set, e.g 1) Hematoxylin commonly used to label nuclei as an essential step of IHC procedures that are compatible with bright-field microscopy. 2) DAPI labels nuclei for procedures that are compatible with dark-field microscopy | This attribute is a “macro” type |



