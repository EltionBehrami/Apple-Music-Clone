require "open-uri"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    User.destroy_all 
    Song.destroy_all 
    Album.destroy_all 
    Artist.destroy_all 

    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."

    User.create!(
    first_name: 'Eltion', 
    last_name: 'Behrami', 
    birthdate: Faker::Date.birthday(min_age: 18, max_age: 65),
    email: 'demo@user.io', 
    password: 'password',
    )

    # 10.times do 
    #     User.create!({
    #         first_name: Faker::Name.first_name,
    #         last_name: Faker::Name.last_name,
    #         birthdate: Faker::Date.birthday(min_age: 18, max_age: 65),
    #         email: Faker::Internet.unique.email,
    #         password: 'password'
    #     }) 
    # end

    # 20.times do Album.create!({
    #     title: Faker::Music.album, 
    #     artist_id: 1, 
    #     album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/67/f8/0c/67f80cef-4d4e-4792-1c69-c1d614065005/197189165450.jpg/296x296bf.webp",
    #     genre: Faker::Music.genre

    # })

    Artist.create!({
        name: "The Strokes"
    })

    Artist.create!({
        name: "Beyoncé"
    })

    Artist.create!({
        name: "Bad Bunny"
    })

    Artist.create!({
        name: "Él Mató a un Policía Motorizado"
    })

    Artist.create!({
        name: "The Marias"
    })

    Artist.create!({
        name: "Nicki Minaj"
    })
    
    Artist.create!({
        name: "Mac Miller"
    })

    Artist.create!({
        name: "Rihanna"
    })

    Artist.create!({
        name: "Kendrick Lamar"
    })

    Artist.create!({
        name: "ROSALÍA"
    })

    Artist.create!({
        name: "Pink Floyd"
    })

    Artist.create!({
        name: "Supertramp"
    })

    Artist.create!({
        name: "Billie Eilish"
    })

    Artist.create!({
        name: "Coldplay"
    })

    Artist.create!({
        name: "SZA"
    })

    Artist.create!({
        name: "Frank Ocean"
    })



    Renaissance = Album.create!({
        title:"Renaissance", 
        artist_id: 2, 
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/bc/86/3c/bc863c3f-7e0d-9461-9173-f730e6f753dc/Job7fc82b4f-fa53-4dea-89bd-4888c34e5a72-134554558-PreviewImage_preview_image_nonvideo_sdr-Time1659042308000.png/592x592bb.webp",
        genre: "Pop"
    })

    The_New_Abnormal = Album.create!({
        title:"The New Abnormal ", 
        artist_id: 1, 
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/62/a6/ff/62a6ff2a-95c9-5302-31f4-2dcca9e40323/886448281085.jpg/296x296bb.webp",
        genre: "Alternative"

    })

    Un_Verano_Sin_Ti = Album.create!({
        title:"Un Verano Sin Ti", 
        artist_id: 3, 
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/c9/e2/f8/c9e2f8ea-c2a2-49b9-eebf-66ea5f267790/Jobfc0d3061-1590-4be8-95f2-d8f3007a8605-131553921-PreviewImage_preview_image_nonvideo_sdr-Time1651765457160.png/592x592bb.webp",
        genre: "Latin"

    })

    Súper_Terror = Album.create!({
        title:"Súper Terror", 
        artist_id: 4,
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/67/f8/0c/67f80cef-4d4e-4792-1c69-c1d614065005/197189165450.jpg/296x296bf.webp",
        genre: "Latin"
    })

    Cinema = Album.create!({
        title:"Cinema", 
        artist_id: 5, 
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0b/67/3f/0b673fd4-5e49-fccd-6193-3076bef03f53/075679792389.jpg/296x296bb.webp",
        genre: "Alternative"
    })

    Queen = Album.create!({
        title:"Queen", 
        artist_id: 6, 
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/77/77/0a/77770abc-c365-81d2-0ad1-439d29e2794e/18UMGIM36518.rgb.jpg/296x296bb.webp",
        genre: "Hip Hop/Rap"

    })

    Swimming = Album.create!({
        title:"Swimming", 
        artist_id: 7, 
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/ad/f9/a3/adf9a3d0-d724-6bc1-f6c1-0f54dd250724/Job9fda9c70-f0f3-4b6a-aea0-7d6223261c1c-153725570-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_293708555_1519966460-Time1691004058116.png/296x296bb.webp",
        genre: "Hip Hop/Rap"
    })

    Anti = Album.create!({
        title:"ANTI", 
        artist_id: 8, 
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/11/e9/60/11e9600c-7f3a-424b-1643-97c69f7e8067/16UMGIM03373.rgb.jpg/600x600cc-60.jpg",
        genre: "Pop"
    })

    Good_Kid = Album.create!({
        title:"good kid, m.A.A.d city", 
        artist_id: 9, 
        album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ca/5b/c0/ca5bc0b3-d81d-cc6c-0d19-54b9eedb6dbd/12UMGIM52990.rgb.jpg/296x296bb.webp',
        genre: "Hip Hop/Rap"

    })

    Motomami = Album.create!({
        title:"MOTOMAMI", 
        artist_id: 10, 
        album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/81/4e/e5/814ee543-fa60-9af9-c646-b6e413625e3e/Jobb2441977-4c72-483f-b29b-16d36e46c151-128330761-PreviewImage_preview_image_nonvideo_sdr-Time1643738485657.png/632x632bb.webp',
        genre: "Pop Latino"
    })

    Wish = Album.create!({
        title:"Wish You Were Here", 
        artist_id: 11, 
        album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/49/ab/fe/49abfef6-0cd9-aa1f-05c3-3eb85d3fe3f5/886445635843.jpg/296x296bb.webp',
        genre: "Classic Rock"
    })

    Crime = Album.create!({
        title:"Crime of the Century", 
        artist_id: 12, 
        album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/39/cd/49/39cd4988-2b67-33bf-1aaa-c401b397c35d/00600753547687.rgb.jpg/296x296bb.webp',
        genre: "Classic Rock"
    })

    WWAFAWDWG = Album.create!({
        title:"WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?", 
        artist_id: 13, 
        album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/37/d1/1a37d1b1-8508-54f2-f541-bf4e437dda76/19UMGIM05028.rgb.jpg/296x296bb.webp',
        genre: "Pop"
    })

    Parachutes = Album.create!({
        title:"Parachutes", 
        artist_id: 14, 
        album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/be/b9/16/beb91686-2a3b-cc1c-99a3-4bd2188e2f00/Job5d1dfac5-46cc-4af0-be07-e9cc41ca4247-157156042-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_301767564_1582059200-Time1697229279731.png/296x296bb.webp',
        genre: "Alternative"
    })

    CTRL = Album.create!({
        title:"CTRL", 
        artist_id: 15, 
        album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/6f/ed/70/6fed70ec-2bb4-3287-1314-2f794c000d19/Job5c5f7c23-90fa-4c0a-97a6-c3937b2e676c-132736899-PreviewImage_preview_image_nonvideo_sdr-Time1654721394243.png/296x296bb.webp',
        genre: "R&B/Soul"
    })

    Channel_Orange = Album.create!({
        title:"channel ORANGE", 
        artist_id: 16, 
        album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/04/f8/63/04f863fc-2852-604f-c910-a97ac069506b/12UMGIM40339.rgb.jpg/296x296bb.webp',
        genre: "Pop"
    })


