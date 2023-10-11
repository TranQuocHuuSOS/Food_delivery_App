import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#FEFEFF",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    flex:1,
    color:"#6B50F6"
  },
  content: {
    marginHorizontal: 25,
   
  },
  text: {
    paddingTop: 60,
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "sans-serif",
  },
  card_food: {
    marginHorizontal: 25,
   
  },
  container_total: {
    marginHorizontal: 25,
    paddingTop: "20%",
    
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
  card:{
    width:"100%",
    justifyContent:"space-between",
    backgroundColor:"",
    flexDirection:"row",
    padding: 15,
    borderRadius: 10,
    marginHorizontal:20
  },
  amount:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center",
  },
  plus:{
    width: 30,
    height:30,
    borderRadius: 5,
    backgroundColor:"#EAE6F9",
    justifyContent:"center",
    alignItems:"center",
  },
  minus:{
    width: 30,
    height:30,
    borderRadius: 5,
    backgroundColor:"#6B50F6",
    justifyContent:"center",
    alignItems:"center",
  },
  number:{
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal: 10
  },
  constainer_total:{
    shadowColor: '#6B50F6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
    margin: 20,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    margin: 10,
    textAlign: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    padding: 5,
    borderRadius: 25,
    marginBottom: 5,
    marginTop: 20
  },
  itemText: {
    color: '#333',
    fontWeight: 'bold',
  },
  hiddenContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#6B50F6',
    padding: 15,
    borderRadius: 25,
    marginTop:20,
  },
  hiddenButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 80,
  },
  closeButton: {
    backgroundColor: 'green',
    borderRadius: 20,
  },
  deleteButton: {
    backgroundColor: '#6B50F6',
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  images_dish:{
    width: 50,
    height: 50
  }
});
export default styles;
