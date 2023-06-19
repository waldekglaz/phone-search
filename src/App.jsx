import { useState } from "react";
import Finder from "./components/Finder";
import CategoryItem from "./components/CategoryItem";
import "./App.css";
import { data } from "./data";

function App() {
  const [phones, setPhones] = useState(data);
  const [finderName, setFinderName] = useState("Select Phone");
  const [isSelectClicked, setIsSelectClicked] = useState(false);
  const [isCategoryClicked, setIsCategoryClicked] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [phoneDetail, setPhoneDetail] = useState(null);
  const [isPhoneClicked, setIsPhoneClicked] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const handleOnSelectClick = () => {
    setIsSelectClicked(true);
    setPhones(data);
  };
  const handleOnCategoryClick = (e) => {
    const activeCategory = data.find(
      (item) => item.categoryName === e.target.textContent
    );

    console.log(activeCategory);
    setActiveCategory(activeCategory);
    setIsCategoryClicked(true);
    setFinderName(e.target.textContent);
    setIsSelectClicked(false);
    setPhones(activeCategory);
    setPhoneDetail(activeCategory.phones[0]);
  };

  const handleOnPhoneClick = (e, index) => {
    const activePhone = activeCategory.phones.find(
      (item) => item.name === e.target.textContent
    );
    setPhoneDetail(activePhone);
    setIsPhoneClicked(true);
    setActiveItemIndex(index);
  };

  return (
    <div>
      <Finder onClick={handleOnSelectClick} name={finderName} />
      {isSelectClicked &&
        phones.map((item) => (
          <CategoryItem
            key={item.categoryName}
            text={item.categoryName}
            onClick={handleOnCategoryClick}
            img={item.img}
          />
        ))}
      <div>
        {isCategoryClicked &&
          activeCategory.phones.map((item) => (
            <p
              onClick={handleOnPhoneClick(e)}
              key={item.name}
              className="phone"
            >
              {item.name}
            </p>
          ))}
      </div>
      {isCategoryClicked && (
        <div style={{ backgroundColor: "yellow", textAlign: "center" }}>
          <p>{phoneDetail.name}</p>
          <p>{phoneDetail.battery}</p>
        </div>
      )}
    </div>
  );
}

export default App;
