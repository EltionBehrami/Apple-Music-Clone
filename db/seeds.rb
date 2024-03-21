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
    PlaylistSong.destroy_all
    Playlist.destroy_all
    Song.destroy_all 
    Album.destroy_all 
    Artist.destroy_all 
    User.destroy_all 



    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('songs')
    ApplicationRecord.connection.reset_pk_sequence!('albums')
    ApplicationRecord.connection.reset_pk_sequence!('artists')
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('playlists')
    ApplicationRecord.connection.reset_pk_sequence!('playlist_songs')


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
    
    # Artist.create!({
    #         name: "Beyoncé"
    #     })
        
    Artist.create!({
        name: "ROSALÍA"
    })
    
    Artist.create!({
        name: "Billie Eilish"
    })
    
    Artist.create!({
        name: "Mac Miller"
    })
    
    Artist.create!({
        name: "Pink Floyd"
    })
    
    Artist.create!({
        name: "SZA"
    })
    
    Artist.create!({
        name: "Supertramp"
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
        name: "Rihanna"
    })

    Artist.create!({
        name: "Kendrick Lamar"
    })


    Artist.create!({
        name: "Coldplay"
    })


    Artist.create!({
        name: "Frank Ocean"
    })
    
    
    
    # Renaissance = Album.create!({
    #         title:"Renaissance", 
    #         artist_id: 2, 
    #         album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/bc/86/3c/bc863c3f-7e0d-9461-9173-f730e6f753dc/Job7fc82b4f-fa53-4dea-89bd-4888c34e5a72-134554558-PreviewImage_preview_image_nonvideo_sdr-Time1659042308000.png/592x592bb.webp",
    #         genre: "Pop"
    #     })
        
        The_New_Abnormal = Album.create!({
            title:"The New Abnormal ", 
            artist_id: 1, 
            album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/62/a6/ff/62a6ff2a-95c9-5302-31f4-2dcca9e40323/886448281085.jpg/296x296bb.webp",
            genre: "Alternative"
            
        })
        
        Motomami = Album.create!({
            title:"MOTOMAMI", 
            artist_id: 2, 
            album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/81/4e/e5/814ee543-fa60-9af9-c646-b6e413625e3e/Jobb2441977-4c72-483f-b29b-16d36e46c151-128330761-PreviewImage_preview_image_nonvideo_sdr-Time1643738485657.png/632x632bb.webp',
            genre: "Pop Latino"
        })
        
        WWAFAWDWG = Album.create!({
            title:"WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?", 
            artist_id: 3, 
            album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1a/37/d1/1a37d1b1-8508-54f2-f541-bf4e437dda76/19UMGIM05028.rgb.jpg/296x296bb.webp',
            genre: "Pop"
        })
        
        Swimming = Album.create!({
            title:"Swimming", 
            artist_id: 4, 
            album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/ad/f9/a3/adf9a3d0-d724-6bc1-f6c1-0f54dd250724/Job9fda9c70-f0f3-4b6a-aea0-7d6223261c1c-153725570-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_293708555_1519966460-Time1691004058116.png/296x296bb.webp",
            genre: "Hip Hop/Rap"
        })
        Wish = Album.create!({
            title:"Wish You Were Here", 
            artist_id: 5, 
            album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/49/ab/fe/49abfef6-0cd9-aa1f-05c3-3eb85d3fe3f5/886445635843.jpg/296x296bb.webp',
            genre: "Classic Rock"
        })
        
        CTRL = Album.create!({
            title:"CTRL", 
            artist_id: 6, 
            album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/6f/ed/70/6fed70ec-2bb4-3287-1314-2f794c000d19/Job5c5f7c23-90fa-4c0a-97a6-c3937b2e676c-132736899-PreviewImage_preview_image_nonvideo_sdr-Time1654721394243.png/296x296bb.webp',
            genre: "R&B/Soul"
        })

        Crime = Album.create!({
            title:"Crime of the Century", 
            artist_id: 7, 
            album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/39/cd/49/39cd4988-2b67-33bf-1aaa-c401b397c35d/00600753547687.rgb.jpg/296x296bb.webp',
            genre: "Classic Rock"
        })
        
        Un_Verano_Sin_Ti = Album.create!({
        title:"Un Verano Sin Ti", 
        artist_id: 8, 
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/c9/e2/f8/c9e2f8ea-c2a2-49b9-eebf-66ea5f267790/Jobfc0d3061-1590-4be8-95f2-d8f3007a8605-131553921-PreviewImage_preview_image_nonvideo_sdr-Time1651765457160.png/592x592bb.webp",
        genre: "Latin"

    })

    Súper_Terror = Album.create!({
        title:"Súper Terror", 
        artist_id: 9,
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/67/f8/0c/67f80cef-4d4e-4792-1c69-c1d614065005/197189165450.jpg/296x296bf.webp",
        genre: "Latin"
    })

    Cinema = Album.create!({
        title:"Cinema", 
        artist_id: 10, 
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/0b/67/3f/0b673fd4-5e49-fccd-6193-3076bef03f53/075679792389.jpg/296x296bb.webp",
        genre: "Alternative"
    })

    Queen = Album.create!({
        title:"Queen", 
        artist_id: 11, 
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/77/77/0a/77770abc-c365-81d2-0ad1-439d29e2794e/18UMGIM36518.rgb.jpg/296x296bb.webp",
        genre: "Hip Hop/Rap"

    })


    Anti = Album.create!({
        title:"ANTI", 
        artist_id: 12, 
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/11/e9/60/11e9600c-7f3a-424b-1643-97c69f7e8067/16UMGIM03373.rgb.jpg/600x600cc-60.jpg",
        genre: "Pop"
    })

    Good_Kid = Album.create!({
        title:"good kid, m.A.A.d city", 
        artist_id: 13, 
        album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ca/5b/c0/ca5bc0b3-d81d-cc6c-0d19-54b9eedb6dbd/12UMGIM52990.rgb.jpg/296x296bb.webp',
        genre: "Hip Hop/Rap"

    })

    Parachutes = Album.create!({
        title:"Parachutes", 
        artist_id: 14, 
        album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/be/b9/16/beb91686-2a3b-cc1c-99a3-4bd2188e2f00/Job5d1dfac5-46cc-4af0-be07-e9cc41ca4247-157156042-PreviewImage_Preview_Image_Intermediate_nonvideo_sdr_301767564_1582059200-Time1697229279731.png/296x296bb.webp',
        genre: "Alternative"
    })


    Channel_Orange = Album.create!({
        title:"channel ORANGE", 
        artist_id: 15, 
        album_cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/04/f8/63/04f863fc-2852-604f-c910-a97ac069506b/12UMGIM40339.rgb.jpg/296x296bb.webp',
        genre: "Pop"
    })


