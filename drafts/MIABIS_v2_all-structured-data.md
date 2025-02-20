> [!WARNING]  
> This is a draft, contents may change.
> 
### Index


### Structured data

* [Contact Information](#contact-information)

* [Researcher Information](#researcher-information)

* [Disease](#disease)

* [Vendor](#vendor)

> [!WARNING]  
> This is a draft, contents may change.

***


### Contact information

#### MIABIS-2.0-07


| Attribute Code| Attribute Name| Allowed Values| Description|

|---|---|---|---| 

| MIABIS-2.0-07-A| First name| Text| Textual string of letters denoting the first name of the Contact| 

| MIABIS-2.0-07-B| Last name| Text| Textual string of letters denoting the last name of the Contact| 

| MIABIS-2.0-07-C| Phone| Formated Text| Phone to the Contact including international call prefix| 

| MIABIS-2.0-07-D| Email| Text| Email address of the Contact person| 

| MIABIS-2.0-07-E| Address| Text| Street name and street number or PO Box of the Contact person| 

| MIABIS-2.0-07-F| ZIP| Text| ZIP of the Contact person| 

| MIABIS-2.0-07-G| City| Text| City of the Contact person| 

| MIABIS-2.0-07-H| Country| Text| Country of the Contact person| 


### Researcher information

#### MIABIS-2.0-23


| Attribute Code| Attribute Name| Allowed Values| Description| 

|---|---|---|---|

| MIABIS-2.0-23A| Juristic Person| Text| Textual string of letters denoting the juristic person e.g. a university, concern, county council etc.| 

| MIABIS-2.0-23B| Department| Text| Department (e.g. division), or corresponding affiliation of the Contact person| 

| MIABIS-2.0-23C| ORCID| Text| The persistent digital identifier that distinguishes researchers. As defined by [ORCID](http://orcid.org/)| 


#### Disease

#### MIABIS-2.0-17


| Attribute Code| Attribute Name| Allowed Values| Description| 

|---|---|---|---|

| MIABIS-2.0-17A| Disease Ontology| Text| Name of ontology used for disease. Can be several values e.g. ICD, SNOMED| 

| MIABIS-2.0-17B| Disease Ontology Version| Text| Version of selected ontology for disease e.g. ICD-9, ICD-10, SNOMED-CT| 

| MIABIS-2.0-17C| Disease Ontology Code| Text| Disease code from the selected Disease Ontology Version e.g. C61| 

| MIABIS-2.0-17D| Disease Ontology Description| Text| Description from the selected Disease Ontology Code e.g : Malignant neoplasm of prostate| 

| MIABIS-2.0-17E| Disease Free Text| Text| Explanation about disease or symptom in case of unknown disease or insufficient information| 


#### Vendor

#### MIABIS-2.0-nn (proposal)


| Attribute Code| Attribute Name| Allowed Values| Description| 

|---|---|---|---|

| MIABIS-2.0-nnA | Name | Text | Legal name of the Vendor |

| MIABIS-2.0-nnB | Website | URL | Website of the Vendor |


Example


| Name| Website| 

|---|---|

| Affymetrix| http://www.affymetrix.com/estore/| 

| Life Technologies| http://www.lifetechnologies.com/se/en/home.html| 

| Roche Applied Science| http://www.roche-applied-science.com/| 

| Illumina| http://www.illumina.com/| 


### Lists


***

#### Sex

#### MIABIS-2.0-09


| Item Name| Definition| Source| Link| 

|---|---|---|---|

| Male| male| | | 

| Female| female| | | 

| Unknown| a proper value is applicable but not known| | | 

| Undifferentiated| undifferentiated, the gender could not be uniquely identified such as hermaphrodite| | 


#### Material type

#### MIABIS-2.0-14

<table>

<thead>

<tr><th>Item Name</th><th>Definition</th><th>Source</th><th>Link</th></tr>

</thead>

<tr>

  <td>Blood</td>

  <td>Blood that has not been separated into its various components; blood that has not been modified except for the addition of an anticoagulant.</td>

  <td>NCI</td>

  <td></td>

</tr>

<tr>

  <td>DNA</td>

  <td>A long linear double-stranded polymer formed from nucleotides attached to a deoxyribose backbone and found in the nucleus of a cell; associated with the transmission of genetic information.</td>

  <td>NCI</td>

  <td></td>

</tr>

<tr>

  <td>Faeces</td>

  <td>The material discharged from the bowel during defecation. It consists of undigested food, intestinal mucus, epithelial cells, and bacteria.</td>

  <td>NCI</td>

  <td></td>

</tr>

<tr>

  <td>Immortalized Cell Lines</td>

  <td>Cells of a single type (human, animal, or plant) that have been adapted to grow continuously in the laboratory and are used in research.</td>

  <td>NCI</td>

  <td></td>

</tr>

<tr>

  <td>Isolated Pathogen</td>

  <td>An isolated biological agent causing disease; a disease producer e.g. virus, bacterium, prion, other microorganism etc.</td>

  <td>NCI</td>

  <td></td>

</tr>

<tr>

  <td>Other</td>

  <td>Any other type of material taken from a biological entity, e.g. amniotic fluid, cerebrospinal fluid (CSV), mitochondrial RNA.</td>

  <td>NCI</td>

  <td></td>

</tr>

<tr>

  <td>Plasma</td>

  <td>Plasma is the fluid (acellular) portion of the circulating blood, as distinguished from the serum that is the fluid portion of the blood obtained by removal of the fibrin clot and blood cells after coagulation.</td>

  <td>NCI</td>

  <td></td>

</tr>

<tr>

  <td>RNA</td>

  <td>One of two types of nucleic acid made by cells. RNA contains information that has been copied from DNA (the other type of nucleic acid). Cells make several different forms of RNA, and each form has a specific job in the cell. Many forms of RNA have functions related to making proteins. RNA is also the genetic material of some viruses instead of DNA. RNA can be made in the laboratory and used in research studies. Also called ribonucleic acid.</td>

  <td>NCI</td>

  <td></td>

</tr>

<tr>

  <td>Saliva</td>

  <td>A clear liquid secreted into the mouth by the salivary glands and mucous glands of the mouth; moistens the mouth and starts the digestion of starches.</td>

  <td>NCI</td>

  <td></td>

</tr>

<tr>

  <td>Serum</td>

  <td>The clear portion of the blood that remains after the removal of the blood cells and the clotting proteins.</td>

  <td>NCI</td>

  <td></td>

</tr>

<tr>

  <td>Tissue (Frozen)</td>

  <td>An anatomical structure consisting of similarly specialized cells and intercellular matrix, aggregated according to genetically determined spatial relationships, performing a specific function.</td>

  <td></td>

  <td></td>

</tr>

<tr>

  <td>Tissue (FFPE)</td>

  <td> Tissue, formalin fixated and paraffin preserved or equivalent.</td>

  <td></td>

  <td></td>

</tr>

<tr>

  <td>Urine</td>

  <td>The fluid that is excreted by the kidneys. It is stored in the bladder and discharged through the urethra.</td>

  <td>NCI</td>

  <td></td>

</tr>

</table>


<p>Until September the following list was in use, there is a one way transformation to the new list above.</p>


| Item Name| Definition| Source| Link| New value |

|---|---|---|---|---|

| DNA| A long linear double-stranded polymer formed from nucleotides attached to a deoxyribose backbone and found in the nucleus of a cell; associated with the transmission of genetic information.| NCI| | DNA |

| RNA| One of two types of nucleic acid made by cells. RNA contains information that has been copied from DNA (the other type of nucleic acid). Cells make several different forms of RNA, and each form has a specific job in the cell. Many forms of RNA have functions related to making proteins. RNA is also the genetic material of some viruses instead of DNA. RNA can be made in the laboratory and used in research studies. Also called ribonucleic acid.| NCI| | RNA | 

| cDNA/mRNA| Single-stranded DNA that is complementary to messenger RNA or DNA that has been synthesized from messenger RNA by reverse transcriptase/A class of RNA molecule containing protein-coding information in its nucleotide sequence that can be translated into the amino acid sequence of a protein.| NCI| | RNA |

| microRNA| A type of RNA found in cells and in blood. MicroRNAs are smaller than many other types of RNA and can bind to messenger RNAs (mRNAs) to block them from making proteins. MicroRNAs are being studied in the diagnosis (NCI) and treatment of cancer.| NCI| | RNA |

| Whole blood| Blood that has not been separated into its various components; blood that has not been modified except for the addition of an anticoagulant.| NCI| | Blood |

| Peripheral blood cells| A general term describing the three cellular components of blood (white blood cells, red blood cells, and platelets), all which are made in the bone marrow.| Lymphoma Information Network Glossary| | Blood |

| Plasma| Plasma is the fluid (acellular) portion of the circulating blood, as distinguished from the serum that is the fluid portion of the blood obtained by removal of the fibrin clot and blood cells after coagulation.| NCI| | Plasma |

| Serum| The clear portion of the blood that remains after the removal of the blood cells and the clotting proteins.| NCI| | Serum |

| Tissue, cryo preserved| An anatomical structure consisting of similarly specialized cells and intercellular matrix, aggregated according to genetically determined spatial relationships, performing a specific function. Preserved by freezing in liquid nitrogen| NCI| | Tissue (Frozen) |

| Tissue, paraffin preserved| Tissue that is preserved and embedded in paraffin.| NCI| | Tissue (FFPE) |

| Cell lines| Cells of a single type (human, animal, or plant) that have been adapted to grow continuously in the laboratory and are used in research.| NCI| | Immortalized Cell Lines |

| Urine| The fluid that is excreted by the kidneys. It is stored in the bladder and discharged through the urethra.| NCI| | Urine |

| Saliva| A clear liquid secreted into the mouth by the salivary glands and mucous glands of the mouth; moistens the mouth and starts the digestion of starches.| NCI| | Saliva |

| Faeces| The material discharged from the bowel during defecation. It consists of undigested food, intestinal mucus, epithelial cells, and bacteria.| NCI| | Faeces |

| Pathogen| A biological agent causing disease; a disease producer e.g. virus, bacterium, prion, other microorganism etc.| | | Isolated Pathogen |

| Other| Any other type of material taken from a biological entity, e.g. amniotic fluid, cerebrospinal fluid (CSV), mitochondrial RNA.| | | Other |


#### Storage temperature

#### MIABIS-2.0-15



| Item Name| Definition| Source| Link| 

|---|---|---|---|

| RT| Room temperature| SPREC 2.0| |

| 2 °C to 10°C| between 2 °C and 10 °C| SPREC 2.0| | 

| -18 °C to -35 °C| between -18 °C and -35 °C| SPREC 2.0| | 

| -60 °C to -85 °C| between -60 °C and -85 °C| SPREC 2.0| | 

| LN| liquid nitrogen, -150 °C to -196 °C| | | 

| Other, specify| any other temperature or long time storage information| | | 


#### Data Categories

#### MIABIS-2.0-13


| Item Name| Definition| Source| Link| 

|---|---|---|---|

| Biological samples| Y/N if biological samples are collected from the participants in the sample collection/study| | | 

| Survey data| Y/N if information from surveys are collected from the participants in the sample collection/study| | | 

| Imaging data| Y/N if imaging data are collected from the participants in the sample collection/study| | | 

| Medical records| Y/N if medical records are collected from the participants in the sample collection/study| | | 

| National registries| Y/N if register data is associated to the participants in the sample collection/study| | | 

| Genealogical records| Y/N if genealogical records are associated with the participants in the sample collection/study| | | 

| Physiological/Biochemical measurements| Y/N if Measurements/tests performed during a clinical/home visit and from samples taken from donor| | | 

| Other| Other| | | 


#### Collection type

#### MIABIS-2.0-16 and Study design: MIABIS-2.0-19


| Item Name| Definition| Source| Link| 

|---|---|---|---|

| Case-control| A case-control study design compares two groups of subjects: those with the disease or condition under study (cases) and a very similar group of subjects who do not have the disease or condition (controls).| EMBL (EFO)| http://www.ebi.ac.uk/efo/EFO_0001427| 

| Cohort| A form of longitudinal study for the analysis of risk factors following a group of people who do not have a disease, and uses correlations to determine the absolute risk of subject contraction.| Wikipedia (rewritten)| | 

| Cross-sectional| A type of observational study that involves data collection from a population, or a representative subset, at one specific point in time.| Wikipedia| | 

| Longitudinal| Research studies involving repeated observations of the same entity over time. In the biobank context, longitudinal studies sample a group of people in a given time period, and study them at intervals by the acquisition and analyses of data and/or samples over time.| P3G| http://www.p3gobservatory.org/lexicon/list.htm#l| 

| Twin-study| Twin studies measure the contribution of genetics (as opposed to environment) to a given trait or condition of interest.| | | 

| Quality control| A quality control testing study design type is where some aspect of the experiment is quality controlled for the purposes of quality assurance.| EMBL (EFO)| http://www.ebi.ac.uk/efo/EFO_0001774| 

| Population-based| Study done at the population level or among the population groups, generally to find the cause, incidence or spread of the disease or to see the response to the treatment, nutrition or environment.| Wikipedia (rewritten)| | 

| Disease specific| A study or biobank for which material and information is collected from subjects that have already developed a particular disease.| EMBL (EFO)| http://www.ebi.ac.uk/efo/EFO_0001430| 

| Birth cohort| A corhort study for which the subjects are followed from the time of birth usually including information about gestation and follow up.| | | 

| Other| | | 



#### Inclusion Criteria

#### MIABIS-2.0-22


| Item Name| Definition| Source| Link| 

|---|---|---|---|

| Health status| | | | 

| Hospital patient| | | | 

| Use of medication| | | | 

| Gravidity| | | | 

| Age group| | | | 

| Familial status| | | | 

| Sex| | | | 

| Country of residence| | | | 

| Ethnic origin| | | | 

| Population representative sampling| | | | 

| Lifestyle/Exposure| | | | 

| Other| | | | 


#### Omics Technology

#### MIABIS-40


| Item Name| Definition| Source| Link| 

|---|---|---|---|

| Genomics| The study of an organism's entire genome.| Methods in Molecular Biology 593| DOI:10.1007/978-1-60327-194-3_1 http://www.springerlink.com/content/w048163633774724/#section=614848&page=1| 

| Transcriptomics| The study of the transcription, i.e., the expression levels of mRNAs in a given organism, tissue, etc. (under a specific set of conditions).| Methods in Molecular Biology 593| DOI:10.1007/978-1-60327-194-3_1 http://www.springerlink.com/content/w048163633774724/#section=614848&page=1| 

| Proteomics| The study of proteins, their structures, and their functions, namely the study of the proteome.| Methods in Molecular Biology 593| DOI:10.1007/978-1-60327-194-3_1 http://www.springerlink.com/content/w048163633774724/#section=614848&page=1| 

| Metabolomics| The identification, quantification, and characterization of the small molecule metabolites in the metabolome (i.e., the set of all small molecule metabolites found in a specific cell, organ, or organism).| Methods in Molecular Biology 593| DOI:10.1007/978-1-60327-194-3_1 http://www.springerlink.com/content/w048163633774724/#section=614848&page=1| 

| Other| | | | 


#### Ethnic group

#### MIABIS-50


| Item Name| Definition| Source| Link| 

|---|---|---|---|

| African| | | | 

| Caucasian| | | | 

| Pacific Islander| | | | 

| East Asian| | | | 

| Native American| | | | 

| Other| | | |
