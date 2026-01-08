const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

// Route to get all recipes

// Home page
router.get("/", recipeController.getRecipeHome);

// Add Recipe page (GET)
router.get("/createrecipe", recipeController.createRecipePage);

// Add Recipe form submit (POST)
router.post("/createrecipe", recipeController.createRecipeSubmit);

router.get("/getRecipeById/:id", recipeController.getRecipeById);

router.get("/deleteRecipe/:id", recipeController.deleteRecipe);
router.get("/updateRecipe/:id", recipeController.editRecipePage);
router.post("/updateRecipe/:id", recipeController.updateRecipeSubmit);

module.exports = router;
