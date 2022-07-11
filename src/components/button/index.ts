import FdButton from './Button.vue'

FdButton.install = function (app) {
  app.component(FdButton.name, FdButton)
}

export { FdButton }
