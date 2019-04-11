import Yup from "yup";
import { MIN_PASSWORD_LENGTH } from "../../../constants/index";

export const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string()
        .email("E-mail is not valid!")
        .required("E-mail is required!"),
    password: Yup.string()
        .min(
            MIN_PASSWORD_LENGTH,
            `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`
        )
        .required("Password is required!"),
    password2: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
    )
});
