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

    10.times do 
        User.create!({
            first_name: Faker::Name.first_name,
            last_name: Faker::Name.last_name,
            birthdate: Faker::Date.birthday(min_age: 18, max_age: 65),
            email: Faker::Internet.unique.email,
            password: 'password'
        }) 
    end

    Artist.create!({
        name: "test artist"
    })

    20.times do Album.create!({
        title: Faker::Music.album, 
        artist_id: 1, 
        album_cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/67/f8/0c/67f80cef-4d4e-4792-1c69-c1d614065005/197189165450.jpg/296x296bf.webp",
        genre: Faker::Music.genre

    })
end

#     50.times do Song.create!({
#         title: Faker::Music::RockBand.song,
#         artist_id: 1,
#         album_id: rand(1..20),
#         song_url: "/Users/eltionbehrami/apple_music_clone/frontend/src/01 The Adults Are Talking.mp3"
#     })
# end 

Adults = Song.create!({
    title: "The Adults Are Talking",
    artist_id: 1, 
    album_id: 1
})

Bad_Decisions = Song.create!({
    title: "Bad Decisions",
    artist_id: 1, 
    album_id: 1
})

Ode_To_The_Mets = Song.create!({
    title: "Ode to the Mets",
    artist_id: 1, 
    album_id: 2
})

Playlist.create!({
    user_id: 1, 
    title: "test-playlist",
    description: "test description"
})

Adults.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/01+The+Adults+Are+Talking.mp3"), filename: "the_adults_are_talking_mp3" )

Bad_Decisions.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/04+Bad+Decisions.m4a"), filename: "bad_decisions_mp3" )

Ode_To_The_Mets.mp3.attach(io: URI.open("https://cherrymusic-seeds.s3.amazonaws.com/09+Ode+to+the+Mets.m4a"), filename: "ode_to_the_mets_mp3" )



    puts "Done!"

# end 