Adults = Song.create!({
    title: "The Adults Are Talking",
    artist_id: 1, 
    album_id: 2
})

Selfless = Song.create!({
    title: "Selfless",
    artist_id: 1, 
    album_id: 2
})

Brooklyn = Song.create!({
    title: "Brooklyn Bridge to Chorus",
    artist_id: 1, 
    album_id: 2
})

Bad_Decisions = Song.create!({
    title: "Bad Decisions",
    artist_id: 1, 
    album_id: 2
})

Eternal_Summer = Song.create!({
    title: "Eternl Summer",
    artist_id: 1, 
    album_id: 2
})
At_The_Door = Song.create!({
    title: "At The Door",
    artist_id: 1, 
    album_id: 2
})
Sundays = Song.create!({
    title: "Why Are Sundays So Depressing",
    artist_id: 1, 
    album_id: 2
})

Not_The_Same_Anymore = Song.create!({
    title: "Not The Same Anymore",
    artist_id: 1, 
    album_id: 2
})

Ode_To_The_Mets = Song.create!({
    title: "Ode to the Mets",
    artist_id: 1, 
    album_id: 2
})

Saoko = Song.create!({
    title: "Saoko",
    artist_id: 10, 
    album_id: 10
})
Candy = Song.create!({
    title: "CANDY",
    artist_id: 10, 
    album_id: 10
})
La_Fama = Song.create!({
    title: "LA FAMA",
    artist_id: 10, 
    album_id: 10
})
Bulerias = Song.create!({
    title: "BULERÍAS",
    artist_id: 10, 
    album_id: 10
})
Chicken_Teriyaki = Song.create!({
    title: "CHICKEN TERIYAKI",
    artist_id: 10, 
    album_id: 10
})

