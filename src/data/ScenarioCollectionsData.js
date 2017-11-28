const scenarioCollections = [
    {
      "id": 729558,
      "name": "VMI11_mk (2009-2013)",
      "description": "VMI11:n maakuntaskenaariot vuodelta 2017; VMI11-maastoaineisto vuosilta 2009-2013",
      "scenarios": [
        {
          "id": 496832,
          "description": "Suurin nettotulo",
          "name": "SNT",
          "order": 5
        }
      ],
      "timePeriods": [
        {
          "id": 496832,
          "yearStart": 2018,
          "yearEnd": 2033
        }
      ],
      "indicatorCategories": [
        {
          "id": 478070,
          "name": "Puuntuotanto",
          "description": "Monimuotoisuus-indikaattorit kuvaavat …",
          "isMandatory": false,
          "order": 1,
          "indicators": [
            {
              "id": 729558,
              "name": "Hakkuukertymä",
              "description": "Lahopuun määrä suhteessa  lahopuun määrän  maksimiin, joka on saatu ….. Lahopuuksi lasketaan …",
              "absVar": 5,
              "order": 3
            }
          ]
        }
      ],
      "values": [
        {
          "scenarioId": 1,
          "indicatorId": 1,
          "timePeriodId": 1,
          "value": "0.85"
        }
      ]
    }
  ];

function getScenarioCollections() {
    return new Promise((resolve, reject) => {
        resolve(scenarioCollections);
    });
}

export default { getScenarioCollections };