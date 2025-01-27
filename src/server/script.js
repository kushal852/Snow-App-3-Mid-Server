import { gs } from '@servicenow/glide'
import {kushal} from './gupta'

export function showStateUpdate(current, previous) { 
    const currentState = current.getValue('state')
    const previousState = previous.getValue('state')
    kushal();
    gs.addInfoMessage(`state updated from "${previousState}" to "${currentState}"`)
}