import Header from "./../../Components/Header";
import Footer from "./../../Components/Footer";
import { database } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import "./styles.css";
import { async } from "@firebase/util";

export default function Search() {
  const locationCollection = collection(database, "locations");
  const [locations, setLocations] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const { locationSearchParams } = useLocation();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState([]);

  // function checkSearchTerm(places){
  //   console.log(searchTerm)
  //   let term = searchTerm
  //   if(term.term === undefined){
  //     term.term = '';
  //   }
  //   searchData(term, places)
  // }

  async function getLocationsFromFirebase() {
    document.querySelector(".not-found").innerHTML = "Carregando...";
    const locations = await getDocs(locationCollection);
    let places = [];
    locations.docs.map((doc) => places.push(doc.data()));
    setLocations(places);
    setAllLocations(places);

    let filter = searchParams.get("filter");
    if (filter !== "null") {
      filterData(filter, places);
    }
  }

  function filterData(type, data) {
    setLocations(data.filter((location) => location.type.name === type));
  }

  function searchData(search, places) {
    if (search === "") {
      setLocations(allLocations);
    } else {
      setLocations(
        places.filter((location) => {
          const locationName = location.name.toLowerCase();
          const searchLowerCase = search.toLowerCase();
          if (locationName.includes(searchLowerCase)) {
            return location;
          }
        }),
      );
      if (search.filter !== undefined) {
        filterData(search.filter);
      }
    }
  }


  useEffect(() => {
    getLocationsFromFirebase();
  }, []);

  return (
    <>
      <Header changeTerm={(term) => filterData(term.filter, allLocations)} />

      <main>
        <input
          type="text"
          placeholder="Pesquise por um local"
          className="search-input"
          onChange={(event) => searchData(event.target.value, locations)}
        />

        <section className="catalog">
          {locations.length !== 0 ? (
            locations.map((location, index) => {
              return (
                <div key={index} className="catalog-item">
                  <div className="item-inner">
                    <img className="item-picture" src={location.image}></img>
                    <div className="item-description">
                      <p>{location.type.name}</p>
                      <h1>{location.name}</h1>
                      <p>{location.description}</p>
                      <img className="item-picture" src={location.image}></img>
                      <div>
                        <img src="../../../assets/address.svg" alt="Endereço" />
                        <address>{location.address}</address>
                      </div>
                      <div>
                        <img src="../../../assets/phone.svg" alt="Telefone" />
                        <a href={"tel:" + location.phone}>{location.phone}</a>
                      </div>
                      <div>
                        <img src="../../../assets/email.svg" alt="Email" />
                        <a href={"mailto:" + location.email}>
                          {location.email}
                        </a>
                      </div>
                      <a href={location.site} target="_blank">
                        Visitar Site
                      </a>
                      <p>{location.time}</p>
                      <div className="social">
                        <a href={location.facebook} target="_blank">
                          <img src="assets/facebook.svg" alt="Facebook" />
                        </a>
                        <a href={location.instagram} target="_blank">
                          <img src="assets/instagram.svg" alt="Instagram" />
                        </a>
                        <a
                          href={
                            "https://api.whatsapp.com/send?phone=55" +
                            location.phone
                          }
                          target="_blank"
                        >
                          <img src="assets/whatsapp.svg" alt="WhatsApp" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="not-found">Nenhum item encontrado</h1>
          )}
        </section>
        <Footer changeTerm={(term) => filterData(term.filter, allLocations)} />
      </main>
    </>
  );
}
