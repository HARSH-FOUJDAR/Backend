const express = require("express");
const Recipe = require("../models/recipeModel");

//Get Request

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({
      success: true,
      data: recipes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

//UI RECIPIES SHOW

exports.getRecipeHome = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.render("RecipesHome", { recipes: recipes });
  } catch (error) {
    res.render("RecipesHome");
  }
};

// GET – Add Recipe page (form)
exports.createRecipePage = (req, res) => {
  res.render("CreateRecipies", {
    isEdit: false,
  });
};

// POST – Add Recipe form submit
exports.createRecipeSubmit = async (req, res) => {
  try {
    const { title, ingredients, instructions, cookTime, image } = req.body;
    console.log("REQ BODY ", req.body);
    // Validate input fields
    if (!title || !ingredients || !instructions || !cookTime || !image) {
      return res.status(400).render("CreateRecipies", {
        error: "All fields are required.",
      });
    }
    // Create new recipe
    await Recipe.create({
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions,
      cookTime,
      image,
    });
    res.redirect("/");
  } catch (error) {
    console.log("Create Recipe Error", error);
    res.status(500).render("CreateRecipies", {
      error: "Server error. Please try again later.",
    });
  }
};

exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.render("Recipeindex", { recipe});
  } catch (error) {
    res.render("/");
  }
};

// Delete Recipe
exports.deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.redirect("/");
  }
};

// Edit Recipe Page
exports.editRecipePage = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    console.log(recipe);
    res.render("CreateRecipies", { recipe, isEdit: true });
  } catch (error) {
    res.redirect("/");
  }
};

// Edit Recipe Submit
exports.updateRecipeSubmit = async (req, res) => {
  try {
    const { title, ingredients, instructions, cookTime, image } = req.body;
    await Recipe.findByIdAndUpdate(req.params.id, {
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions: instructions,
      cookTime,
      image,
    },
    { new: true }
  );
    res.redirect("/");
  } catch (error) {
    res.redirect("/");
  }
};
