const {merge}=require('webpack-merge');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
//making sure that we have to use only webpack config  not webpack serve in the webpack.prod.js
const pacakgejson=require('../package.json');
const commonConfig=require('./webpack.common');
const devConfig={
    mode:'development',
    output:{
        publicPath:'http://localhost:8080/'
      },
    devServer:{
        port:8080,
        historyApiFallback:{
            index: '/index.html'
        },
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                vtrace:'vtrace@http://localhost:8085/remoteEntry.js',
                shareddata:'shareddata@http://localhost:8083/remoteEntry.js',
                shipping:'shipping@http://localhost:8084/remoteEntry.js',
                
            },
            shared:pacakgejson.dependencies,
        }),
       
    ],
};
module.exports=merge(commonConfig,devConfig);