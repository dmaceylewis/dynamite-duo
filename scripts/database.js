const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire Blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super Speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Rob S. Banks",
            power: "Stealth"
        },
        {
            id: 2,
            name: "Ivan T'Kill",
            power: "Nightmare"
        }
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}