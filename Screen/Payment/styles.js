import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    container_total: {
        paddingTop:20,
       
      },
      imageTotal: {
        backgroundColor: "#6B50F6",
        height: 190,
        borderRadius: 20,
      },
      sub_total: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      },
      delivery: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      },
      discount: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      },
      total: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        color: "white",
        marginTop: 10,
      },
      text_total: {
        color: "white",
      },
      number_total: {
        color: "white",
      },
      text_totals: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
      number_totals: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
      button: {
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: "white", 
        padding:15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
      },
    
      text_button: {
        color: '#6B50F6', 
        fontWeight: 'bold', 
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center"
      },
})
export default styles