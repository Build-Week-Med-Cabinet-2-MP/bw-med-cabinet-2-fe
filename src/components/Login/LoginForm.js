// import React, { useState, useEffect, useParams } from "react";
// import axios from "axios";
// import formSchema from "./formSchema";
// import * as yup from "yup";

// const initialLoginFormValues = {
//   name: "",
//   password: "",
// };

// const initialLoginFormErrors = {
//   name: "",
//   password: "",
// };

// const loginForm = () => {
//   const [formValues, setFormValues] = useState(initialLoginFormValues);
//   const [formErrors, setFormErrors] = useState(initialLoginFormErrors);

//   const onInputChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;

//     yup
//       .reach(formSchema, name)
//       .validate(value)
//       .then((valid) => {
//         setFormErrors({
//           ...formErrors,
//           [name]: "",
//         });
//       })
//       .catch((error) => {
//         setFormErrors({
//           ...formErrors,
//           [name]: error.errors[0],
//         });
//       });

//     setFormValues({ ...formValues, [name]: value });
//   };
//   useEffect(() => {
//     formSchema.isValid(formValues).then((valid) => {
//       // console.log(valid);
//       setDisabled(!valid);
//     });
//   }, [formValues]);
// };
