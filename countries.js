var countries = require("i18n-iso-countries");
var fs = require('fs');


console.log(countries.getName("US", "en"))

var data = {
      "FRA": "FRA",
      "GBR": "GBR",
      "DEU": "DEU",
      "NLD": "NLD",
      "USA": "USA",
      "FIN": "FIN",
      "NOR": "NOR",
      "GEO": "GEO",
      "SWE": "SWE",
      "DNK": "DNK",
      "CAN": "CAN",
      "AUS": "AUS",
      "LTU": "LTU",
      "JPN": "JPN",
      "NZL": "NZL",
      "PHL": "PHL",
      "ITA": "ITA",
      "PAN": "PAN",
      "THA": "THA",
      "IND": "IND",
      "RUS": "RUS",
      "MYS": "MYS",
      "ALA": "ALA",
      "PRT": "PRT",
      "HRV": "HRV",
      "BMU": "BMU",
      "GRC": "GRC",
      "BEL": "BEL",
      "URY": "URY",
      "ESP": "ESP",
      "CHL": "CHL",
      "MHL": "MHL",
      "UMI": "UMI",
      "ASM": "ASM",
      "GUM": "GUM",
      "SJM": "SJM",
      "CUB": "CUB",
      "ISL": "ISL",
      "CHN": "CHN",
      "SGP": "SGP",
      "PRI": "PRI",
      "ARG": "ARG",
      "ZAF": "ZAF",
      "VNM": "VNM",
      "ATA": "ATA",
      "KOR": "KOR",
      "BRA": "BRA",
      "PLW": "PLW",
      "PYF": "PYF",
      "PER": "PER",
      "FJI": "FJI",
      "KIR": "KIR",
      "FSM": "FSM",
      "VIR": "VIR",
      "COK": "COK",
      "MNP": "MNP",
      "REU": "REU",
      "TZA": "TZA",
      "ECU": "ECU"
    }

for (var key in data) {
	data[key] = countries.getName(key, "de")
}

console.log(data);

fs.writeFile('./countries.json', JSON.stringify(data, null, 2) , 'utf-8')