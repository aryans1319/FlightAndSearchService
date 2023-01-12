const City = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ 
                name 
            }); 
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async updateCity(cityID, data){
        try {
            const city = await City.update(data, {
                where: {
                    id: cityID
                }
            });
            return city;
        } catch (error) {
            
        }
    }

    async deleteCity(cityID) {
        try {
            await City.destroy({
                where: {
                    id: cityID
                }
            });
        } catch (error) {
            throw {error};
        }
    }

    async getCity(cityID){
        try {
            const city = await City.findByPk(cityID);
            return city;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = CityRepository;