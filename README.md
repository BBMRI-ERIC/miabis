# MIABIS: Minimum Information About BIobank data Sharing

The Minimum Information About Biobank Data Sharing (MIABIS) initiative aims to standardize the description of biobanks, biosamples for research, and associated data, fostering interoperability among biobanks sharing information. MIABIS Core 2.0 defined general attributes for biobanks, sample collections, and studies at an aggregated metadata level. Additionally, MIABIS has introduced components, approved by BBMRI-ERIC, focusing on individual-level descriptions of samples and sample donors.

The MIABIS governance model, established by BBMRI-ERIC in 2016, organizes the work on definitions into focused components, each with a predefined scope based on specific use cases and involving working groups with participants from BBMRI-ERIC National Nodes and domain experts. The final approval of MIABIS components and entities rests with the BBMRI-ERIC Management Committee.

The MIABIS data standard is constantly being updated. Please feel free, to join our work and get into contact via miabis@lists.bbmri-eric.eu. If you have any issues, you would like the MIABIS team to consider, please submit them as an **ISSUE** to this GitHub page.


## MIABIS Core
The MIABIS Core, crucial for initiating collaboration and enabling sample and data exchange, comprises four main entities: Biobank, Collection, Research Resource, and Network. MIABIS Core 3.0 (Eklund et al. 2023 in press) further refines these attributes, providing a modular structure for easy adherence and extension.
* [Data describing Biobank](Core/V3/Data-describing-Biobank.md)
* [Data describing Collection](Core/V3/Data-describing-Collection.md)
* [Data describing Network](Core/V3/Data-describing-Network.md)
* [Data describing Research Resource](Core/V2/Data-describing-ResearchResource.md)

## MIABIS aggregate-level components 

Two additional aggregate-level components have been prepared for Imaging (DICOM-MIABIS) and for Standard Operating Prodecures (SOPs). Ongoing developments include additional components describing dataset types and biobank capabilities, contributing to the continuous evolution of the MIABIS data standard.
* Data describing Image Collections ([Scapicchio et al., 2021](https://eurradiolexp.springeropen.com/articles/10.1186/s41747-021-00214-4)).
* Data describing Dataset Types (under active development)
* Data describing Biobank Capabilities (under active development)
* Data describing SOPs (in preparation)

## MIABIS individual-level components
In response to the need for more detailed information, MIABIS has extended its terminology to include individual-level components, describing samples, sample donors, and events. These entities enhance the ability to perform sophisticated queries. Ongoing developments include an additional component describing molecular pathology.

Data describing Sample, Sample Donor and Event v1.0 ([Eklund et al., 2020](https://doi.org/10.1089/bio.2019.0129)):
* [Data describing Sample](Components/Individual/Sample+SampleDonor+Event/V1/Data-describing-Sample.md)
* [Data describing Sample Donor](Components/Individual/Sample+SampleDonor+Event/V1/Data-describing-Donor.md)
* [Data describing Event](Components/Individual/Sample+SampleDonor+Event/V1/Data-describing-Event.md)

## MIABIS Entity-Relationship Diagram
The MiABIS Entity-Relationship Diagram represents relationships between different MIABIS Components and Entities included in those components.

![image](assets/MIABIS_ERD.png)


## Structured data and lists:
* [Structured data and lists](Structured-data-and-lists.md)

## Machine readable implementations:
* [Database implementation](Database-implementation.md)

## Quality Check Script Extensions:
Repository for scripts to support the operations of the BBMRI-ERIC Directory
* [molgenis-app-bbmri-eric-scripts](https://github.com/esthervanenckevort/molgenis-app-bbmri-eric-scripts)
