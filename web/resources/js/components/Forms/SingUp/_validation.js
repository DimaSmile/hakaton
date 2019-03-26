import Yup from "yup";
import { MIN_PASSWORD_LENGTH } from "../../../constants/index";

export const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email("E-mail is not valid!")
        .required("E-mail is required!"),
    password1: Yup.string()
        .min(
            MIN_PASSWORD_LENGTH,
            `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`
        )
        .required("Password is required!"),
    password2: Yup.string()
        .required("Password confirmation is required!")
        .min(
            MIN_PASSWORD_LENGTH,
            `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`
        )
});
