// import { useContext } from 'react';
import StudentItem from './StudentItem';
// import { StudentContext } from '../context/StudentContext';

const StudentList = ({students}) => {

  // const {students} = useContext(StudentContext)
  console.log(students);
  return (
    <div>
      {students.map((student) => (
        <StudentItem key={student.id} studentx={student} />
      ))}
    </div>
  );
};

export default StudentList;
