# MIABIS: Minimum Information About BIobank data Sharing

The Minimum Information About BIobank data Sharing (MIABIS) aims to standardize data elements used to describe biobanks, research on samples and associated data. The MIABIS Community Standards work on several granularity levels, with the aim to support interoperability between biobanks sharing their data. 
General attributes to describe biobanks, sample collections and studies at an aggregated/metadata level are defined in MIABIS Core 2.0 ([Merino-Martinez et al., 2016](https://www.liebertpub.com/doi/abs/10.1089/bio.2015.0070)). New MIABIS modules describing samples and sample donors at individual level have been approved by BBMRI-ERIC and are described here ([Eklund et al., 2020](https://www.liebertpub.com/doi/10.1089/bio.2019.0129)).

The work on the MIABIS community standards follows the new MIABIS governance model introduced in 2016 by [BBMRI-ERIC](http://www.bbmri-eric.eu/). The new governance model splits the MIABIS definition work into focused modules, each module having an initial pre-defined scope which is based on given use cases. The finalized MIABIS modules are accepted by the Management Committee of BBMRI-ERIC. MIABIS modules are developed by working groups with voluntary participants from different BBMRI-ERIC national nodes as well as other domain experts. 

## MIABIS 2.0 Core:
MIABIS Core 2.0 represents the minimum information required to initiate collaborations between biobanks and to enable the exchange of biological samples and data. The aim is to facilitate the reuse of bio-resources and associated data by harmonizing biobanking and biomedical research. The attributes are defined in accordance with epidemiological literature and terminology.

MIABIS Core 2.0 consists of three main components: "Biobank", "Samples Collection" and "Study". 
* [Data describing Biobank](Data-describing-Biobank.md)
* [Data describing Sample Collection](Data-describing-Sample-Collection.md)
* [Data describing Study](Data-describing-Study.md)
* [List of attributes](Entire-list-of-attributes.md)

MIABIS Core is currently being updated to version 3.0. The update will include addition of a 'network' -component, and overall additional updates which have been identified by BBMRI-ERIC CS-IT working group. If you want to join the work, please send an e-mail to: contact@bbmri-eric.eu .

## MIABIS Individual-level components 1.0 ([Eklund et al., 2020](https://www.liebertpub.com/doi/10.1089/bio.2019.0129)):
* [Data describing Sample](Data-describing-Sample.md)
* [Data describing Sample Donor](Data-describing-Sample-Donor.md)
* [Data describing Event](Data-describing-Event.md)
* [List of attributes](MIABIS-inidividual-components-list-of-attributes.md)

## Additional components (under active development):
* Data describing SOPs
* Data describing image collections

## Structured data and lists:
* [Structured data and lists](Structured-data-and-lists.md)

## Machine readable implementations:
* [MIABIS XML implementation](miabis-xml.md)
* [Database implementation](Database-implementation.md)

## Quality Check Script Extensions:
Repository for scripts to support the operations of the BBMRI-ERIC Directory
* [molgenis-app-bbmri-eric-scripts](https://github.com/esthervanenckevort/molgenis-app-bbmri-eric-scripts)
