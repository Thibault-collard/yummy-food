# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

restaurants = Restaurant.create([
    {
        name: "chinatown",
        image_url: "https://resyummy.s3.eu-west-3.amazonaws.com/chinatown.jpg"
    },
    {
        name: "e-sushi",
        image_url: "https://resyummy.s3.eu-west-3.amazonaws.com/e-sushi.png"
    },
    {
        name: "kyo",
        image_url: "https://resyummy.s3.eu-west-3.amazonaws.com/logo-kyo.jpg"
    },
    {
        name: "sushishop",
        image_url: "https://resyummy.s3.eu-west-3.amazonaws.com/sushi_shop.jpg"
    },
    {
        name: "yatta",
        image_url: "https://resyummy.s3.eu-west-3.amazonaws.com/yatta.png"
    },
    {
        name: "bowlicious",
        image_url: "https://resyummy.s3.eu-west-3.amazonaws.com/bowlicious.jfif"
    },
])

reviews = Review.create([{
    title: 'Amazing',
    description: "Sushi and makis are delicious",
    score: 5,
    restaurant: restaurants.first
    },{  
        title: 'Awful',
        description: "I have been sick for 3 days after eating on this restaurant...",
        score: 1,
        restaurant: restaurants.first
    }
])