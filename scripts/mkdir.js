import fs from 'fs'
import path from 'path'
import { parse } from 'yaml'

const configPath = path.join(process.cwd(), 'app.config.yaml')
const config = parse(fs.readFileSync(configPath, 'utf8'))

const pkg = Object.keys(config.application.runtimeManifest.packages)[0]
const action = Object.keys(config.application.runtimeManifest.packages[pkg].actions)[0]

fs.mkdirSync(path.join('dist', 'application', 'actions', pkg, `${action}-temp`), { recursive: true })
