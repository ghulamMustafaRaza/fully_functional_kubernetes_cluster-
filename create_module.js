const fs = require('fs-extra');
const path = require('path');

let moduleName = process.argv[2];
if (!moduleName) {
    throw new Error('Module name must be not empty')
} 
let outPath = path.join(__dirname, moduleName)
let inPath = path.join(__dirname, 'module_template')
// console.debug(fs.existsSync(outPath), fs.readdirSync(outPath))
if (fs.existsSync(outPath) && fs.readdirSync(outPath).length) {
    throw new Error('out path must be empty dir or not exists')
}
console.log(`Using dir ${outPath}`)
console.log(`Copying Module Template to ${moduleName}...`)
fs.copy(inPath, outPath)
console.log(`Copying Done ${moduleName}.`)
console.log(`Start writing kube-menifest in json format at ${moduleName}/src/*.json`)