import Header from "./../../Components/Header"
import Footer from "./../../Components/Footer"
import { database } from "../../firebase";
import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react";
import { stringify } from "@firebase/util";
import { useLocation } from "react-router-dom"; 


export default function Search(){
  const locationCollection = collection(database, "locations")
  let allCollections = []
  const [locations, setLocations] = useState([])
  const [allLocations, setAllLocations] = useState([]) 
  const {state} = useLocation();

  function checkSearchTerm(){
    if(state !== null){
      // console.log(state)
      searchData(state)
    }
  }

  async function getLocationsFromFirebase(){
    const locations = await getDocs(locationCollection);
    let places = []
    locations.docs.map(doc => places.push(doc.data()));
    setLocations(places);
    setAllLocations(places);
  }



  console.log("retorno:", allLocations)



  function filterData(type){
    setLocations(
      allLocations.filter(
        location => location.type.name === type
      )
    )
  }



  function searchData(search){
    console.log(search)
    console.log(allLocations)
    setLocations(
      allLocations.filter(
        location => {
          const locationName = location.name.toLowerCase()
          const searchLowerCase = search.toLowerCase()
          if(locationName.includes(searchLowerCase)){
            return location
          }
        }
      )
    )
  }


  
  useEffect(() => {

    getLocationsFromFirebase();
    checkSearchTerm()

  }, [])

  console.log(locations);
  return(
    <>
      <Header />
      <input type="text" onChange={event => searchData(event.target.value)} />
      <button onClick={() => filterData("Alimentação")}>Alimentação</button>
      <button onClick={() => filterData("Serviços Gerais")}>Serviços Gerais</button>
      <ul>
        {
          locations.map(
            location => {
              return(
                <li>{location.name}</li>
              )
            }
          )
        }
      </ul>
      <Footer />
    </>
  )
}