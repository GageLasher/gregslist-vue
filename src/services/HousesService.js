import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HousesService {
    async getAll(){
        const res = await api.get('api/houses')
        logger.log(res.data)
        AppState.houses = res.data
        // logger.log(AppState.houses)
    }
    async createHouse(houseData){
        const res = await api.post('api/houses', houseData)
       logger.log(res.data)
        AppState.houses.push(res.data)
        return res.data
      }
      async findById(houseId){
        const res = await api.get('api/houses/' + houseId)
        AppState.activeHouse = res.data
    }
    }
   

export const housesService = new HousesService()