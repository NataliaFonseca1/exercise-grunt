module.exports=function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development:{
        files:{
          'dist/styles/main.css':"src/styles/main.less"
        }
      },
      production:{
        options:{
          compress:true,
        },
        files:{
          'dist/styles/main.min.css':'src/styles/main.less'
        }
      }
    },
    sass:{
      dist:{
        options:{
            style:'compressed'
        },
        files:{
          'dist/styles/main2.css':'src/styles/main.scss'
        }
      }
    },
  
    uglify:{
      target:{
        files:{
          'dist/scripts/main.min.js': 'src/scripts/main.js'
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-less')
grunt.loadNpmTasks('grunt-contrib-sass')
grunt.loadNpmTasks('grunt-contrib-uglify')


grunt.registerTask('default', ['less','sass', 'uglify'])

}