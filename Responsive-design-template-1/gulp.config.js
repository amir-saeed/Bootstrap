module.exports = function() {
    var config = {
        dest : './css',
        // all sass files to css
        sass: './sass/app.scss',
        allsass: ['./sass/*.scss','./sass/**/*.scss']    
    };
    return config;
};