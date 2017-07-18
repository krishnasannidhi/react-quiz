module.exports=function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify:{
      dist:{
        options:{
          transform:[['babelify',{presets:['react']}]],
        browserifyOptions:{
          debug:true,
          // transform:['reactify'],
             extensions:['.jsx']
        }

        },
        files:[{
          'dist/<%= pkg.name %>.js':['public/**/*.js','public/**/*.jsx']
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-browserify')

  grunt.registerTask('default',['build'])
  grunt.registerTask('build',['browserify'])
}
