import { useState } from 'react';
import StudentList from './components/StudentList';
// import {StudentContext} from './context/StudentContext'
import data from './data';

function App() {
  const [students_data, setStudents_data] = useState(data);

  return (
    <div>
      <StudentList students={students_data} />
      {/* <StudentContext.Provider value={{students}}>
      <StudentList  />
      </StudentContext.Provider> */}
     
    </div>
  );
}
export default App;
