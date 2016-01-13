var gulp            =   require('gulp'),
    watch           =   require('gulp-watch'),
    gulpShopify     =   require('gulp-shopify-upload');

gulp.task('watch', function() {
    return watch('./+(assets|layout|config|snippets|templates|locales)/**')
        .pipe(gulpShopify('6f3a40250b332a7da0a07b9806a0d3a1', '30108e85546ff7ea9fde26500ea15a66', 'guitar-strings.myshopify.com', '87197511'));
});

gulp.task('default', [
    'shopifywatch'
]);