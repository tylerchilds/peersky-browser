self.computer ||= {}
self.computer.sillyz ||= {}
self.computer.sillyz.elves ||= {}

function ready() {
  console.log(window.plan98, ' is ready')
}

export function upsell(host = window.plan98.host) {
  document.body.insertAdjacentHTML('beforeend', `
    <wizard-journey host="${host}"></wizard-journey>
  `)
}

export default class SillyzComputer {
  constructor(plan98, x) {
    ready(plan98)
  }
}
