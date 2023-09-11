const Genres = require('./Genres')
const data = [
    'Комедии',
    'Мультфильмы',
    'Ужасы',
    'Триллеры',
    'Фантастика',
    'Боевики',
    'Мелодрамы',
    'Детективы',
    'Приключения',
    'Фэнтези',
    'Военные',
    'Семейные',
    'Аниме',
    'Исторические',
    'Документальные',

]

async function writeDataGenre(){
    const length = await Genres.find().count();
    if(length == 0){
        data.map((item, index) => {
            new Genres({
                name: item,
                key: index
            }).save()
        })
    }
}

module.exports = writeDataGenre