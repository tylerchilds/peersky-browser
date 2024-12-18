import 'randomuuid'
import elf from '@silly/elf'
import { doingBusinessAs } from "@sillonious/brand"

self.plan98 ||= { env: {} }

self.requestIdleCallback = self.requestIdleCallback || function (fn) { setTimeout(fn, 1) };

const parameters = new URLSearchParams(window.location.search)
const world = parameters.get('world')

self.plan98 = {
  ...self.plan98,
  parameters,
  host: world ? world : doingBusinessAs[window.location.host] ? window.location.host : 'sillyz.computer',
}
