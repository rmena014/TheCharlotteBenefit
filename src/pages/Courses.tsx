import React, { useState, useEffect } from "react";
import SideNavBar from "../components/SideNavBar";
import "./pages.css";
import axios from "axios";

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/api/courses", {
        params: { name: searchTerm },
      });
      setCourses(result.data);
    };
    fetchData();
  }, [searchTerm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <SideNavBar />
      <div className="courses-main">
        <input
          type="text"
          placeholder="Search by course name"
          value={searchTerm}
          onChange={handleChange}
          className="bg-gray-200 rounded-lg p-2 w-89 focus:outline-none focus:shadow-outline"
        />
        <div className="course-cards">
          {courses.map((course) => {
            const startDate = new Date(course.start_date).toLocaleDateString();
            const endDate = new Date(course.end_date).toLocaleDateString();

            return (
              <div key={course.course_id} className="course-card">
                <h2 className="course-name">{course.name}</h2>
                <p className="course-info">{course.description}</p>
                <p className="course-date">
                  Course dates: {startDate} - {endDate}
                </p>
                <p className="course-instructor">
                  Instructor: {course.instructor}
                </p>
                <button className="enroll-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5">
                  Enroll
                </button>
              </div>
            );
          })}
        </div>{" "}
      </div>
    </div>
  );
};

export default Courses;