Adults = Song.create!({
    title: "The Adults Are Talking",
    artist_id: 1, 
    album_id: 1
})

Selfless = Song.create!({
    title: "Selfless",
    artist_id: 1, 
    album_id: 1
})

Brooklyn = Song.create!({
    title: "Brooklyn Bridge to Chorus",
    artist_id: 1, 
    album_id: 1
})

Bad_Decisions = Song.create!({
    title: "Bad Decisions",
    artist_id: 1, 
    album_id: 1
})

Eternal_Summer = Song.create!({
    title: "Eternal Summer",
    artist_id: 1, 
    album_id: 1
})
At_The_Door = Song.create!({
    title: "At The Door",
    artist_id: 1, 
    album_id: 1
})
Sundays = Song.create!({
    title: "Why Are Sundays So Depressing",
    artist_id: 1, 
    album_id: 1
})

Not_The_Same_Anymore = Song.create!({
    title: "Not The Same Anymore",
    artist_id: 1, 
    album_id: 1
})

Ode_To_The_Mets = Song.create!({
    title: "Ode to the Mets",
    artist_id: 1, 
    album_id: 1
})

Saoko = Song.create!({
    title: "Saoko",
    artist_id: 2, 
    album_id: 2
})
Candy = Song.create!({
    title: "CANDY",
    artist_id: 2, 
    album_id: 2
})
La_Fama = Song.create!({
    title: "LA FAMA",
    artist_id: 2, 
    album_id: 2
})
Bulerias = Song.create!({
    title: "BULERÍAS",
    artist_id: 2, 
    album_id: 2
})
Chicken_Teriyaki = Song.create!({
    title: "CHICKEN TERIYAKI",
    artist_id: 2, 
    album_id: 2
})

