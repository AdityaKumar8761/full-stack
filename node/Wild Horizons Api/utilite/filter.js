export const getDataByQueryParams = (data, queryObj) =>{
    const { continent , country , is_open_to_public } = queryObj
    if(country) {
        data = data.filter(data => data.country.toLocaleLowerCase() === country.toLocaleLowerCase())
    }

    if(continent) {
        data = data.filter(data => data.continent.toLocaleLowerCase() === continent.toLocaleLowerCase())
    }
    if(is_open_to_public) {
        data = data.filter(data => data.is_open_to_public === JSON.parse(is_open_to_public))
    }
    return data
}