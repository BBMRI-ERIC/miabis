# Motivation
Implementation of the MIABIS Detailed Sample Type (from the MIABIS component Sample, Sample Donor and Event, [Eklund et al. 2020](https://www.liebertpub.com/doi/10.1089/bio.2019.0129)) into several use cases (listed below) revealed over time, that a minor update was required in order to reflect the diverse and evolving range of human biological samples that are essential for clinical care and life science research. These samples are employed in a multitude of fields, including drug discovery, cell biology, biomarker analysis, patient-derived xenograft models, non-invasive prenatal testing, diagnostics for the novel coronavirus, and liquid biopsy tests. They play a pivotal role in the advancement of biomedical research and healthcare. It is therefore imperative that these sample types are accurately and comprehensively categorised in order to support the requisite complexity and specificity of modern biomedical applications.

## Use Cases
 - CoConnect	COVID - Curated and open analysis and research platform	
 - DKTK	German Cancer Research Center	
 - BBMRI-ERIC Directory (Molgenis)	global biobank community and was created in collaboration with the BBMRI National Nodes and partners	
 - RD-Connect (EJP-RD?)	multidisciplinary project that united partners from the EU and beyond to create an integrated global infrastructure for Rare Disease research	
 - GBA 	German Biobank Alliance
		
## Mapped ontologies		
 - **Cell Ontology (CL)**	An ontology of cell types.
 - **The Cell Line Ontology (CLO)** Community-based ontology of cell lines. The CLO is developed to unify publicly available cell line entry data from multiple sources to a standardized logically defined format based on consensus design patterns.
 - **Infectious Disease Ontology (IDO)**	The core Infectious Disease Ontology is an ontology of entities generally relevant to both the biomedical and clinical aspects of infectious diseases, including terms such as 'pathogen', 'host', 'vector', and 'vaccine'. The structure of IDO adheres to the Basic Formal Ontology. Terms in IDO that are within the scope of other OBO Foundry ontologies, such as the Gene Ontology, are derived from those ontologies. Other terms are defined as cross-products of terms from Foundry ontologies to the extent possible. For more information, see http://www.infectiousdiseaseontology.org/Home.html.
 - **NCI Thesaurus OBO Edition (NCIT)**	The NCIt OBO Edition project aims to increase integration of the NCIt with OBO Library ontologies. NCIt is a reference terminology that includes broad coverage of the cancer domain, including cancer related diseases, findings and abnormalities.
 - **Ontology for Biomedical Investigations (OBI)**	An ontology for representing biomedical investigations, including study designs, the collection and preparation of the targets of investigation, assays, instrumentation and reagents used, as well as the data generated and the types of analysis performed on the data to reach conclusions, and their documentation.
 - **Ontology for BIoBanking (OBIB)**	An ontology for the annotation and modeling of the activities, contents, and administration of a biobank. Biobanks are facilities that store specimens, such as bodily fluids and tissues, typically along with specimen annotation and clinical data. OBIB is based on a subset of the Ontology for Biomedical Investigation (OBI), has the Basic Formal Ontology (BFO) as its upper ontology, and is developed following OBO Foundry principles. The first version of OBIB resulted from the merging of two existing biobank-related ontologies, OMIABIS and biobank ontology.
 - **PRotein Ontology (PRO)** An ontology that formally defines taxon-specific and taxon-neutral protein-related entities in three major areas: proteins related by evolution; proteins produced from a given gene; and protein-containing complexes.
 - **Uber-anatomy ontology (Uberon)** An integrated cross-species anatomy ontology representing a variety of entities classified according to traditional anatomical criteria such as structure, function and developmental lineage. The ontology includes comprehensive relationships to taxon-specific anatomical ontologies, allowing integration of functional, phenotype and expression data.
		
## Mapped Specimen descriptions from other standards		
 - **SPREC** V4.0 https://www.liebertpub.com/doi/10.1089/bio.2024.0010
 - **OMOP**	https://athena.ohdsi.org/search-terms/terms	
 - **SNOMED CT**	https://browser.ihtsdotools.org/?perspective=full&conceptId1=123038009&edition=MAIN/2023-09-01&release=&languages=en	
 - **HL7 FHIR**	https://terminology.hl7.org/3.1.0/CodeSystem-v2-0487.html

## List of Updates in V1.1

Sample
 - Aligned with SPREC V4
 - Detailed sample type: Added 4 new sample types (Isolated or enriched exosomes, Isolated Tumor Cell (neoplastic cell), Organoids, Tissue (fresh frozen)) and omitted the "aggregated sample type"
 - Use restrictions -> use and access conditions (align with Core V3)
 - Sample storage temperature -> storage temperature (aligned with Core V3)
 - Anatomical site attribute -> [structured attribute](https://github.com/BBMRI-ERIC/miabis/blob/master/all%20structured%20data.md#anatomical-site)
 - Added "sample source" -> aligned with Core Core V3

Sample Donor
 - "Sex" -> aligned value list aligned with Core V3
 - "Dataset Type" list -> aligned with Core V3