Hentai = Song.create!({
    title: "HENTAI",
    artist_id: 2, 
    album_id: 2
})

Bizcochito = Song.create!({
    title: "BIZCOCHITO",
    artist_id: 2, 
    album_id: 2
})
Genis = Song.create!({
    title: "G3 N15",
    artist_id: 2, 
    album_id: 2
})
Motomami_song = Song.create!({
    title: "MOTOMAMI",
    artist_id: 2, 
    album_id: 2
})

Diablo = Song.create!({
    title: "DIABLO",
    artist_id: 2, 
    album_id: 2
})

Delirio = Song.create!({
    title: "DELIRIO DE GRANDEZA",
    artist_id: 2, 
    album_id: 2
})

Cute = Song.create!({
    title: "CUUUUuuuuuute",
    artist_id: 2, 
    album_id: 2
})

Como = Song.create!({
    title: "COMO UN G",
    artist_id: 2, 
    album_id: 2
})

Abc = Song.create!({
    title: "Abcdefg",
    artist_id: 2, 
    album_id: 2
})

La_Combi = Song.create!({
    title: "LA COMBI VERSACE",
    artist_id: 2, 
    album_id: 2
})

Sakura = Song.create!({
    title: "SAKURA",
    artist_id: 2, 
    album_id: 2
})

# Seed for "Shine on You Crazy Diamond (Parts 1-5)"
Shine_on_You_Crazy_Diamond_1_to_5 = Song.create!({
    title: "Shine on You Crazy Diamond (Parts 1-5)",
    artist_id: 5,
    album_id: 5
})

# Seed for "Welcome to the Machine"
Welcome_to_the_Machine = Song.create!({
    title: "Welcome to the Machine",
    artist_id: 5,
    album_id: 5
})

# Seed for "Have a Cigar"
Have_a_Cigar = Song.create!({
    title: "Have a Cigar",
    artist_id: 5,
    album_id: 5
})

# Seed for "Wish You Were Here"
Wish_You_Were_Here = Song.create!({
    title: "Wish You Were Here",
    artist_id: 5,
    album_id: 5
})

# Seed for "Shine on You Crazy Diamond (Parts 6-9)"
Shine_on_You_Crazy_Diamond_6_to_9 = Song.create!({
    title: "Shine on You Crazy Diamond (Parts 6-9)",
    artist_id: 5,
    album_id: 5
})


# Seed for "Supermodel"
Supermodel = Song.create!({
    title: "Supermodel",
    artist_id: 6,
    album_id: 6
})

# Seed for "Love Galore ft. Travis Scott"
Love_Galore = Song.create!({
    title: "Love Galore ft. Travis Scott",
    artist_id: 6,
    album_id: 6
})

# Seed for "Doves In The Wind ft. Kendrick Lamar"
Doves_In_The_Wind = Song.create!({
    title: "Doves In The Wind ft. Kendrick Lamar",
    artist_id: 6,
    album_id: 6
})

# Seed for "Drew Barrymore"
Drew_Barrymore = Song.create!({
    title: "Drew Barrymore",
    artist_id: 6,
    album_id: 6
})

# Seed for "Prom"
Prom = Song.create!({
    title: "Prom",
    artist_id: 6,
    album_id: 6
})

# Seed for "The Weekend"
The_Weekend = Song.create!({
    title: "The Weekend",
    artist_id: 6,
    album_id: 6
})

# Seed for "Go Gina"
Go_Gina = Song.create!({
    title: "Go Gina",
    artist_id: 6,
    album_id: 6
})

# Seed for "Garden (Say It Like Dat)"
Garden_Say_It_Like_Dat = Song.create!({
    title: "Garden (Say It Like Dat)",
    artist_id: 6,
    album_id: 6
})

# Seed for "Broken Clocks"
Broken_Clocks = Song.create!({
    title: "Broken Clocks",
    artist_id: 6,
    album_id: 6
})

# Seed for "Anything"
Anything = Song.create!({
    title: "Anything",
    artist_id: 6,
    album_id: 6
})

# Seed for "Wavy (Interlude ft. James Fauntleroy)"
Wavy_Interlude = Song.create!({
    title: "Wavy (Interlude ft. James Fauntleroy)",
    artist_id: 6,
    album_id: 6
})

