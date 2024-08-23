'use client'
import { useState } from "react";

function Search() {
  const [contactNumber, setContactNumber] = useState("");
  const [userDetails, setUserDetails] = useState(null);

  const handleSearch = () => {
    // Placeholder for searching logic, which will be connected to the DB later.
    const dummyData = {
      name: "John Doe",
      email: "johndoe@example.com",
      cnic: "12345-6789012-3",
      fatherName: "Mr. Doe",
      admitCardLink: "https://example.com/admit-card.pdf",
    };

    setUserDetails(dummyData);
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Enter Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {userDetails && (
        <div className="mt-8 w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">User Details</h2>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>CNIC:</strong> {userDetails.cnic}</p>
          <p><strong>Fathers Name:</strong> {userDetails.fatherName}</p>
          <p><strong>Admit Card:</strong> <a href={userDetails.admitCardLink} className="text-blue-500 underline">Download</a></p>
        </div>
      )}
    </div>
  );
}

export default Search;
