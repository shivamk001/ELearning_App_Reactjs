import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";

// Task4: Import all the required elements from the react-router-dom

function Learn() {
  let {courseId}=useParams()
  //console.log('Params:', courseId)
  let course=coursesData.find(course=>course.id===courseId)
  //console.log('Course:', course)

  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <Link to='/courses'>
          <h2 className={style.back}>{"<<"}</h2>
        </Link>
        

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>{/*Task4: List of Chapters must be rendered here  */}
            {course.chapters.map(chapter=>(
              <div key={chapter.chapter}>
                <Link to={`chapter/${chapter.chapter}`}>{chapter.title}</Link>
              </div>
            ))}
          </ul>
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here */}
        <Outlet context={{...course}}/>
      </div>
    </div>
</div>
  );
}

export default Learn;
