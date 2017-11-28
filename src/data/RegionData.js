const regions = [
    {
      "id": 968060,
      "name": "Pohjois-Pohjanmaa",
      "shortName": "P-P",
      "order": 14,
      "scenarioCollections": [
        {
          "id": 729558,
          "name": "VMI11_mk (2009-2013)",
          "description": "VMI11:n maakuntaskenaariot vuodelta 2017; VMI11-maastoaineisto vuosilta 2009-2013"
        }
      ]
    }
  ];

function getRegions() {
    return new Promise((resolve, reject) => {
        resolve(regions);
    });
}

export default { getRegions };