import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup.string().min(8).required("Name is a required field"),
  password: yup.string().min(8).required("Password is a required field"),
});
export default formSchema;
