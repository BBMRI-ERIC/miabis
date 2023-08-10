# MIABIS: Minimum Information About BIobank data Sharing

The Minimum Information About BIobank data Sharing (MIABIS) aims to standardise data elements used to describe biobanks, research on samples and associated data. The MIABIS biobank terminology work at different levels of granularity to support interoperability between biobanks sharing their data. General attributes to describe biobanks, sample collections and studies at an aggregated/metadata level are defined in MIABIS Core 2.0  ([Merino-Martinez et al., 2016](https://www.liebertpub.com/doi/abs/10.1089/bio.2015.0070)). ). New MIABIS component to describe samples and sample donors at the individual level have been approved by BBMRI-ERIC and are described here  ([Eklund et al., 2020](https://www.liebertpub.com/doi/10.1089/bio.2019.0129)).

The work on the MIABIS terminology work follows the new MIABIS governance model introduced by [BBMRI-ERIC](http://www.bbmri-eric.eu/) in 2016. The new governance model divides the MIABIS definition work into focused components, with each component having an initial predefined scope which is based on given use cases. The finalised MIABIS components and their entities will be approved by the of BBMRI-ERIC Management Committee. MIABIS components are developed by working groups with volunteer participants from different BBMRI-ERIC National Nodes as well as interested domain experts.

MIABIS data standard is constantly being updated.
* If you want to join the work, please send an email to: miabis@lists.bbmri-eric.eu 
* If you have any issues, you would like the MIABIS team to consider, please submit them as an issue this GitHub page.


## MIABIS Core:
MIABIS Core represents the minimum information required to initiate collaboration with biobanks and to enable the exchange of biological samples and data. The aim is to facilitate the re-use of biological resources and associated data by harmonising biobanking and biomedical research attributes. The attributes are defined in accordance with epidemiological literature and terminology.  MIABIS Core 3.0 has been developed with 32 attributes describing Biobanks, Collections, Research Resources and Networks according to a modular structure that makes it easier to adhere to and to extend the terminology (Eklund et al., 2023. Manuscript submitted).

MIABIS Core consists of four main entities: "Biobank", "Collection", “Research Resource” and "Network".
* [Data describing Biobank](Data-describing-Biobank.md)
* [Data describing Sample Collection](Data-describing-Sample-Collection.md)
* [Data describing Study](Data-describing-Study.md)
* [List of all attributes](Entire-list-of-attributes.md)

Additional aggregate-level components have been prepared for Imaging (DICOM-MIABIS) and for Standard Operating Prodecures (SOPs).
* Data describing image collections ([Scapicchio et al., 2021](https://eurradiolexp.springeropen.com/articles/10.1186/s41747-021-00214-4)).
* Data describing SOPs (in preparation)


## MIABIS Individual-level components:
The MIABIS Core terminology consists of three entities describing biobanks, sample collections, and studies, where information on samples and sample donors is provided in an aggregated form. However, there is also a need to describe samples and sample donors at an individual level to enable more sophisticated queries. Therefore, the MIABIS terminology has been extended to include components describing information on samples, donors, and events at a more specific manner

Data describing Sample, Sample Donor and Event v1.0 ([Eklund et al., 2020](https://doi.org/10.1089/bio.2019.0129)):
* [Data describing Sample](Data-describing-Sample.md)
* [Data describing Sample Donor](Data-describing-Sample-Donor.md)
* [Data describing Event](Data-describing-Event.md)
* [List of attributes](MIABIS-inidividual-components-list-of-attributes.md)


## Additional components (under active development):
* Data describing dataset type 
* Data describing biobank capabilities 


## MIABIS Entity-Relationship Diagram
The MiABIS Entity-Relationship Diagram represents relationships between different MIABIS Components and Entities included in those components.

![image](https://github.com/BBMRI-ERIC/miabis/assets/45455227/d57a0e7d-3e09-46e6-8d3a-a91bd9e0b724)


## Structured data and lists:
* [Structured data and lists](Structured-data-and-lists.md)
