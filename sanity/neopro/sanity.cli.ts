import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '2r4zw7v3',
    dataset: 'production'
  },
  deployment: {
    appId: 'ace6ajusv6fjkd9ipbsr5l8q',
    autoUpdates: true,
  }
})
