import React from "react";

const menuList = [
  {
    id: 1,
    label: "All work",
  },
  {
    id: 2,
    label: "Branding",
  },
  {
    id: 3,
    label: "Marketing",
  },
  {
    id: 4,
    label: "Planning",
  },
  {
    id: 5,
    label: "Research",
  },
];

const portfolioObj = {
  allWork: [
    {
      img: "https://picsum.photos/500/300?random=0",
      desc: "Short description for the ones who look for something new. Awesome!",
      name: "Graphics Design",
    },
    {
      img: "https://picsum.photos/500/300?random=1",
      desc: "Short description for the ones who look for something new. Awesome!",
      name: "Graphics Design",
    },
    {
      img: "https://picsum.photos/500/300?random=2",
      desc: "Short description for the ones who look for something new. Awesome!",
      name: "Graphics Design",
    },
    {
      img: "https://picsum.photos/500/300?random=3",
      desc: "Short description for the ones who look for something new. Awesome!",
      name: "Graphics Design",
    },
    {
      img: "https://picsum.photos/500/300?random=4",
      desc: "Short description for the ones who look for something new. Awesome!",
      name: "Graphics Design",
    },
    {
      img: "https://picsum.photos/500/300?random=5",
      desc: "Short description for the ones who look for something new. Awesome!",
      name: "Graphics Design",
    },
  ],
};

const PortfolioCard = () => {
  return (
    <>
      <div className="flex justify-center ">
        <nav className="w-4/6">
          <ul className="flex items-center justify-around">
            {menuList?.map((li) => (
              <li key={li.id}>{li.label}</li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default PortfolioCard;
