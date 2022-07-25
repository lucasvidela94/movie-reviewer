movies = Movie.create([
    {   
        name:"El gran Gatsby",
        image_url:"https://i.blogs.es/6c7178/el-20gran-20gatsby-20la-20pelicula/1366_2000.jpg"
    },
    {
        name:"Los vengadores:Era de ultron",
        image_url:"https://sm.ign.com/ign_es/screenshot/default/avengers2-poster2_eh1g.jpg"
    },
    {
        name:"Cuestion de tiempo",
        image_url:"https://i.blogs.es/3090b2/about-20time-20poster/450_1000.jpg"
    },
    {
        name:"Sword art online",
        image_url:"https://static.wikia.nocookie.net/sao/images/b/b5/La_pel%C3%ADcula_Sword_Art_Online_Ordinal_Scale.png/revision/latest?cb=20170208025507&path-prefix=es"
    }
])

reviews = Review.create([
    {
        title: "Maravillosa pelicula",
        description:"Es para ver en familia",
        score:5,
        movie:movies.first
    },
    {
        title: "Me gusto pero le falta accion",
        description:"El drama es bueno solo falto accion",
        score:3,
        movie:movies.first
    }
    
])