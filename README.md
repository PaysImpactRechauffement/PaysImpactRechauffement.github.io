> (an english version is available below the french part)

# PaysImpactRechauffement.github.io - version française
<p>Ce projet a été réalisé dans le cadre de l'UE <a href="https://lyondataviz.github.io/teaching/lyon1-m2/2018/">Visualisation interactive de données</a> du <a href="http://master-info.univ-lyon1.fr/IA/">Master Intelligence Artificielle</a> de l'<a href="https://www.univ-lyon1.fr/">université Lyon 1</a>.</p>

Auteurs : Ahcene Boumhand et Julien Lacombe

Le site correspondant est hébergé à l'adresse https://paysimpactrechauffement.github.io.

## Pays les plus impactés en termes de température
<p>Cette visualisation montre pour chaque pays les écarts par rapport à la moyenne des températures en 1850/1900. Plus l'intensité de la couleur est importante et plus l'écart est grand. Il est possible de régler la date et le nombre de pays les plus impactés à afficher grâce aux curseurs. On peut également voir la valeur exacte de l'écart pour le mois courant en survolant le pays souhaité avec la souris, ainsi que le rang lorsqu'il s'agit d'un pays impacté. </p>

## Evolution de la température globale et de la concentration en CO2 dans l'atmosphère
<p>Cette visualisation s'intéresse à l'évolution des écarts de température (par rapport à la moyenne globale calculée avec des mesures prises entre 1850 et 1900) ainsi qu'à la concentration en CO2 (en ppm) à l'échelle globale au cours des années. Un cercle représente une année (les mois sont positionnés comme les heures dans une horloge). Le premier curseur permet de régler la rapidité de la visualisation, le second curseur permet d'avancer directement à l'année souhaitée. Cocher la case "par année" permet de ne visualiser que le trait de l'année courante (en utilisant le second curseur). En ce qui concerne la température, selon <a href="https://ec.europa.eu/clima/policies/international/negotiations/paris_fr">l'accord de Paris</a> les états se sont engagés à limiter la hausse de la température globale "nettement en dessous de <b>2°C</b>" et à "poursuivre les efforts pour limiter [cette hausse] à <b>1,5°C</b>". Cette visualisation est inspirée des travaux de <a href="https://twitter.com/ed_hawkins">Ed Hawkins</a> disponibles <a href="http://www.climate-lab-book.ac.uk/spirals/">ici</a></p>

## Informations sur les jeux de données
<p>Le jeu de données utilisé pour la visualisation sous forme de carte - qui contient les températures moyennes par pays et par mois - est disponible <a href="https://www.kaggle.com/berkeleyearth/climate-change-earth-surface-temperature-data">sur Kaggle</a>. Ces données ont été rassemblées par <a href="http://berkeleyearth.org/">Berkeley Earth</a>, en lien avec le <a href="https://www.lbl.gov/">laboratoire Lawrence Berkeley National Laboratory</a>.</p>

<p>Le <a href="https://www.metoffice.gov.uk/hadobs/hadcrut4/">jeu de données des températures globales</a> utilisé provient d'une collaboration entre le <a href="https://www.metoffice.gov.uk/">Met Office Hadley Centre for Climate Science and Services</a> et le <a href="http://www.cru.uea.ac.uk/ ">Climate Research Unit at the University of East Anglia</a>. Ce jeu de données est basé sur les températures terrestres issues de <a href="https://www.metoffice.gov.uk/hadobs/crutem4/">ce jeu de données</a> et des températures des mers provenant d'<a href="https://www.metoffice.gov.uk/hadobs/hadsst3/">ici</a>.</p>

<p>Le dataset concernant les concentrations globales en CO2 dans l'atmosphère, <a href="http://climatecollege.unimelb.edu.au/cmip6">Historical Greenhouse Gas Concentrations for CMIP6</a>, a été produit par l'<a href="https://www.unimelb.edu.au/">université de Melbourne</a>.</p>

<p>
L'ensemble des scripts ayant servi au preprocessing de ces datasets est écrit en Python et est disponible sous la forme de notebooks jupyter (dossier preprocessing). </p>

