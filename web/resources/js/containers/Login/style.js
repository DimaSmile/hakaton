import bgImg from './../../images/login_bg.jpg';

export const styles = theme => ({
    root: {
        width: "100%",
        height: "100vh",
        background: "#fefcea",
        // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        background: "url(" + bgImg + ") 0 0 no-repeat",
        backgroundSize: 'cover',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    formWrapper: {
        maxWidth: "500px",
        background: "#fff"
    }
});
