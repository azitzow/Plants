puts "🌱 Seeding spices..."

puts "Deleting plants data..."
Plant.destroy_all

# Seed your database here
zz = Plant.create(
  name: "Zamioculcas zamiifolia aka ZZ",
  dec: "Officially named Zamioculcas zamiifolia, the ZZ plant is native to East Africa. Called 'the king of the indestructible plants,' the species tolerates the dangerous trifecta of plant-killers: drought, low light, and really low humidity.",
  img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557179245-the-sill-houseplant-zz-plant-1-6-014-2230x-progressive-1557179231.jpg?crop=1.00xw:0.774xh;0,0.143xh&resize=768:*',
  watering_interval: 2,
  sunlight: 4)

rubberPlant = Plant.create(
  name: "Rubber Plant",
  dec: "Rubber trees can measure over 100 feet tall in their native Asia, but regular pruning will keep the ornamental variety in check. A potted rubber tree tolerates bright direct light, but put it in a slightly more shaded spot and it will thank you for it. Water when the soil has dried out — about every week or so.",
  img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557256241-pot-plant-close-up-elevated-view-high-res-stock-photography-829464-001-1557256205.jpg?crop=1.00xw:0.801xh;0,0.103xh&resize=768:*',
  watering_interval: 1,
  sunlight: 4)

snakePlant = Plant.create(
  name: "Snake Plant",
  dec: "Dracaena trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint George's sword, mother-in-law's tongue, and viper's bowstring hemp, among other names.",
  img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1603654368-51rKhNCtXSL.jpg?crop=1xw:1.00xh;center,top&resize=768:*', watering_interval: 6,
  sunlight: 4)

monstera = Plant.create(
  name: "Monstera Deliciosa",
  dec: "Monstera deliciosa, the Swiss cheese plant or split-leaf philodendron is a species of flowering plant native to tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.",
  img: "https://cdn.shopify.com/s/files/1/2045/8185/products/pb2000032434_600x600.jpg?v=1644447913",
  watering_interval: 2,
  sunlight: 4
)

philodendron = Plant.create(
  name: "Philodendron",
  dec: "There's a lot to love about philodendrons. Their name literally comes from the Greek words philo- (meaning 'love') and dendron (meaning'tree'). Most types can withstand dark corners as well as sparse watering. 'They like to be on the dry side,' says Nejman, so don't fill the watering can more than once per week.",
  img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557257186-the-modern-room-interior-with-a-lot-of-different-royalty-free-image-979579482-1557257137.jpg?crop=0.649xw:0.974xh;0.335xw,0.0264xh&resize=768:*",
  watering_interval: 1,
  sunlight: 2
)

# diffused sunlight or partial shade, but will tolerate full shade
dieffenbachia = Plant.create(
  name: "Dieffenbachia",
  dec: "Dieffenbachia, aka leopard lily, is a genus of tropical flowering plants in the family Araceae. It is native to the New World Tropics from Mexico and the West Indies south to Argentina. Place this beauty by a curtained window, protecting new leaves from extra sun. With filtered light, the showy plant is one happy camper.",
  img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1603654572-417RoQcFBmL.jpg?crop=0.842xw:1.00xh;0.0480xw,0&resize=768:*",
  watering_interval: 1,
  sunlight: 1
)

heartStrings = Plant.create(
  name: "Heart of Strings",
  dec: "True to its name, string of hearts (Ceropegia woodii) is a trailing vine plant with heart-shaped, variegated leaves. This South-African native plant is part of the Apocynaceae family, and its other common names are sweetheart vine, rosary vine, chain of hearts, and collar of hearts. ",
  img: "https://unusualseeds.net/wp-content/uploads/2019/12/string_of_hearts_malek_Aug_2019_02.jpg",
  watering_interval: 1,
  sunlight: 5
)

orchid = Plant.create(
  name: "Phalaenopsis Orchid",
  dec: "Phalaenopsis, also known as moth orchids, is a genus of about seventy species of plants in the family Orchidaceae. Orchids in this genus are monopodial epiphytes or lithophytes with long, coarse roots, short, leafy stems and long-lasting, flat flowers arranged in a flowering stem that often branches near the end.",
  img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1554479093-1520365354-phalaenopsis-orchid-1554479086.jpg?crop=1.00xw:0.668xh;0,0.190xh&resize=768:*",
  watering_interval: 1,
  sunlight: 4
)

calatheaOrnata = Plant.create(
  name: "Calathea Ornata",
  dec: "Calathea is a tropical plant by nature, calathea ornata sports lustrous bands of color that earn it the apt nickname of the 'pinstripe plant.' There are over 300 different types of Calathea plants, with multiple hybrids and commonly cultivated species around the world.",
  img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1646681626-51MhStXDBAL._SL500_.jpg?crop=1xw:0.994xh;center,top&resize=768:*",
  watering_interval: 1,
  sunlight: 4
)

