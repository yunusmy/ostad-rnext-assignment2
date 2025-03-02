import React, { useEffect, useState } from "react";
import api from "../utils/api";

const SummaryCard = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(cardData);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await api.get("/card-list");
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
    <div className="">
      <h3 className="font-semibold text-lg text-right">See All</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.slice(1, 2).map((card, index) => (
          <div
            key={index}
            className="min-w-[350px] w-full min-h-[235px] rounded-[25px] 
          bg-gradient-to-r from-[#FFF] to-[#FFF] via-[#FFF] flex flex-col text-black"
          >
            <div className="flex flex-col p-6 gap-8">
              <div className="inline-flex justify-between items-center">
                <p className="inline-flex flex-col">
                  <span className="text-[12px] font-normal leading-normal">
                    Balance
                  </span>
                  <span className="text-[20px] font-semibold leading-normal">
                    ${card.balance}
                  </span>
                </p>
                <img src="./Chip.png" alt="" />
              </div>
              <div className="flex justify-around">
                <div className="inline-flex flex-col ">
                  <span className="text-black/70 text-[12px] font-normal leading-normal">
                    CARD HOLDER
                  </span>
                  <span className="text-[15px] font-semibold leading-normal">
                    {card.name}
                  </span>
                </div>
                <div className="inline-flex flex-col ">
                  <span className="text-black/70 text-[12px] font-normal leading-normal">
                    VALID THRU
                  </span>
                  <span className="text-[15px] font-semibold leading-normal">
                    {card.validity}
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-b-[25px] bg-gradient-to-b from-white/15 to-white/0 flex justify-between items-center py-[22px] px-6">
              <p className="font-semibold text-[22px]">
                {card.card_number
                  ? card.card_number.replace(/\d{4}(?=\d{4})/g, "****")
                  : "**** **** **** ****"}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="30"
                viewBox="0 0 44 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="15" fill="black" fillOpacity="0.3" />
                <circle cx="29" cy="15" r="15" fill="black" fillOpacity="0.3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCard;
