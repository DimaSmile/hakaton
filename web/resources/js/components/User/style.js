export const styles = theme => ({
    root: {
      width: "18%",
      textAlign: "center",
      margin: 10,
      position: "relative"
    },
    avatar:{
      margin: "10px auto",
      width: 100,
      height: 100,
    },
    label: {
      flexDirection: "column",
      margin: 0,
    },
    message: {
      margin: "11px 0",
    },
    flex: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    active: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "red",
      position: "absolute",
      bottom: 15,
      right: 15,
      cursor: "pointer",
      boxShadow: "inset 0 0 20px 10px rgba(161,0,0,0.6)"
    }
}); 
