# Components and Props

<img src="./src/notes/components-props-1.jpeg">
<img src="./src/notes/components-props-2.jpeg">


```
import React from 'react'

const Form = (props) => {
  return (
    <div>Form

<button>{props.formbuton}</button>



    </div>
  )
}

export default Form



sayfasında kullandığımız props u App.js içinde import ederek kullanabiliyoruz.

App.js =>



 <Form formbuton="back"/>

```