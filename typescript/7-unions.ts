// unions
const orderPizza = (response: "YES" | "NO") => {
  if (response === "YES") {
    console.log("You have ordered a pizza!");
  }
  if (response === "NO") {
    console.log("You have not ordered a pizza!");
  }
};

orderPizza("NO");
