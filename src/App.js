import React from "react";
import PropTypes from "prop-types";

const foodLike = [
  {
    id: 1,
    name: "갈비나라",
    add: "서울특별시 서대문구 통일로 87",
    rating: 1.3
  },
  { id: 2, name: "고갈비집", add: "종로구 관훈동 198-1", rating: 1 },
  { id: 3, name: "원조갈치", add: "인천광역시 서구 가남로 85", rating: 1 },
  {
    id: 4,
    name: "계룡대 닭갈비",
    add: "충청남도 계룡시 두마면 왕대로 146-5 (두마면 두계리 )",
    rating: 1.1
  },
  {
    id: 5,
    name: "세종어죽",
    add: "대전광역시 중구 대종로501번길 28 (선화동 )",
    rating: "1"
  }
];

// 함수형 컴포넌트
function Food({ name, add, rating }) {
  // console.log(name, add);
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>adress id {add}</h2>
      <p>{rating} /5 </p>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  add: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodLike.map(food => (
        <Food
          key={food.id}
          name={food.name}
          add={food.add}
          rating={food.rating}
        />
      ))}
    </div>
  );
}

export default App;
