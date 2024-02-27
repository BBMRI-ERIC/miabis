# Scope of the MIABIS Dataset Types Component

## Motivation
The MIABIS Core components define biobanks and their collections but lack detailed descriptions of datasets hosted by or linked to biobanks. Despite recent updates to MIABIS Core V3, where the Dataset Types in the MIABIS Collection entity cover various categories, a more precise capture of dataset diversity is necessary.

## Objective & Scope
This component aims to develop three distinct entities for Dataset Types: a basic model for any dataset, and entities tailored for Omics and Imaging data found in biobanks. Omics and Imaging are chosen as proof-of-concept components due to their significance in biobank data provision. The Omics entity includes features for describing genomics, metabolomics, proteomics, and transcriptomics data, while the Imaging entity encompasses various imaging data types such as radiological, macro-imaging (body/organ), micro-imaging (tissue), and process-imaging (e.g., ECG, EEG). These entities enable data-driven biobanks to provide detailed descriptions of their datasets beyond the existing Dataset Type list in MIABIS Core v3 Collection attribute.
