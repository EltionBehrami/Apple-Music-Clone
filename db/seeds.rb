# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    User.destroy_all 

    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."

    User.create!(
    name: 'Demo-User', 
    email: 'demo@user.io', 
    password: 'password',
    birthdate: Faker::Date.between(from: '2000-09-23', to: '2014-09-25')
    )

    10.times do 
        User.create!({
            name: Faker::Name.name,
            email: Faker::Internet.unique.email,
            password: 'password',
            birthdate: Faker::Date.between(from: '2000-09-23', to: '2014-09-25')
        }) 
    end


    puts "Done!"

end 