module.exports = {
    plugins:(loader)=>[  
        require('./node_modules/autoprefixer')({  
            browsers: ['iOS >= 7', 'Android >= 4.1', 
            'last 10 Chrome versions', 'last 10 Firefox versions', 
            'Safari >= 6', 'ie > 8']
        })  
    ]  
}