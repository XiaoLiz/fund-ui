
import { FdButton } from './components/button/'
import { version } from '../package.json'

const components = [
    FdButton,
]
function install (app) {
  components.forEach(component=>{
    app.use(component)
  })
}

const FundUI = {
  version,
  install
}

export {
    FdButton
}
export default FundUI
