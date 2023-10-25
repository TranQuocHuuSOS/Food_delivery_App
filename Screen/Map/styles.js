import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    imagebackground:{
        flex: 1
    },
    search:{
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        paddingVertical: 20,
        borderRadius: 20,
        paddingHorizontal: 16,
        marginVertical: 56,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        marginHorizontal: 20,
        alignItems:"center"
    },
    textsearch:{
        paddingLeft: 8, fontSize: 16, color: "#9A89F2" 
    },
    button: {
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: "#6B50F6", 
        padding:15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 1,
        marginBottom: 10
      },
    
      text_button: {
        color: '#ffffff', 
        fontWeight: 'bold', 
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center"
      },

})
export default styles