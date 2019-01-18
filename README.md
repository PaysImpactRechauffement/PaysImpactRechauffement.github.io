# PaysImpactRechauffement.github.io
Projet réalisé dans le cadre de l'UE "Data Vizualisation" (https://lyondataviz.github.io/teaching/lyon1-m2/2018/) du Master 2 IA (http://master-info.univ-lyon1.fr/IA/) de Lyon 1. 

> Auteurs : Ahcene Boumhand et Julien Lacombe

Le site correspondant est hébergé à l'adresse https://paysimpactrechauffement.github.io.

## Description de l'implémentation
3 datasets au total ont été utilisés : 
* sur les températures moyennes par pays par mois
* sur la température moyenne globale
* sur la concentration de CO2 dans l'atmosphère globale


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
