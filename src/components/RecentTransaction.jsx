import React, { useEffect, useState } from "react";
import api from "../utils/api";

const RecentTransaction = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(cardData);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await api.get("/recent-transactions-list");
        if (response && response.data) {
          setCardData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching card data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  if (!cardData.length) {
    return <p className="text-white">No card data available</p>;
  }

  return (
    <>
      <div
        className="min-w-[350px] w-full min-h-[235px] rounded-[25px] 
          bg-gradient-to-r from-[#FFF] to-[#FFF] via-[#FFF] flex flex-col text-black"
      >
        <div className="flex flex-col gap-2 m-5">
          <h2 className="font-semibold mb-1">Recent Transaction</h2>
          {cardData.map((card, index) => (
            <div key={index} className="flex gap-6 ">
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <img
                  src={`${card.image}`}
                  alt="icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-medium text-md">{card.name}</span>
                <span className="text-sm text-gray-500">{card.date}</span>
              </div>
              <div className="text-right">
                <h3 className="text-md font-bold text-green-500">
                  ${card.amount}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentTransaction;
