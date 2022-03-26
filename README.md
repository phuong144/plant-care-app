# Planter

Notice a plant in your household that's starting to wilt despite your best efforts to take care of it? Maybe it's a plant you forgot about and you want to revitalize it, but you're having difficulty identifying the plant or knowing how to best take care of it. 

Planter is a mobile application that gives you information on how to best take care of a plant simply by taking a picture of it.

# Technologies

This mobile application utilizes the Plant.ID image recognition API to determine what type of plant was scanned. Once data is returned from the Plant.ID API, the app is web scraping from Plantcaretoday's website that has a searchable repository of articles on how to best take care of that plant.

Planter was written using Expo React Native for the front-end and Node/Express for the back-end.

Expo was the ideal technology since this app was a small scale project that needed ease of access to a camera by using mobile devices. Node and Express are comfort technologies to develop APIs.

# Credits / Takeaways

My friend, Vania Gunawan, was the inspiration for building this application. She introduced to me that she had plants that she didn't know how to best take care of, let alone identify the plant to even search up results. Although there exists some popular plant apps, none had the feature to simply scan the plant and give insight on how to best take care of it, which is why I built Planter!

Planter was a personal project and building it out was super fun! I got to integrate 3rd party APIs and learned more about web scraping.
