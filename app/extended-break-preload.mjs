import {
  exposeElectronApi,
  exposeBreaks,
  exposeI18next,
  exposeRuntime,
  exposeSettings,
  exposeStretchly,
  exposeUtils
} from './utils/context-bridge-exposers.js'

exposeElectronApi()
exposeBreaks('extended')
exposeI18next()
exposeRuntime()
exposeSettings()
exposeStretchly()
exposeUtils()
