import { codegen } from '@myyrakle/swagger-axios-codegen/dist'
import { writeFile, readFile } from 'fs'
import { promisify } from 'util'
import { cloneDeep } from 'lodash'

const writeFileAsync = promisify(writeFile)
const readFileAsync = promisify(readFile)

export interface generateParemeter {}

export async function generateAxios(document: any, basePath: string) {
  const documentObject: any = cloneDeep(document)
  documentObject.basePath = basePath
  const documentString: string = JSON.stringify(documentObject)
  await writeFileAsync('swagger.json', documentString, {
    encoding: 'utf8'
  })

  await codegen({
    methodNameMode: 'path',
    source: require('/swagger.json'),
    useHeaderParameters: true
  })
}
