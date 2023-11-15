import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 70,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    paddingTop: 60,
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "sans-serif",
  },
  notificationButton: {
    width: 50,
    height: 50,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#f1eeff",
    borderRadius: 10,
    paddingVertical: 10,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  searchInput: {
    placeholder: "What do you want to order?",
    placeholderTextColor: "#6B50F6",
    width: 220,
  },
  filterButton: {
    paddingVertical: 13,
    backgroundColor: "#f1eeff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  typeLocationFoodContainer: {
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  categoryItem: {
    marginRight: 35,
    borderRadius: 8,
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: "#dfdcee",
    marginVertical: 19,
  },
  searchButton: {
    backgroundColor: "#6B50F6",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 130,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default styles;
