import Header from "./../../Components/Header";
import Footer from "./../../Components/Footer";
import { database } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import "./styles.css";

export default function Search() {
  const locationCollection = collection(database, "services");
  const [locations, setLocations] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const { locationSearchParams } = useLocation();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState([]);

  async function getLocationsFromFirebase() {
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
    setLocations(data.filter((location) => location.type.category === type));
  }

  function searchData(search, places) {
    if (search === "") {
      setLocations(allLocations);
    } else {
      setLocations(
        places.filter((location) => {
          const locationName = location.category.toLowerCase();
          const searchLowerCase = search.toLowerCase();
          if (locationName.includes(searchLowerCase)) {
            return location;
          }
        })
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
          placeholder="Pesquise por um serviço"
          className="search-input"
          onChange={(event) => searchData(event.target.value, locations)}
        />

        <section className="services">
          <div className="services-inner">
          {locations.length !== 0 ? (
            locations.map((service, index) => {
              return (
                
                  <div key={index} className="service-item">
                    <p className="item-category">{service.category}</p>
                    <img className="icon" src={service.image} />
                    <p className="item-name">{service.name}</p>
                    <div className="item-contact">
                      <a href={"tel:" + service.phone}><img src="../../../assets/phone.svg" alt="Telefone" /></a>
                      <a href={"https://api.whatsapp.com/send?phone=" + service.phone} target="_blank"><img src="assets/whatsapp.svg" alt="WhatsApp" /></a>
                    </div>
                  </div>
                
              );
            })
          ) : (
            <h1 className="not-found">Nenhum item encontrado</h1>
          )}
          </div>
        </section>
        <Footer changeTerm={(term) => filterData(term.filter, allLocations)} />
      </main>
    </>
  );
}
