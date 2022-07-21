# Context

- Context yapıyı kullanmadan önce props ile verileri components arası taşıdık, aşağıda geçişlerin nasıl yapıldığı mevcut

app.js

```
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

```

StudentList.js

```
import StudentItem from './StudentItem';


const StudentList = ({students}) => {


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
```

StudentItem.js

```
const StudentItem = ({ studentx }) => {
  const { id, name, age, color, email } = studentx;

  return (
    <div
      style={{
        background: studentx.color,
        paddingBottom: '2rem',
        paddingTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <h3>NAME:{name}</h3>
      <h4>EMAIL:{email}</h4>
      <h4>AGE:{age}</h4>
      Color: <input type="text" name="color" value={color} />
    </div>
  );
};

export default StudentItem;

```



