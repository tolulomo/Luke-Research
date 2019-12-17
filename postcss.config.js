module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({
            stage: 1,
        }),
        require('postcss-mixins'),
        require('postcss-simple-vars'),
        require('postcss-hexrgba'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('cssnano')
    ],
};