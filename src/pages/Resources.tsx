import React, { useState, useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
import "./pages.css";

const Resources: React.FC = () => {
  const [materials, setMaterials] = useState<Array<any>>([]);
  const [selectedType, setSelectedType] = useState<string>("all");

  useEffect(() => {
    fetch("http://localhost:3001/api/training-materials")
      .then((response) => response.json())
      .then((data) => setMaterials(data));
  }, []);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const filteredMaterials =
    selectedType === "all"
      ? materials
      : materials.filter((material) => material.type === selectedType);

  return (
    <div>
      <SideNavBar />
      <div className="resources-main">
        <div className="select-type">
          <label htmlFor="type-select">Filter by type:</label>
          <select
            id="type-select"
            value={selectedType}
            onChange={handleTypeChange}
          >
            <option value="all">All</option>
            <option value="video">Video</option>
            <option value="document">Document</option>
            <option value="assessment">Assessment</option>
            <option value="quiz">Quiz</option>
          </select>
        </div>
        <div className="materials">
          {filteredMaterials.map((material) => (
            <div key={material.material_id} className="material">
              <h3>{material.type}</h3>
              <a href={material.url} target="_blank">
                {material.url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
