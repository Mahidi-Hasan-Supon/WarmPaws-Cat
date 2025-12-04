
// import PetCare from "../Compunents/PetCare";

// const Services = () => {

  
//   return (
//     <div className="ml-5">
   
//       <PetCare></PetCare>
//     </div>
//   );
// };

// export default Services;
import { useState } from "react";
import PetCare from "../Compunents/PetCare";

const Services = () => {
  const [sortOrder, setSortOrder] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="ml-2 relative">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search services..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border px-4 py-2 rounded-lg shadow mt-10 mb-4 w-64"
      />

      {/* Dropdown Button */}
      <div className="inline-block ml-5">
        <button
          onClick={() => setOpen(!open)}
          className="border px-5 py-2 rounded-xl flex items-center gap-2 shadow"
        >
          {sortOrder === "asc"
            ? "Low to High"
            : sortOrder === "desc"
            ? "High to Low"
            : "Sort by Price"}
          <span>▼</span>
        </button>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute w-44 bg-white border shadow-lg rounded-xl p-2 z-50 mt-2">
            <p
              onClick={() => {
                setSortOrder(null);
                setOpen(false);
              }}
              className={`px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                sortOrder === null ? "font-semibold" : ""
              }`}
            >
              Sort by Price
            </p>

            <p
              onClick={() => {
                setSortOrder("asc");
                setOpen(false);
              }}
              className={`px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                sortOrder === "asc" ? "font-semibold" : ""
              }`}
            >
              Low to High
            </p>

            <p
              onClick={() => {
                setSortOrder("desc");
                setOpen(false);
              }}
              className={`px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
                sortOrder === "desc" ? "font-semibold" : ""
              }`}
            >
              High to Low
            </p>
          </div>
        )}
      </div>

      {/* PetCare Component */}
      <PetCare sortOrder={sortOrder} searchText={searchText} />
    </div>
  );
};

export default Services;

