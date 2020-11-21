# D3-Challenge
D3 Homework - Data Journalism and D3

![image of HW](https://github.com/BPayne-216/D3-Challenge/blob/main/Images/press.gif)


D3 Homework - Data Journalism and D3

Intro to this project

https://bpayne-216.github.io/D3-Challenge/


This project used javascript and a .csv file to create D3 interative visual based on U.S. Census data.  HTML, D3, css, and bootstrap were used to create the website.

The motivation of this project is utilize Plot.ly graphing inside of Javascript to create charts that illustrate the details of the Belly Button samples.  The JSON file contained IDs of the samples, along with Microbe detail and demographic characteristics of each sample.

Elements of the Samples.JSON
Names (IDs).  MetaData (consists of demographic data: ID, ethnicity, gender, age, location, bbtype, and ufreq).  Samples (IDs and microbe scientific names).

Elements of HTML file:
Dropdown function: accesses the ID of sample and utilities a dropdown to choose the ID of sample.

BarChart: based on the sample chosen in dropdown, the Top 10 OTUs of the sample.  Needed to reverse.

BubbleChart: Based on the sample chosen in dropdown, the sample values and IDs are reviewed and scaled by bubble size.

Demographic Field Box: details the fields of the metadata JSON based on the chosen ID in the dropdown.

Technology/Framework (In order):  
VS Code Editor: HTML (bootstrap).  Javascript. Within Javascript: D3, Plot.ly.  When reviewing the index.html file, needed to review by accessing http.server.


