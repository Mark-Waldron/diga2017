const regionLevels = [{
    "id": 374178,
    "name": "Area 1",
    "description": "Detailed region level description",
    "order": 1
}];


function getRegionLevels() {
    return new Promise((resolve, reject) => {
        resolve(regionLevels);
    });
}

export default { getRegionLevels };