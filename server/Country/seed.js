const Country = require('./Country')
const data = [
    'Россия',
    'СССР',
    'США',
    'Франция',
    'Южная Корея',
    'Великобритания',
    'Япония',
    'Италия',
    'Испания',
    'Германия',
    'Турция',
    'Швеция',
    'Дания',
    'Норвегия',
    'Гонконг',
    'Австралия',
    'Бельгия',
    'Нидерланды',
    'Греция',
]

async function writeDataCountry(){
    const length = await Country.find().count();
    if(length == 0){
        data.map((item, index) => {
            new Country({
                name: item,
                key: index
            }).save()
        })
    }
}

module.exports = writeDataCountry