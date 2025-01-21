import axios from 'axios'
import { baseUrl } from '../utils/baseUrl'

export const getAllHowWorks = async () => {
  try {
    const services = await axios.get(`${baseUrl}/howWork/all`)
    return services.data
  } catch (error) {
    console.log(error)
  }
}