ponytailPalm = Plant.create(
  name: "Ponytail Palm",
  dec: "Beaucarnea recurvata, the elephant's foot or ponytail palm, is a species of plant in the family Asparagaceae. The species was native to numerous states of eastern Mexico but is now confined to the state of Veracruz. Despite its common name, it is not closely related to the true palms.",
  img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557256823-beaucarnea-recurvata-ponytail-palm-1557256813.jpg?crop=0.889xw:1.00xh;0.0721xw,0&resize=768:*",
  watering_interval: 2,
  sunlight: 5
)

kalanchoe = Plant.create(
  name: "Kalanchoe",
  dec: "Kalanchoe KAL-ən-KOH-ee, also written Kalanchöe or Kalanchoë, is a genus of about 125 species of tropical, succulent plants in the stonecrop family Crassulaceae, mainly native to Madagascar and tropical Africa.",
  img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1603654786-kalanchoe-blossfeldiana-flower-in-pot-royalty-free-image-522673707-1557256602.jpg?crop=1.00xw:0.668xh;0,0.0513xh&resize=768:*",
  watering_interval: 2,
  sunlight: 10
)

bromeliad = Plant.create(
  name: "Bromeliad",
  dec: "The Bromeliaceae is a family of monocot flowering plants of 75 genera and around 3590 known species native mainly to the tropical Americas, with several species found in the American subtropics and one in tropical west Africa, Pitcairnia feliciana. ",
  img: "https://secure.img1-fg.wfcdn.com/im/31572143/resize-h445%5Ecompr-r85/1200/120093785/Bromelaid+Floral+Arrangement+in+Pot.jpg",
  watering_interval: 1,
  sunlight: 4
)

dragonTree = Plant.create(
  name: "Dragon Tree",
  dec: "Save some room on your windowsill and tuck this low-light variety in an unloved corner. Pet owners, watch out: Dracaena marginata is toxic to both dogs and cats, so keep animals far away.",
  img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557255687-flowers-in-a-pot-indoors-royalty-free-image-940610580-1557255594.jpg?crop=0.649xw:0.974xh;0,0&resize=768:*",
  watering_interval: 1,
  sunlight: 4
)

aloe = Plant.create(
  name: "Aloe",
  dec: "Aloe is widely distributed, and is considered an invasive species in many world regions. An evergreen perennial, it originates from the Arabian Peninsula, but grows wild in tropical, semi-tropical, and arid climates around the world.",
  img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1603653973-4179hOfu5jL.jpg?crop=0.906xw:1.00xh;0.0520xw,0&resize=768:*",
  watering_interval: 3,
  sunlight: 5
)

peaceLily = Plant.create(
  name: "Peace Lily",
  dec: "Spathiphyllum is a genus of about 47 species of monocotyledonous flowering plants in the family Araceae, native to tropical regions of the Americas and southeastern Asia. Certain species of Spathiphyllum are commonly known as spath or peace lilies.",
  img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557254656-spathiphyllum-peace-lily-royalty-free-image-621819148-1557254631.jpg?crop=0.668xw:1.00xh;0.106xw,0&resize=768:*",
  watering_interval: 1,
  sunlight: 2
)

spiderPlant = Plant.create(
  name: "Spider Plant",
  dec: "Chlorophytum comosum, usually called spider plant due to its spider like look, but also known as spider ivy, ribbon plant, and hen and chickens is a species of evergreen perennial flowering plant of the family Asparagaceae.",
  img: "https://www.englishgardens.com/wp-content/uploads/House-Plant-Spider-1.jpg",
  watering_interval: 1,
  sunlight: 3
)

airPlant = Plant.create(
  name: "Air Plant",
  dec: "Air plants (Tillandsia spp.) are epiphytes, meaning that in nature they grow on other plants, usually on tree branches. There are hundreds of species and varieties of air plants. They usually have strap-shape or slender triangle-shape leaves that grow in a rosette pattern with new growth appearing from the center.",
  img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557179346-air-plants-royalty-free-image-932521176-1557179326.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=768:*",
  watering_interval: 1,
  sunlight: 4
)

# name = Plant.create(
#   name: "",
#   dec: "",
#   img: "",
#   watering_interval: ,
#   sunlight:
# )

# name = Plant.create(
#   name: "",
#   dec: "",
#   img: "",
#   watering_interval: ,
#   sunlight:
# )

# name = Plant.create(
#   name: "",
#   dec: "",
#   img: "",
#   watering_interval: ,
#   sunlight:
# )

# name = Plant.create(
#   name: "",
#   dec: "",
#   img: "",
#   watering_interval: ,
#   sunlight:
# )

# name = Plant.create(
#   name: "",
#   dec: "",
#   img: "",
#   watering_interval: ,
#   sunlight:
# )



puts "✅ Done seeding!"
