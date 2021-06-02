import fs from 'react-native-fs'
import { ParamType } from './utils'

let getBasePath = () => fs.ExternalStorageDirectoryPath
export async function writeFile(...arg: ParamType<typeof fs['writeFile']>) {
  return fs.writeFile(`${getBasePath()}${arg[0]}`, arg[1], arg[2])
}

export async function readFile(...arg: ParamType<typeof fs['readFile']>) {
  return fs.readFile(`${getBasePath()}${arg[0]}`, arg[1])
}

export async function readDir(...arg: ParamType<typeof fs['readDir']>) {
  return fs.readdir(`${getBasePath()}${arg[0]}`)
}
