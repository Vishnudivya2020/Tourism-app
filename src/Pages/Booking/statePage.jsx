import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";


export default function StatePage() {
  const { stateName } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
   const navigate = useNavigate();

  useEffect(() => {
    fetch("/states.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json[stateName]);
        setLoading(false);
      });
  }, [stateName]);

  if (loading) return <div className="text-center p-5 fs-3">Loading...</div>;
  if (!data) return <div className="text-center p-5 fs-3">No data found</div>;

  const filteredTourist = data.touristSpots.filter((spot) =>
    spot.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredHotels = data.hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-5">
      <div >
            <i className="bi bi-arrow-left-circle"
            style={{
    fontSize: "28px",
    color: "#0d6efd",
    cursor: "pointer"
  }} onClick={()=>navigate("/book")}></i>
        </div>

      {/* TITLE */}
      <h1 className="text-center mb-4">{stateName}</h1>

      {/* SEARCH BAR */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50 shadow-sm"
          placeholder="Search places or hotels..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* PLAN TRIP BUTTON */}
      <div className="text-center mb-4">
        <button className="btn btn-success px-4 py-2">
          ✈️ Plan Your Trip
        </button>
      </div>

      {/* TOURIST SPOTS */}
      <h3 className="mb-3">Top Tourist Spots</h3>
      <div className="row g-4">
        {filteredTourist.map((spot) => (
          <div className="col-12 col-sm-6 col-md-4" key={spot.name}>
            <div className="card shadow h-100">
              <img
                src={spot.img}
                className="card-img-top"
                alt={spot.name}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0"
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{spot.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* HOTELS */}
      <h3 className="mt-5 mb-3">Best Hotels</h3>
      <div className="row g-4">
        {filteredHotels.map((hotel) => (
          <div className="col-12 col-sm-6 col-md-4" key={hotel.name}>
            <div className="card shadow h-100">
              <img
                src={hotel.img}
                className="card-img-top"
                alt={hotel.name}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0"
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{hotel.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