# Seed for "Normal Girl"
Normal_Girl = Song.create!({
    title: "Normal Girl",
    artist_id: 6,
    album_id: 6
})

# Seed for "Pretty Little Birds ft. Isaiah Rashad"
Pretty_Little_Birds = Song.create!({
    title: "Pretty Little Birds ft. Isaiah Rashad",
    artist_id: 6,
    album_id: 6
})

# Seed for "20 Something"
Twenty_Something = Song.create!({
    title: "20 Something",
    artist_id: 6,
    album_id: 6
})

# Seed for "!!!!!! (Exclamation Marks)"
Exclamation_Marks = Song.create!({
    title: "!!!!!!",
    artist_id: 3,
    album_id: 3
})

# Seed for "Bad Guy"
Bad_Guy = Song.create!({
    title: "bad guy",
    artist_id: 3,
    album_id: 3
})

# Seed for "Xanny"
Xanny = Song.create!({
    title: "xanny",
    artist_id: 3,
    album_id: 3
})

# Seed for "You Should See Me in a Crown"
You_Should_See_Me_In_A_Crown = Song.create!({
    title: "you should see me in a crown",
    artist_id: 3,
    album_id: 3
})

# Seed for "All the Good Girls Go to Hell"
All_the_Good_Girls_Go_to_Hell = Song.create!({
    title: "all the good girls go to hell",
    artist_id: 3,
    album_id: 3
})

# Seed for "Wish You Were Gay"
Wish_You_Were_Gay = Song.create!({
    title: "wish you were gay",
    artist_id: 3,
    album_id: 3
})

# Seed for "When the Party's Over"
When_The_Partys_Over = Song.create!({
    title: "when the party's over",
    artist_id: 3,
    album_id: 3
})

# Seed for "8"
Eight = Song.create!({
    title: "8",
    artist_id: 3,
    album_id: 3
})

# Seed for "My Strange Addiction"
My_Strange_Addiction = Song.create!({
    title: "my strange addiction",
    artist_id: 3,
    album_id: 3
})

# Seed for "Bury a Friend"
Bury_a_Friend = Song.create!({
    title: "bury a friend",
    artist_id: 3,
    album_id: 3
})

# Seed for "Ilomilo"
Ilomilo = Song.create!({
    title: "ilomilo",
    artist_id: 3,
    album_id: 3
})

# Seed for "Listen Before I Go"
Listen_Before_I_Go = Song.create!({
    title: "listen before i go",
    artist_id: 3,
    album_id: 3
})

# Seed for "I Love You"
I_Love_You = Song.create!({
    title: "i love you",
    artist_id: 3,
    album_id: 3
})

# Seed for "Goodbye"
Goodbye = Song.create!({
    title: "goodbye",
    artist_id: 3,
    album_id: 3
})

# Seed for "School"
School = Song.create!({
    title: "School",
    artist_id: 7,
    album_id: 7
})

# Seed for "Bloody Well Right"
Bloody_Well_Right = Song.create!({
    title: "Bloody Well Right",
    artist_id: 7,
    album_id: 7
})

# Seed for "Hide in Your Shell"
Hide_in_Your_Shell = Song.create!({
    title: "Hide in Your Shell",
    artist_id: 7,
    album_id: 7
})

# Seed for "Asylum"
Asylum = Song.create!({
    title: "Asylum",
    artist_id: 7,
    album_id: 7
})

# Seed for "Dreamer"
Dreamer = Song.create!({
    title: "Dreamer",
    artist_id: 7,
    album_id: 7
})

# Seed for "Rudy"
Rudy = Song.create!({
    title: "Rudy",
    artist_id: 7,
    album_id: 7
})

# Seed for "If Everyone Was Listening"
If_Everyone_Was_Listening = Song.create!({
    title: "If Everyone Was Listening",
    artist_id: 7,
    album_id: 7
})

# Seed for "Crime of the Century"
Crime_of_the_Century = Song.create!({
    title: "Crime of the Century",
    artist_id: 7,
    album_id: 7
})

# Seed for "Come Back to Earth"
Come_Back_to_Earth = Song.create!({
    title: "Come Back to Earth",
    artist_id: 4,
    album_id: 4
})

