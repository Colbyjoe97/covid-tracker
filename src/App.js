import './App.css';
import React, { useState, useEffect } from 'react'
import { MenuItem, FormControl, Select, Card, CardContent } from '@material-ui/core'
// material-ui.com (npm install @material-ui/core)
import InfoBox from './components/InfoBox'
import Map from './components/Map'
import "leaflet/dist/leaflet.css";
import Table from './components/Table'
import './Table.css'
import { sortData,  prettyPrintStat } from './util'
import LineGraph from './components/LineGraph'

// https://disease.sh/v3/covid-19/countries

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])
  const [mapCenter, setMapCenter] = useState([ 34.80746, -40.4796 ]);
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([])
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data)
      })
  }, [])

  // Get Country Info
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country, // United States, United Kingdom, etc..
              value: country.countryInfo.iso2 // UK, USA, FR, etc..
            }
            ));
            const sortedData = sortData(data)
            setTableData(sortedData)
            setMapCountries(data)
            setCountries(countries)
        })
    };
    getCountriesData();
  }, []);

  // Saves dropdown selection
  const onCountryChange = async (e) => {
    const countryCode = e.target.value
    setCountry(countryCode)

    // Get's info for the country or countries depending on dropdown selection
    const url = countryCode === 'worldwide'
    ? 'https://disease.sh/v3/covid-19/all'
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode)
        setCountryInfo(data)
        {
          countryCode === "worldwide" ?
          setMapCenter([ 34.80746, -40.4796 ]) :
          setMapCenter([data.countryInfo.lat, data.countryInfo.long])
        }
        {countryCode === "worldwide" ? setMapZoom(3) : setMapZoom(4)}
      })
    }
  console.log("TODAYS CASES", countryInfo.todayCases)
  console.log("TOTAL CASES", countryInfo.cases)
  console.log("COUNTRY INFO: ", countryInfo)

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>Covid-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {/* Loop through all countries */}
              {
                countries.map((country => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                )))
              }
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox
            isRed
            active={casesType === "cases"}
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            total={prettyPrintStat(countryInfo.cases)}
            cases={countryInfo.todayCases !== 0 ?  prettyPrintStat(countryInfo.todayCases) : prettyPrintStat(0)}
          />
          <InfoBox
            isGreen
            active={casesType === "recovered"}
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            total={prettyPrintStat(countryInfo.recovered)}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
          />
          <InfoBox
            isOrange
            active={casesType === "deaths"}
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            total={prettyPrintStat(countryInfo.deaths)}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
          />
        </div>

        {/* Map */}
        <Map
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
          casesType={casesType}
        />
      </div>

      {/* TABLE */}
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by Country</h3>
          <Table countries={tableData} />

          {/* Graph */}
          <h3 className="app__graphTitle">Worldwide new {casesType}</h3>
          <LineGraph className="app__graph" casesType={casesType} />

        </CardContent>
      </Card>

    </div>
  );
}

export default App;