# Scope of the MIABIS Component Biobank Services

This project aims to address the evolving needs of researchers and biobanks by proposing enhancements to the MIABIS (Minimum Information About BIobank data Sharing) Core model. The transition from MIABIS Core v2 to v3 revealed a growing demand for detailed information on biobank capabilities and services, necessitating a reevaluation of data structure and communication methods between biobanks and researchers.

## Motivation

With the upgrade to MIABIS Core v3, there's a heightened focus on accommodating researchers' requirements for comprehensive information on biobanks' capabilities and services. Collaborative projects such as canSERV, ISIDORe, and GBA are integrating scientific service data within the biomedical domain, indicating a need for domain-specific extensions in future MIABIS iterations. To facilitate effective communication between biobanks and researchers, a Working Group is proposed to address these challenges.

## Objective & Scope

The following suggestions outline the initial scope of the proposed changes, subject to refinement during implementation:

* Enhanced Attribute Structure: Additional attributes are proposed to provide detailed information on biobank capabilities and services. This may involve introducing a new component entity parallel to the existing "collection" entity, along with a one-to-many relation table extracted from the biobank base.
* Expanding Service Categories: The types of support biobanks offer to researchers vary widely, ranging from structural assets to bioprocessing services. While the 3rd version of MIABIS Core identified these service groups, their adequacy and alignment with current practices need verification. Refining the description of services could reshape the current solution.
* Flexible Categorization: Some services defy linear categorization and may benefit from alternative structures such as matrices or tags, offering greater flexibility for researchers. Exploring these possibilities can enhance the usability of the MIABIS model from the researcher's perspective.

By addressing these suggestions, the proposed changes aim to foster improved communication and collaboration between biobanks and researchers within the MIABIS framework.

