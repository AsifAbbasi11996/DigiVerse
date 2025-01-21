import axios from 'axios'
import { baseUrl } from '../utils/baseUrl'

export const getAllWorks = async () => {
  try {
    const services = await axios.get(`${baseUrl}/work/all`)
    return services.data
  } catch (error) {
    console.log(error)
  }
}
