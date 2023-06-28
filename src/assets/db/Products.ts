import { CategoryProducts } from "../../Types/Products";
import * as images from '../../img'

export const Products: CategoryProducts[] = [
	{   id: 1,
        name: "Films",
        img: images.movie0,
        items: [
            {
                id: 1,
                nameProduct: "The Shawshank Redemption",
                img: images.movie1,
                stock: true,
                price: 10.99
            },
            {
                id: 2,
                nameProduct: "The Godfather",
                img: images.movie2,
                stock: true,
                price: 9.99
            },
            {
                id: 3,
                nameProduct: "The Godfather: Part II",
                img: images.movie3,
                stock: true,
                price: 11.99
            },
            {
                id: 4,
                nameProduct: "The Dark Knight",
                img: images.movie4,
                stock: true,
                price: 11.99
            },
            {
                id: 5,
                nameProduct: "12 Angry Men",
                img: images.movie5,
                stock: true,
                price: 11.99
            },
            {
                id: 6,
                nameProduct: "Schindler's List",
                img: images.movie6,
                stock: true,
                price: 11.99
            },
            {
                id: 7,
                nameProduct: "The Lord of the Rings: The Return of the King",
                img: images.movie7,
                stock: true,
                price: 11.99
            },
            {
                id: 8,
                nameProduct: "Pulp Fiction",
                img: images.movie8,
                stock: true,
                price: 11.99
            },
            {
                id: 9,
                nameProduct: "The Good, the Bad and the Ugly",
                img: images.movie9,
                stock: true,
                price: 11.99
            },
            {
                id: 10,
                nameProduct: "Fight Club",
                img: images.movie10,
                stock: true,
                price: 11.99
            },
            {
                id: 11,
                nameProduct: "The Lord of the Rings: The Fellowship of the Ring",
                img: images.movie11,
                stock: true,
                price: 11.99
            },
            {
                id: 12,
                nameProduct: "Forrest Gump",
                img: images.movie12,
                stock: true,
                price: 11.99
            },
            {
                id: 13,
                nameProduct: "Inception",
                img: images.movie13,
                stock: true,
                price: 11.99
            },
            {
                id: 14,
                nameProduct: "Star Wars: Episode V - The Empire Strikes Back",
                img: images.movie14,
                stock: true,
                price: 11.99
            },
            {
                id: 15,
                nameProduct: "The Lord of the Rings: The Two Towers ",
                img: images.movie15,
                stock: true,
                price: 11.99
            },
            {
                id: 16,
                nameProduct: "The Matrix",
                img: images.movie16,
                stock: true,
                price: 11.99
            },
            {
                id: 17,
                nameProduct: "Goodfellas",
                img: images.movie17,
                stock: true,
                price: 11.99
            },
            {
                id: 18,
                nameProduct: "One Flew Over the Cuckoo's Nest",
                img: images.movie18,
                stock: true,
                price: 11.99
            },
            {
                id: 19,
                nameProduct: "Seven Samurai",
                img: images.movie19,
                stock: true,
                price: 11.99
            },
            {
                id: 20,
                nameProduct: "Se7en",
                img: images.movie20,
                stock: true,
                price: 8.99
            }
        ],
	},
	{   id: 2,
        name: "TV Series",
        img: images.serie0,
        items: [
		{
			id: 1,
			nameProduct: "Breaking Bad",
			img: images.serie1,
			stock: true,
			price: 12.99
		},
		{
			id: 2,
			nameProduct: "Chernobyl",
			img: images.serie2,
			stock: true,
			price: 14.99
		},
		{
			id: 3,
			nameProduct: "Game of Thrones",
			img: images.serie3,
			stock: true,
			price: 9.99
		},
		{
			id: 4,
			nameProduct: "Band of Brothers",
			img: images.serie4,
			stock: true,
			price: 12.99
		},
		{
			id: 5,
			nameProduct: "The Wire",
			img: images.serie5,
			stock: true,
			price: 12.99
		},
		{
			id: 6,
			nameProduct: "Planet Earth II",
			img: images.serie6,
			stock: true,
			price: 12.99
		},
		{
			id: 7,
			nameProduct: "Planet Earth",
			img: images.serie7,
			stock: true,
			price: 12.99
		},
		{
			id: 8,
			nameProduct: "The Sopranos",
			img: images.serie8,
			stock: true,
			price: 12.99
		},
		{
			id: 9,
			nameProduct: "Rick and Morty",
			img: images.serie9,
			stock: true,
			price: 12.99
		},
		{
			id: 10,
			nameProduct: "The Twilight Zone",
			img: images.serie10,
			stock: true,
			price: 12.99
		},
		{
			id: 11,
			nameProduct: "Friends",
			img: images.serie11,
			stock: true,
			price: 12.99
		},
		{
			id: 12,
			nameProduct: "The Crown",
			img: images.serie12,
			stock: true,
			price: 12.99
		},
		{
			id: 13,
			nameProduct: "Stranger Things",
			img: images.serie13,
			stock: true,
			price: 12.99
		},
		{
			id: 14,
			nameProduct: "Sherlock",
			img: images.serie14,
			stock: true,
			price: 12.99
		},
		{
			id: 15,
			nameProduct: "True Detective",
			img: images.serie15,
			stock: true,
			price: 12.99
		},
		{
			id: 16,
			nameProduct: "Fargo",
			img: images.serie16,
			stock: true,
			price: 12.99
		},
		{
			id: 17,
			nameProduct: "Death Note",
			img: images.serie17,
			stock: true,
			price: 12.99
		},
		{
			id: 18,
			nameProduct: "The Office",
			img: images.serie18,
			stock: true,
			price: 12.99
		},
		{
			id: 19,
			nameProduct: "The Mandalorian",
			img: images.serie19,
			stock: true,
			price: 12.99
		},
		{
			id: 20,
			nameProduct: "Black Mirror",
			img: images.serie20,
			stock: true,
			price: 11.99
		}
	],
	},
	{
	    id: 3,
        name: "Videogames",
        img: images.game0,
        items: [
		{
			id: 1,
			nameProduct: "The Legend of Zelda: Ocarina of Time",
			img: images.game1,
			stock: true,
			price: 59.99
		},
		{
			id: 2,
			nameProduct: "Super Mario Bros. 3",
			img: images.game2,
			stock: true,
			price: 39.99
		},
		{
			id: 3,
			nameProduct: "Tetris",
			img: images.game3,
			stock: true,
			price: 49.99
		},
		{
			id: 4,
			nameProduct: "The Legend of Zelda: Breath of the Wild",
			img: images.game4,
			stock: true,
			price: 49.99
		},
		{
			id: 5,
			nameProduct: "Super Mario 64",
			img: images.game5,
			stock: true,
			price: 49.99
		},
		{
			id: 6,
			nameProduct: "Minecraft",
			img: images.game6,
			stock: true,
			price: 49.99
		},
		{
			id: 7,
			nameProduct: "Grand Theft Auto V",
			img: images.game7,
			stock: true,
			price: 49.99
		},
		{
			id: 8,
			nameProduct: "Red Dead Redemption 2",
			img: images.game8,
			stock: true,
			price: 49.99
		},
		{
			id: 9,
			nameProduct: "Super Mario World",
			img: images.game9,
			stock: true,
			price: 49.99
		},
		{
			id: 10,
			nameProduct: "The Elder Scrolls V: Skyrim",
			img: images.game10,
			stock: true,
			price: 49.99
		},
		{
			id: 11,
			nameProduct: "Portal 2",
			img: images.game11,
			stock: true,
			price: 49.99
		},
		{
			id: 12,
			nameProduct: "Metal Gear Solid",
			img: images.game12,
			stock: true,
			price: 49.99
		},
		{
			id: 13,
			nameProduct: "The Last of Us",
			img: images.game13,
			stock: true,
			price: 49.99
		},
		{
			id: 14,
			nameProduct: "Final Fantasy VII",
			img: images.game14,
			stock: true,
			price: 49.99
		},
		{
			id: 15,
			nameProduct: "God of War",
			img: images.game15,
			stock: true,
			price: 49.99
		},
		{
			id: 16,
			nameProduct: "Half-Life 2",
			img: images.game16,
			stock: true,
			price: 49.99
		},
		{
			id: 17,
			nameProduct: "Halo: Combat Evolved",
			img: images.game17,
			stock: true,
			price: 49.99
		},
		{
			id: 18,
			nameProduct: "Chrono Trigger",
			img: images.game18,
			stock: true,
			price: 49.99
		},
		{
			id: 19,
			nameProduct: "Super Metroid",
			img: images.game19,
			stock: true,
			price: 49.99
		},
		{
			id: 20,
			nameProduct: "Mass Effect 2",
			img: images.game20,
			stock: true,
			price: 54.99
		}
	],
	},
	{
	    id: 4,
        name: "Music",
        img: images.music0,
        items: [
		{
			id: 1,
			nameProduct: "The Beatles - Sgt. Pepper's Lonely Hearts Club Band",
			img: images.music1,
			stock: true,
			price: 8.99
		},
		{
			id: 2,
			nameProduct: "The Beach Boys - Pet Sounds",
			img: images.music2,
			stock: true,
			price: 7.99
		},
		{
			id: 3,
			nameProduct: "The Rolling Stones - Exile on Main St.",
			img: images.music3,
			stock: true,
			price: 9.99
		},
		{
			id: 4,
			nameProduct: "Bob Dylan - Highway 61 Revisited",
			img: images.music4,
			stock: true,
			price: 9.99
		},
		{
			id: 5,
			nameProduct: "Marvin Gaye - What's Going On",
			img: images.music5,
			stock: true,
			price: 9.99
		},
		{
			id: 6,
			nameProduct: "The Clash - London Calling",
			img: images.music6,
			stock: true,
			price: 9.99
		},
		{
			id: 7,
			nameProduct: "Bob Dylan - Blonde on Blonde",
			img: images.music7,
			stock: true,
			price: 9.99
		},
		{
			id: 8,
			nameProduct: "The Beatles - Abbey Road",
			img: images.music8,
			stock: true,
			price: 9.99
		},
		{
			id: 9,
			nameProduct: "Nirvana - Nevermind",
			img: images.music9,
			stock: true,
			price: 9.99
		},
		{
			id: 10,
			nameProduct: "Prince and The Revolution - Purple Rain",
			img: images.music10,
			stock: true,
			price: 9.99
		},
		{
			id: 11,
			nameProduct: "Michael Jackson - Thriller",
			img: images.music11,
			stock: true,
			price: 9.99
		},
		{
			id: 12,
			nameProduct: "Bruce Springsteen - Born to Run",
			img: images.music12,
			stock: true,
			price: 9.99
		},
		{
			id: 13,
			nameProduct: "Led Zeppelin - Led Zeppelin IV",
			img: images.music13,
			stock: true,
			price: 9.99
		},
		{
			id: 14,
			nameProduct: "Stevie Wonder - Songs in the Key of Life",
			img: images.music14,
			stock: true,
			price: 9.99
		},
		{
			id: 15,
			nameProduct: "Fleetwood Mac - Rumours",
			img: images.music15,
			stock: true,
			price: 9.99
		},
		{
			id: 16,
			nameProduct: "The Rolling Stones - Sticky Fingers",
			img: images.music16,
			stock: true,
			price: 9.99
		},
		{
			id: 17,
			nameProduct: "David Bowie - The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
			img: images.music17,
			stock: true,
			price: 9.99
		},
		{
			id: 18,
			nameProduct: "Oasis - (What's the story) Morning glory",
			img: images.music18,
			stock: true,
			price: 9.99
		},
		{
			id: 19,
			nameProduct: "Pink Floyd - The Dark Side of the Moon",
			img: images.music19,
			stock: true,
			price: 9.99
		},
		{
			id: 20,
			nameProduct: "Queen - Greatest Hits",
			img: images.music20,
			stock: true,
			price: 10.99
		}
	]
	}
	]
