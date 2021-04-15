import { codegen } from '@myyrakle/swagger-axios-codegen/dist'
import { cloneDeep } from 'lodash'

export async function generateAxios(document: any, basePath: string) {
  const documentObject: any = cloneDeep(document)
  documentObject.basePath = basePath

  await codegen({
    methodNameMode: 'path',
    source: documentObject,
    useHeaderParameters: true
  })
}
