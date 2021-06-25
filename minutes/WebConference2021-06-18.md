WebConference2021-06-18

Participants: Aleksandra Jelcic, Andrzej Strug , Cecilia Engels, Gabi Anton, Kaisa Silander, Luciano Milanesi, Michael Neumann (MN), Niina Eklund, Noemi Deppenwiese, Petr Holub, Ronny Baber, Tomas Snackerstroem, 

RD-Connect registry conformed into the star model (by Philipp, Anja and Robert https://docs.google.com/spreadsheets/d/14ZDzZkrBCzoamEvbLMKOOfhfx2lp4dYG/edit#gid=1177687397 ):
 - Excel-Tabs depict dimensions (material, body type,...) with columns for ID, Code and Label
 - Facts table aggregates up to 10000 records
 - Search in facts table can be shown, as anticipated

Conclusions:
 - Rows extent might be huge, but will not pose a problem
 - Definition of semantics for empty cells necessary #non-values (not available, not applicable,...)
 - Essential next step: dimensions now need to be defined with extreme care/circumspection, minimise potential overlaps in results

Discussions on:
 - Collection still necessary, but sub collections no longer
 - Possible solution: collection-ID as one column?
 - Row level security should be kept in mind (task for Molgenis)
 - Negations (missing values, negation of diagnosis) cannot be modelled, but would need to be defined in the dimensions

General information:
 -> Next MIABIS-working group meetings postponed until draft of the work done so far has been compiled by the MIABIS-team and will then be circulated

Homework:
 - MN draft a description of the star model and choose "non-values" and further discussions with the team from Graz
 - CE combine drafts written by Niina and by Gabi and there with give a first account of possible dimensions (#countables #bundles) considering the already defined facts
 - TS to be included into discussions when the pilot steps into the next Molgenis phase.