# Seed for "Hurt Feelings"
Hurt_Feelings = Song.create!({
    title: "Hurt Feelings",
    artist_id: 4,
    album_id: 4
})

# Seed for "What's the Use?"
Whats_the_Use = Song.create!({
    title: "What's the Use?",
    artist_id: 4,
    album_id: 4
})

# Seed for "Perfecto"
Perfecto = Song.create!({
    title: "Perfecto",
    artist_id: 4,
    album_id: 4
})

# Seed for "Self Care"
Self_Care = Song.create!({
    title: "Self Care",
    artist_id: 4,
    album_id: 4
})

# Seed for "Wings"
Wings = Song.create!({
    title: "Wings",
    artist_id: 4,
    album_id: 4
})

# Seed for "Ladders"
Ladders = Song.create!({
    title: "Ladders",
    artist_id: 4,
    album_id: 4
})

# Seed for "Small Worlds"
Small_Worlds = Song.create!({
    title: "Small Worlds",
    artist_id: 4,
    album_id: 4
})

# Seed for "Conversation Pt. 1"
Conversation_Pt_1 = Song.create!({
    title: "Conversation Pt. 1",
    artist_id: 4,
    album_id: 4
})

# Seed for "Dunno"
Dunno = Song.create!({
    title: "Dunno",
    artist_id: 4,
    album_id: 4
})

# Seed for "Jet Fuel"
Jet_Fuel = Song.create!({
    title: "Jet Fuel",
    artist_id: 4,
    album_id: 4
})

# Seed for "2009"
Two_Thousand_Nine = Song.create!({
    title: "2009",
    artist_id: 4,
    album_id: 4
})

