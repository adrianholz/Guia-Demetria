import Header from "./../../Components/Header"
import Footer from "./../../Components/Footer"
import { database } from "../../firebase";
import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react";
import { stringify } from "@firebase/util";
import { useLocation } from "react-router-dom"; 
import { useCallback } from "react";


export default function Search(){
  const locationCollection = collection(database, "locations")
  let allCollections = []
  const [locations, setLocations] = useState([])
  const [allLocations, setAllLocations] = useState([]) 
  const {state} = useLocation()
  const [searchTerm, setSearchTerm] = useState([])

  function checkSearchTerm(places){
    console.log(searchTerm)
    let term = searchTerm
    if(term.term === undefined){
      term.term = '';
    }
    searchData(term, places)
  }

  async function getLocationsFromFirebase(){
    const locations = await getDocs(locationCollection);
    let places = []
    locations.docs.map(doc => places.push(doc.data()));
    setLocations(places);
    setAllLocations(places);
    checkSearchTerm(places);
  }

  function filterData(type){
    setLocations(
      allLocations.filter(
        location => location.type.name === type
      )
    )
  }



  function searchData(search, places){
    console.log(search)
    setLocations(
      places.filter(
        location => {
          const locationName = location.name.toLowerCase()
          const searchLowerCase = search.term.toLowerCase()
          if(locationName.includes(searchLowerCase)){
            return location
          }
        }
      )
    )
    if(search.filter !== undefined){
      console.log(search)
      filterData(search.filter);
    }
  }


  
  useEffect(() => {

    getLocationsFromFirebase();


  }, [searchTerm])
  return(
    <>
      <Header 
      changeTerm={term => {
        console.log(term)
        setSearchTerm(term)
      }}
      />
      <input type="text" onChange={event => searchData(event.target.value)} />
      <button onClick={() => filterData("Alimentação")}>Alimentação</button>
      <button onClick={() => filterData("Serviços Gerais")}>Serviços Gerais</button>
        {
          locations.map(
            (location, index) => {
              return(
                <div key={index}>
                  <h1>{location.name}</h1>
                  <address>{location.address}</address>
                </div>
              )
            }
          )
        }
      <Footer />
    </>
  )
}