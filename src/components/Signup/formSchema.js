import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().min(2).required("Name is a required field"),
  email: yup
    .string()
    .email("Please use a valid email address")
    .required("Email is a required field"),
  password: yup.string().min(8).required("Password is a required field"),
});
export default formSchema;