# Seed for "So It Goes"
So_It_Goes = Song.create!({
    title: "So It Goes",
    artist_id: 4,
    album_id: 4
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

Shine_on_You_Crazy_Diamond_1_to_5.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WhishYouWereHere/PinkFloyd-01-ShineOnYouCrazyDiamondpartOne.mp3"), filename: "shine_on_you_crazy_diamond_part_one.mp3")
Welcome_to_the_Machine.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WhishYouWereHere/PinkFloyd-02-WelcomeToTheMachine.mp3"), filename: "welcome_to_the_machine.mp3")
Have_a_Cigar.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WhishYouWereHere/PinkFloyd-03-HaveACigar.mp3"), filename: "have_a_cigar.mp3")
Wish_You_Were_Here.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WhishYouWereHere/PinkFloyd-04-WishYouWereHere.mp3"), filename: "wish_you_were_here.mp3")
Shine_on_You_Crazy_Diamond_6_to_9.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WhishYouWereHere/PinkFloyd-05-ShineOnYouCrazyDiamondpartTwo.mp3"), filename: "shine_on_you_crazy_diamond_part_two.mp3")

Supermodel.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+Supermodel.mp3"), filename: "supermodel.mp3")
Love_Galore.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+Love+Galore+(feat.+Travis+Scott).mp3"), filename: "love_galore_ft_travis_scott.mp3")
Doves_In_The_Wind.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+Doves+In+The+Wind+(feat.+Kendrick+Lamar).mp3"), filename: "doves_in_the_wind_ft_kendrick_lamar.mp3")
Drew_Barrymore.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+Drew+Barrymore.mp3"), filename: "drew_barrymore.mp3")
Prom.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+Prom.mp3"), filename: "prom.mp3")
The_Weekend.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+The+Weekend.mp3"), filename: "the_weekend.mp3")
Go_Gina.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+Go+Gina.mp3"), filename: "go_gina.mp3")
Garden_Say_It_Like_Dat.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+Garden+(Say+It+Like+Dat).mp3"), filename: "garden_say_it_like_dat.mp3")
Broken_Clocks.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+Broken+Clocks.mp3"), filename: "broken_clocks.mp3")
Anything.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+Anything.mp3"), filename: "anything.mp3")
Wavy_Interlude.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+Wavy+(Interlude)+(feat.+James+Fauntleroy).mp3"), filename: "wavy_interlude_ft_james_fauntleroy.mp3")
Normal_Girl.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+Normal+Girl.mp3"), filename: "normal_girl.mp3")
Pretty_Little_Birds.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+Pretty+Little+Birds+(feat.+Isaiah+Rashad).mp3"), filename: "pretty_little_birds_ft_isaiah_rashad.mp3")
Twenty_Something.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/sza-ctrlalbum/SZA+-+20+Something.mp3"), filename: "twenty_something.mp3")

Exclamation_Marks.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/01+!!!!!!!.mp3"), filename: "exclamation_marks.mp3")
Bad_Guy.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/02+bad+guy.mp3"), filename: "bad_guy.mp3")
Xanny.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/03+xanny.mp3"), filename: "xanny.mp3")
You_Should_See_Me_In_A_Crown.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/04+you+should+see+me+in+a+crown.mp3"), filename: "you_should_see_me_in_a_crown.mp3")
All_the_Good_Girls_Go_to_Hell.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/05+all+the+good+girls+go+to+hell.mp3"), filename: "all_the_good_girls_go_to_hell.mp3")
Wish_You_Were_Gay.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/06+wish+you+were+gay.mp3"), filename: "wish_you_were_gay.mp3")
When_The_Partys_Over.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/07+when+the+party's+over.mp3"), filename: "when_the_partys_over.mp3")
Eight.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/08+8.mp3"), filename: "eight.mp3")
My_Strange_Addiction.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/09+my+strange+addiction.mp3"), filename: "my_strange_addiction.mp3")
Bury_a_Friend.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/10+bury+a+friend.mp3"), filename: "bury_a_friend.mp3")
Ilomilo.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/11+ilomilo.mp3"), filename: "ilomilo.mp3")
Listen_Before_I_Go.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/12+listen+before+i+go.mp3"), filename: "listen_before_i_go.mp3")
I_Love_You.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/13+i+love+you.mp3"), filename: "i_love_you.mp3")
Goodbye.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/WHEN+WE+ALL+FALL+ASLEEP%2C+WHERE+DO+WE+GO-/14+goodbye.mp3"), filename: "goodbye.mp3")

Come_Back_to_Earth.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/01.+Come+Back+to+Earth.mp3"), filename: "come_back_to_earth.mp3")
Hurt_Feelings.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/02.+Hurt+Feelings.mp3"), filename: "hurt_feelings.mp3")
Whats_the_Use.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/03.+What's+the+Use_.mp3"), filename: "whats_the_use.mp3")
Perfecto.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/04.+Perfecto.mp3"), filename: "perfecto.mp3")
Self_Care.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/05.+Self+Care.mp3"), filename: "self_care.mp3")
Wings.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/06.+Wings.mp3"), filename: "wings.mp3")
Ladders.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/07.+Ladders.mp3"), filename: "ladders.mp3")
Small_Worlds.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/08.+Small+Worlds.mp3"), filename: "small_worlds.mp3")
Conversation_Pt_1.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/09.+Conversation+Pt.+1.mp3"), filename: "conversation_pt_1.mp3")
Dunno.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/10.+Dunno.mp3"), filename: "dunno.mp3")
Jet_Fuel.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/11.+Jet+Fuel.mp3"), filename: "jet_fuel.mp3")
Two_Thousand_Nine.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/12.+2009.mp3"), filename: "two_thousand_nine.mp3")
So_It_Goes.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/12.-2009/13.+So+It+Goes.mp3"), filename: "so_it_goes.mp3")

School.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/06-rudy/01+-+School.mp3"), filename: "school.mp3")
Bloody_Well_Right.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/06-rudy/02+-+Bloody+Well+Right.mp3"), filename: "bloody_well_right.mp3")
Hide_in_Your_Shell.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/06-rudy/03+-+Hide+In+Your+Shell.mp3"), filename: "hide_in_your_shell.mp3")
Asylum.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/06-rudy/04+-+Asylum.mp3"), filename: "asylum.mp3")
Dreamer.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/06-rudy/05+-+Dreamer.mp3"), filename: "dreamer.mp3")
Rudy.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/06-rudy/06+-+Rudy.mp3"), filename: "rudy.mp3")
If_Everyone_Was_Listening.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/06-rudy/07+-+If+Everyone+Was+Listening.mp3"), filename: "if_everyone_was_listening.mp3")
Crime_of_the_Century.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/06-rudy/08+-+Crime+Of+The+Century.mp3"), filename: "crime_of_the_century.mp3")

puts "Done!"

# end 