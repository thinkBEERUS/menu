import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  Modal,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Fastfood, LocalBar } from "@mui/icons-material";

import "./App.css";
import ItemModal from "./ItemModal";

function App() {
  const [menu, setMenu] = useState("food");
  const [selectedItem, setSelectedItem] = useState(null);
  const [modal, setModal] = useState(false);

  const foodCategories = [
    {
      name: "Appetizers",
      items: [
        {
          name: "Fried Calamari",
          description: "Deep-fried squid rings served with marinara sauce.",
        },
        {
          name: "Buffalo Wings",
          description: "Spicy chicken wings served with blue cheese dressing.",
        },
        {
          name: "Bruschetta",
          description: "Toasted bread topped with tomatoes, garlic, and basil.",
        },
      ],
    },
    {
      name: "Entrees",
      items: [
        {
          name: "Spaghetti Bolognese",
          description: "Spaghetti served with a meaty tomato sauce.",
        },
        {
          name: "Chicken Alfredo",
          description:
            "Fettuccine pasta with chicken and creamy Alfredo sauce.",
        },
        {
          name: "Beef Stroganoff",
          description: "Sliced beef in a sour cream sauce served with noodles.",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Tiramisu",
          description:
            "Italian dessert made with ladyfingers, mascarpone cheese, and espresso.",
        },
        {
          name: "Chocolate Cake",
          description:
            "Moist and rich chocolate cake served with vanilla ice cream.",
        },
        {
          name: "Cannoli",
          description:
            "Italian pastry filled with sweet ricotta cheese and chocolate chips.",
        },
      ],
    },
  ];

  const drinksCategories = [
    {
      name: "Beer",
      items: [
        {
          name: "IPA",
          description: "India Pale Ale, a hoppy and bitter beer.",
        },
        {
          name: "Stout",
          description: "Dark beer made with roasted malt or barley.",
        },
        {
          name: "Lager",
          description: "Crisp and refreshing beer brewed at low temperatures.",
        },
      ],
    },
    {
      name: "Wine",
      items: [
        {
          name: "Red",
          description: "Wine made from red grapes, often full-bodied and rich.",
        },
        {
          name: "White",
          description:
            "Wine made from white or green grapes, often lighter and more acidic.",
        },
        {
          name: "Sparkling",
          description:
            "Wine with bubbles, often associated with celebrations and toasting.",
        },
      ],
    },
    {
      name: "Cocktails",
      items: [
        {
          name: "Margarita",
          description: "Tequila-based cocktail with lime and salt.",
        },
        {
          name: "Old Fashioned",
          description: "Whiskey-based cocktail with sugar and bitters.",
        },
        {
          name: "Mojito",
          description: "Rum-based cocktail with mint and lime.",
        },
      ],
    },
  ];

  const handleMenuChange = (event, newValue) => {
    setMenu(newValue);
    setSelectedItem(null);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModal(true);
  };

  return (
    <Box sx={{ bgcolor: "#333", color: "#fff", top: 0 }}>
      <Typography
        variant="h6"
        align="center"
        style={{
          fontWeight: "bolder",
          bgcolor: "#333",
          color: "#fff",
          textTransform: "uppercase",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        Oukraal Demo
      </Typography>
      <Grid container spacing={3}>
        {menu === "food" &&
          foodCategories.map((category) => (
            <Grid item xs={12} md={4} key={category.name}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{category.name}</Typography>
                  {category.items.map((item) => (
                    <Box
                      key={item.name}
                      sx={{
                        my: 2,
                        p: 2,
                        border: "1px solid lightgrey",
                        borderRadius: 2,
                        bgcolor: "#333",
                        color: "#fff",
                      }}
                      onClick={() => handleItemClick(item)}
                    >
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body1">
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        {menu === "drinks" &&
          drinksCategories.map((category) => (
            <Grid item xs={12} md={4} key={category.name}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{category.name}</Typography>
                  {category.items.map((item) => (
                    <Box
                      key={item.name}
                      sx={{
                        my: 2,
                        p: 2,
                        border: "1px solid lightgrey",
                        borderRadius: 2,
                        bgcolor: "#333",
                        color: "#fff",
                      }}
                      onClick={() => handleItemClick(item)}
                    >
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="body1">
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      {selectedItem && (
        <ItemModal
          modal={modal}
          setModal={setModal}
          selectedItem={selectedItem}
        />
      )}
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          bgcolor: "#333",
          color: "#fff",
          display: "flex",
          justifyContent: "space-around",
          margin: 0,
        }}
      >
        <Button
          onClick={(event) => handleMenuChange(event, "food")}
          sx={{
            color: "black",
            borderRadius: 50,
            backgroundColor: "white",
            margin: "5px",
          }}
        >
          <Fastfood sx={{ mr: 1 }} />
          Food
        </Button>
        <Button
          onClick={(event) => handleMenuChange(event, "drinks")}
          sx={{
            color: "black",
            borderRadius: 50,
            backgroundColor: "white",
            margin: "5px",
          }}
        >
          <LocalBar sx={{ mr: 1 }} />
          Drinks
        </Button>
      </Box>
    </Box>
  );
}

export default App;
