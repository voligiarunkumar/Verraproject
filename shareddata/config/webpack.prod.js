const{merge}=require('webpack-merge');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const packgeJson=require('../package.json');
const commonConfig=require('./webpack.common');
const productionConfig={
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
        publicPath:'/shareddata/latest/',
        
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'shareddata',
            filename:'remoteEntry.js',
            exposes:{
                './SharedData':'./src/bootstrap'
            },
            shared:packgeJson.dependencies
        })
    ]
}
module.exports=merge(commonConfig,productionConfig);