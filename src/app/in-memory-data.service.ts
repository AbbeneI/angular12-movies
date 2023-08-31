import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 0,
        posterPath:
          "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
        releaseDate: "2020-12-16",
        title: "Wonder Woman 1984",
        cast: [
          "Gal Gadot",
          "Pedro Pascal",
          "Chris Pine",
          "Kristen Wiig",
          "Robin Wright"
        ]
      },
      {
        id: 1,
        posterPath:
          "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
        releaseDate: "2019-03-29",
        title: "Shazam!",
        cast: [
          "Zachary Levi",
          "Asher Angel",
          "Jack Grazer",
          "Mark Strong",
          "Grace Fulton"
        ]
      },
      {
        id: 2,
        posterPath:
          "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
        releaseDate: "2018-12-07",
        title: "Aquaman",
        cast: [
          "Jason Momoa",
          "Amber Heard",
          "Patrick Wilson",
          "Nicole Kidman",
          "Willem Dafoe"
        ]
      },
      {
        id: 3,
        posterPath:
          "https://image.tmdb.org/t/p/w500/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
        releaseDate: "2017-11-15",
        title: "Justice League",
        cast: [
          "Gal Gadot",
          "Ben Affleck",
          "Henry Cavill",
          "Jason Momoa",
          "Ray Fisher"
        ]
      },
      {
        id: 4,
        posterPath:
          "https://image.tmdb.org/t/p/w500/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg",
        releaseDate: "2017-05-30",
        title: "Wonder Woman",
        cast: [
          "Gal Gadot",
          "Pedro Pascal",
          "Chris Pine",
          "Kristen Wiig",
          "Robin Wright"
        ]
      },
      {
        id: 5,
        posterPath:
          "https://image.tmdb.org/t/p/w500/xFw9RXKZDvevAGocgBK0zteto4U.jpg",
        releaseDate: "2016-08-03",
        title: "Suicide Squad",
        cast: [
          "Jared Leto",
          "Margot Robbie",
          "Will Smith",
          "Cara Delevigne",
          "Pete Davidson"
        ]
      },
      {
        id: 6,
        posterPath:
          "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
        releaseDate: "2016-03-23",
        title: "Batman v Superman: Dawn of Justice",
        cast: [
          "Gal Gadot",
          "Ben Affleck",
          "Henry Cavill",
          "Amy Adams",
          "Jesse Eisenberg"
        ]
      },
      {
        id: 7,
        posterPath:
          "https://image.tmdb.org/t/p/w500/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg",
        releaseDate: "2013-06-12",
        title: "Man of Steel",
        cast: [
          "Henry Cavill",
          "Amy Adams",
          "Michael Shannon",
          "Kevin Costner",
          "Russell Crowe"
        ]
      },
      {
        id: 8,
        posterPath:
          "https://image.tmdb.org/t/p/w500/vzvKcPQ4o7TjWeGIn0aGC9FeVNu.jpg",
        releaseDate: "2012-07-16",
        title: "The Dark Knight Rises",
        cast: [
          "Christian Bale",
          "Anne Hathaway",
          "Tom Hardy",
          "Gary Oldman",
          "Joseph Gordon-Levitt"
        ]
      },
      {
        id: 9,
        posterPath:
          "https://image.tmdb.org/t/p/w500/fj21HwUprqjjwTdkKC1XZurRSpV.jpg",
        releaseDate: "2011-06-16",
        title: "Green Lantern",
        cast: [
          "Ryan Reynolds",
          "Blake Lively",
          "Mark Strong",
          "Peter Sarsgaard",
          "Taika Waititi"
        ]
      },
      {
        id: 10,
        posterPath:
          "https://image.tmdb.org/t/p/w500/1MpWjcCn8M0763QDoxcN0gXrc5q.jpg",
        releaseDate: "2010-06-18",
        title: "Jonah Hex",
        cast: [
          "Josh Brolin",
          "Megan Fox",
          "John Malkovich",
          "Michael Fassbender",
          "Will Arnett"
        ]
      },
      {
        id: 11,
        posterPath:
          "https://image.tmdb.org/t/p/w500/aZvOkdo203bm1kpcY0A0Tn074ER.jpg",
        releaseDate: "2009-03-05",
        title: "Watchmen",
        cast: [
          "Regina King",
          "Jeremy Irons",
          "Tim Nelson",
          "Don Johnson",
          "Jean Smart"
        ]
      },
      {
        id: 12,
        posterPath:
          "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        releaseDate: "2008-07-16",
        title: "The Dark Knight",
        cast: [
          "Christian Bale",
          "Gary Oldman",
          "Heath Ledger",
          "Michael Caine",
          "Morgan Freeman"
        ]
      },
      {
        id: 13,
        posterPath:
          "https://image.tmdb.org/t/p/w500/qIegbn6DSUYmggfwxOBNOVS35q.jpg",
        releaseDate: "2006-06-28",
        title: "Superman Returns",
        cast: [
          "Brandon Routh",
          "Kate Bosworth",
          "Kevin Spacey",
          "James Marsden",
          "Parker Posey"
        ]
      },
      {
        id: 14,
        posterPath:
          "https://image.tmdb.org/t/p/w500/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg",
        releaseDate: "2005-06-10",
        title: "Batman Begins",
        cast: [
          "Christian Bale",
          "Cillian Murphy",
          "Katie Holmes",
          "Michael Caine",
          "Liam Neeson"
        ]
      }
    ];
    return { movies };
  }
}