Hentai = Song.create!({
    title: "HENTAI",
    artist_id: 10, 
    album_id: 10
})

Bizcochito = Song.create!({
    title: "BIZCOCHITO",
    artist_id: 10, 
    album_id: 10
})
Genis = Song.create!({
    title: "G3 N15",
    artist_id: 10, 
    album_id: 10
})
Motomami_song = Song.create!({
    title: "MOTOMAMI",
    artist_id: 10, 
    album_id: 10
})

Diablo = Song.create!({
    title: "DIABLO",
    artist_id: 10, 
    album_id: 10
})

Delirio = Song.create!({
    title: "DELIRIO DE GRANDEZA",
    artist_id: 10, 
    album_id: 10
})

Cute = Song.create!({
    title: "CUUUUuuuuuute",
    artist_id: 10, 
    album_id: 10
})

Como = Song.create!({
    title: "COMO UN G",
    artist_id: 10, 
    album_id: 10
})

Abc = Song.create!({
    title: "Abcdefg",
    artist_id: 10, 
    album_id: 10
})

La_Combi = Song.create!({
    title: "LA COMBI VERSACE",
    artist_id: 10, 
    album_id: 10
})

Sakura = Song.create!({
    title: "SAKURA",
    artist_id: 10, 
    album_id: 10
})

Playlist.create!({
    user_id: 1, 
    title: "test-playlist",
    description: "test description"
})

Playlist.create!({
    user_id: 1, 
    title: "2-playlist",
    description: "2 description"
})

PlaylistSong.create!({
    song_id: 1, 
    playlist_id: 1 
})

PlaylistSong.create!({
    song_id: 2, 
    playlist_id: 1 
})

PlaylistSong.create!({
    song_id: 3, 
    playlist_id: 2 
})

Adults.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/01+The+Adults+Are+Talking.mp3"), filename: "the_adults_are_talking_mp3" )
Selfless.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/the-new-abnormal-the-strokes/02+Selfless.m4a"), filename: "selfless_mp3" )
Brooklyn.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/the-new-abnormal-the-strokes/03+Brooklyn+Bridge+to+Chorus.m4a"), filename: "brooklyn_mp3" )
Bad_Decisions.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/04+Bad+Decisions.m4a"), filename: "bad_decisions_mp3" )
Eternal_Summer.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/the-new-abnormal-the-strokes/05+Eternal+Summer.m4a"), filename: "eternal_summer_mp3" )
At_The_Door.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/the-new-abnormal-the-strokes/06+At+the+Door.m4a"), filename: "at_the_door_mp3" )
Sundays.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/the-new-abnormal-the-strokes/07+Why+Are+Sunday's+So+Depressing.m4a"), filename: "sundays_mp3" )
Not_The_Same_Anymore.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/the-new-abnormal-the-strokes/08+Not+the+Same+Anymore.m4a"), filename: "not_the_same_anymore_mp3" )
Ode_To_The_Mets.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/09+Ode+to+the+Mets.m4a"), filename: "ode_to_the_mets_mp3" )

Saoko.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/01-SAOKO.mp3"), filename: "saoko_mp3" )
Candy.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/02-CANDY.mp3"), filename: "candy_mp3" )
La_Fama.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/03-LA+FAMA+(Ft.+The+Weeknd).mp3"), filename: "la_fama_mp3" )
Bulerias.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/04-BULERI%CC%81AS.mp3"), filename: "bulerias_mp3" )
Chicken_Teriyaki.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/05-CHICKEN+TERIYAKI.mp3"), filename: "chicken_mp3" )
Hentai.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/06-HENTAI.mp3"), filename: "hentai_mp3" )
Bizcochito.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/07-BIZCOCHITO.mp3"), filename: "bizcochitos_mp3" )
Genis.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/08-G3+N15.mp3"), filename: "genis_mp3" )
Motomami_song.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/09-MOTOMAMI.mp3"), filename: "motomami_mp3" )
Diablo.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/10-DIABLO.mp3"), filename: "diablo_mp3" )
Delirio.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/11-DELIRIO+DE+GRANDEZA.mp3"), filename: "delirio_mp3" )
Cute.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/12-CUUUUuuuuuute.mp3"), filename: "cute_mp3" )
Como.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/13-COMO+UN+G.mp3"), filename: "como_mp3" )
Abc.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/14-Abcdefg.mp3"), filename: "abc_mp3" )
La_Combi.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/15-LA+COMBI+VERSACE+(Ft.+Tokischa).mp3"), filename: "la_combi_mp3" )
Sakura.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/MOTOMAMI/16-SAKURA.mp3"), filename: "sakura_mp3" )



puts "Done!"

# end 