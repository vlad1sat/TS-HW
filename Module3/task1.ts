type House = {
    street: string,
    apartmentCount: number,
    buildInfo: {
        year: number,
        material: string,
    }
}

function getHouse(): House {

    /*
    const house = {} as House;
    house.street = 'Pushkina';


   house.apartmentCount = 76;
   // При коммите этого участка кода возникает потеря данных номера квартиры и выводится данные с undefined

    house.buildInfo = {
        year: 1996,
        material: 'rocks',
    };
    При коммите этого участка кода возникает потеря данных о построении здания и данная строчка не выводится:
    console.log(`build in ${house.buildInfo.year}, build from ${house.buildInfo.material} `);
    */

    // Переписание функции:
    return {
        street: 'Pushkina',
        apartmentCount: 76,
        buildInfo: {
            year: 1996,
            material: 'rocks',
        }
    };
}

function handleHouse(): void {
    const house: House = getHouse();

    console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
    console.log(`build in ${house.buildInfo.year}, build from ${house.buildInfo.material} `);
}

handleHouse()// ?