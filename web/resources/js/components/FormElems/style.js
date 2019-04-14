export const styles = theme => ({
    root: {
        borderBottom: "1px solid #949494",
        paddingBottom: "1px",
        marginBottom: "15px",
        "&:hover": {
            borderBottom: "2px solid #000",
            paddingBottom: "0px"
        },
        "& .react-datepicker-wrapper":{
            width: "100%"
        },
        "& .react-datepicker__input-container": {
            width: "100%"
        },
        "& .react-datepicker__input-container input": {
            border: "none",
            width: "100%"
        },
        "& .react-datepicker__header": {
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        },
        "& .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range": {
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        },
        "& .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header": {
            fontWeight: 400
        }
    },
    label: {
        color: "#0000008a",
        fontSize: "12px"
    }
});
