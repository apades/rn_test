import fs from 'react-native-fs'
import { ParamType } from './utils'

let basePath = fs.ExternalStorageDirectoryPath
export async function writeFile(...arg: ParamType<typeof fs['writeFile']>) {
  return fs.writeFile(`${basePath}${arg[0]}`, arg[1], arg[2])
}

export async function readFile(...arg: ParamType<typeof fs['readFile']>) {
  return fs.readFile(`${basePath}${arg[0]}`, arg[1])
}

export async function readDir(...arg: ParamType<typeof fs['readDir']>) {
  return fs.readdir(`${basePath}${arg[0]}`)
}
