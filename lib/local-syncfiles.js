const path = require('path')
const fse = require('fs-extra')

module.exports = (srcDir, targetDir, {type, exclude}) => {
	fse.ensureDirSync(targetDir)

	syncFiles(srcDir, targetDir, {type, exclude})
}