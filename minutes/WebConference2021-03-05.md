MIABIS working group update 05.03.21

Attendees: Andrzej Strug, Aneas Hodselsmans, Blazej Marciniak, Cäcilia Engels, Christoph Döllinger, EJ. Vinke, Gabi Anton (GA), Glerean Enrico, Hans Demski, Joanna Vella, Jörg Geiger, Kristjan Metsalu, Michael Neumann (MN), Noemi Deppenwiese, Lauri Pakonnen, Kaisa Silander, Tomas Snackerstrom, Zdenka Dudová

## Introduction to the "star model" (MN)
 - star model is no typical relational data model for normalisation generally used to reduce redundancy
 - the star model is commonly used in data ware houses, where it is optimal for querying data: simple, fast, redundant
 - the model is designed so that one facts-table carries the aggregation measures whereas several dimension tables carry the filter criteria 
 - https://www.youtube.com/watch?v=q77B-G8CA24
 - the star model was chosen to accommodate pre-defined queries

## Introduction to the dimensions and facts-tables already assembled from MIABIS (GA)
 - as dimensions for the first aggregations were chosen: disease (better: diagnosis?); donor, sample an OMICS
 - for these dimensions the facts from the given MIABIS were allottet (see below) and further suggestions made
 - facts for diagnosis: ontology (version, code, description, freetext); assessment date; certainty of diagnosis; any further suggestions or value lists?
 - facts for donor: sex; birth date (year only? but how about neo-natal?); birth country; ethincity; any further suggestions or value lists?
 - facts for sample: material type; storage temp.; creation date & time; anatomical site ontology (version, code, description); anatomical site free text; any further suggestions or value lists?
 - facts for OMICS: genomics; epigenomics; transcriptomics; metabolomics; proteomics; (metagenomics, metatranscriptomics or metaproteomics, or microbial omics data)

## Questions:
 - How would population biobanks deal with the "diagnosis"-dimesion? Or ethnicity is not given as information? Answer: don't fill the table, it's optional.
 - What happens when the donor has more than one diagnosis? Answer: Could result in a large facts table.
 - What value-lists are sensible for the OMICS-facts, like genomics? Answer: this needs to be chosen carefully, between: what is necessary information and what would blow this specific dimension up hugely

**Homework** ☝️
Please check the MIABIS_core_3.0_star_draft MIABIS_core_3.0_star_draft_1-020200212.xlsx tables (attached to the Outlook-appointment) and give feedback!!!

Next meeting scheduled for 19th of March (and every 2nd week after that)