## Documents relatifs au projet
* Document de cadrage du projet : https://github.com/ProjetDataViz20182019Groupe6/ProjetDataViz20182019Groupe6.github.io/blob/master/docs/Document%20Cadrage%20Projet%20DataViz%20Lyon%201%20M2%202018-2019%20Groupe%206.pdf
* DOcument de peer review : https://github.com/ProjetDataViz20182019Groupe6/ProjetDataViz20182019Groupe6.github.io/blob/master/docs/Document%20de%20peer-review.pdf




# PaysImpactRechauffement.github.io - english version
<p>This project has been done during the course "<a href="https://lyondataviz.github.io/teaching/lyon1-m2/2018/">Visualisation interactive de données</a>" which is a part of the "<a href="http://master-info.univ-lyon1.fr/IA/">Master Intelligence Artificielle</a>" of the "<a href="https://www.univ-lyon1.fr/">Université Lyon 1</a>".</p>.

> Authors : Ahcene Boumhand et Julien Lacombe

The corresponding website is available here : https://paysimpactrechauffement.github.io.

## Most affected countries in terms of temperature
<p>This visualization shows for each country the deviations from the average temperature observed in 1850/1900. The greater the intensity of the color, the greater the difference. It is possible to set the date and the number of countries most impacted with the sliders. One can also see the exact value of the gap and the rank for the current month by moving the mouse over the desired country.</p>

## Evolution of global temperature and CO2 concentration in the atmosphere
<p>This visualization looks at the evolution of temperature differences (compared to the global average calculated with measurements taken between 1850 and 1900) as well as the concentration of CO2 (in ppm) at the global scale during years. A circle represents a year (months are positioned as hours in a clock). The first slider allows to adjust the speed of the visualization, the second slider allows to advance directly to the desired year. Ticking the box "by year" allows to visualize only the line of the current year (by using the second cursor). According to the <a href="https://ec.europa.eu/clima/policies/international/negotiations/paris_fr">Paris Agreement</a>, states have committed themselves to limit the increase in global temperature "significantly below <b>2°C</b>"  and "continue efforts to limit [this increase] to <b> 1.5 ° C </b>". This visualization is based on the work of <a href="https://twitter.com/ed_hawkins">Ed Hawkins</a> available  <a href="http://www.climate-lab-book.ac.uk/spirals/">here</a>.</p>

## Information about datasets
<p>The dataset used for map visualization - which contains the average temperatures by country and by month - is available <a href = "https://www.kaggle.com/berkeleyearth/climate-change- earth-surface-temperature-data "> on Kaggle </a>. These data were collected by <a href="http://berkeleyearth.org/"> Berkeley Earth </a>, in connection with the <a href="https://www.lbl.gov/">Lawrence Berkeley National Laboratory</a>. </ P>

<p>The <a href="https://www.metoffice.gov.uk/hadobs/hadcrut4/"> global temperature dataset </a> is a product from the collaboration between the <a href = " https://www.metoffice.gov.uk/">Met Hadley Center for Climate Science and Services Office </a> and the <a href="http://www.cru.uea.ac.uk/">Climate Research Unit at the University of East Anglia</a>. This dataset is based on terrestrial temperatures from <a href="https://www.metoffice.gov.uk/hadobs/crutem4/"> this dataset </a> and sea temperatures from <a href="https://www.metoffice.gov.uk/hadobs/hadsst3/">here</a>. </ p>

<p>The dataset for global CO2 concentrations in the atmosphere, <a href="http://climatecollege.unimelb.edu.au/cmip6"> Historical Greenhouse Gas Concentrations for CMIP6 </a>, has been produced by the <a href="https://www.unimelb.edu.au/"> University of Melbourne </a>. </ p>

<p>The set of scripts used in the preprocessing of these datasets is written in Python and is available in the form of jupyter notebooks ("preprocessing" folder). </p>

## Project documents
* Project framing document : https://github.com/ProjetDataViz20182019Groupe6/ProjetDataViz20182019Groupe6.github.io/blob/master/docs/Document%20Cadrage%20Projet%20DataViz%20Lyon%201%20M2%202018-2019%20Groupe%206.pdf
* Peer review document : https://github.com/ProjetDataViz20182019Groupe6/ProjetDataViz20182019Groupe6.github.io/blob/master/docs/Document%20de%20peer-review.pdf

