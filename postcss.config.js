module.exports = ctx => ({
	plugins: {
		'postcss-import': {},
		autoprefixer: true,
		cssnano: ctx.env === 'production' ? {} : false
	}
});
