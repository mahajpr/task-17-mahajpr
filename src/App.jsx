import React from 'react'
import StudentCard from './components/StudentCard'


function App() {
  return (
    <div>
      <h1>Student Details</h1>
      <StudentCard 
      name ="Rahul"
      department ="computer science"
      cgpa ="8.9"/>

      <StudentCard
      name="divya"
      department ="computer application"
      cgpa ="8.5"/>

      <StudentCard
      name="john"
      department ="Artifical intelligence"
      cgpa ="8.7"/>
    </div>
  )
};

export default App;