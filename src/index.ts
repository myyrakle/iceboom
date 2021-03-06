import { codegen } from '@myyrakle/swagger-axios-codegen/dist'
import { cloneDeep } from 'lodash'

export async function generateAxios(document: any, basePath: string, outputDir: string = '../axios') {
  document = require('../test.json')

  const documentObject: any = cloneDeep(document)
  documentObject.basePath = basePath

  documentObject.tags = [{ name: 'api', description: '' }]
  const pathKey = Object.keys(documentObject.paths)

  for (const key of pathKey) {
    const methods = Object.keys(documentObject.paths[key])

    for (const method of methods) {
      documentObject.paths[key][method].tags = ['api']
    }
  }

  //console.log()

  await codegen({
    methodNameMode: 'path',
    source: documentObject,
    useHeaderParameters: true,
    outputDir
  })
}
// test
//generateAxios(null, 'localhost:3000', '../foo/axios')
