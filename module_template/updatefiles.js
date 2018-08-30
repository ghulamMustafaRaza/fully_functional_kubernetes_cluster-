const fs = require('fs');
const path = require('path');
var YAML = require('json2yaml');
module.exports = (replace = {
    pwd: __dirname
}) => {
    let ymlText = ''
    let outPath = path.join(__dirname, 'out');
    if (!fs.existsSync(outPath)) fs.mkdirSync(outPath)
    fs.readdirSync(path.join(__dirname, 'src'))
    .filter(item => {
        return (item.slice(-4) === 'json')
    })
    .forEach(element => {
        let fileData = fs.readFileSync(path.join(__dirname, 'src', element), 'utf8')
        Object.keys(replace).map(item => {
            fileData = fileData.replace(new RegExp(`{${item}}`, 'g'), replace[item])
        })
        ymlText += YAML.stringify(JSON.parse(fileData))
        fs.writeFileSync(path.join(outPath, element), fileData, 'utf8')
    });
    fs.writeFileSync(path.join(__dirname, 'out.yml'), ymlText, 'utf8')
}