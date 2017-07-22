module.exports=function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less:{
      development:{
        options:{
          compress:true
        },
        files:[{'dist/<%=pkg.name %>.css':['public/**/*.less']}]
      }
    },
    watch:{
      files:['public/**/*.js','public/**/*.jsx','public/**/*.less'],
      tasks:['browserify','less']
    },
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

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('default',['build'])
  grunt.registerTask('build',['browserify','less','watch'])
}
