import Yup from "yup";
import { MIN_PASSWORD_LENGTH } from "../../../constants/index";

export const UserSettingsSchema = Yup.object().shape({
    name: Yup.string(),
    password: Yup.string()
        .min(
            MIN_PASSWORD_LENGTH,
            `Password has to be longer than ${MIN_PASSWORD_LENGTH} characters!`
        ),
    password2: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
    )
});
