import axios from 'axios'
import { baseUrl } from '../utils/baseUrl'

export const getAllServices = async () => {
  try {
    const services = await axios.get(`${baseUrl}/service/all`)
    return services.data
  } catch (error) {
    console.log(error)
  }
}
