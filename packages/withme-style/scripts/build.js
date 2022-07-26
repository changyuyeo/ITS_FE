const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const fs = require('fs');
const path = require('path');
const sass = require('node-sass');

//* build 폴더 생성
try {
	fs.mkdirSync(path.join(__dirname, '..', 'build'));
	console.log('💾 build 폴더 생성합니다...');
} catch {
	console.log('💾 build 폴더가 존재합니다...');
}

//* scss compile func
const compile = (filePath, fileName) => {
	const result = sass.renderSync({
		data: fs.readFileSync(path.resolve(filePath)).toString(),
		sourceComments: false,
		outputStyle: 'expanded',
		includePaths: [path.resolve('src')]
	});

	//* add vendor prefix on compile
	postcss([autoprefixer()])
		.process(result.css.toString(), { from: undefined })
		.then(value => {
			fs.writeFileSync(path.resolve(fileName), value.toString());
		});
};

//* scss to css Compiler
compile('src/global.scss', 'build/global.css');
