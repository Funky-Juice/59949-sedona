"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig ({
    less: {
      style: {
        files: {
          "build/css/style.css": "less/style.less"
        }
      }
    },

    postcss: {
      style: {
        options: {
          processors: [
            require("autoprefixer")({browsers: [
              "last 2 versions"
            ]}),
            require("css-mqpacker")({
              sort: true
            })
          ]
        },
        src: "build/css/*.css"
      }
    },

    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    imagemin: {
      images: {
        options: {
          optimizationlevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif}"]
        }]
      }
    },

    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css",
            "build/js/*.js"
          ]
        },
        options: {
          server: "build",
          watchTask: true,
          notify: false,
          open: true,
          cors: true,
          ui: false
        }
      }
    },

    clean: {
      build: ["build"]
    },

    copy: {
      build: {
        files: [{
          expand: true,
          src: [
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "js/**",
            "*.html"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          src: ["*.html"],
          dest: "build"
        }]
      },
      js: {
        files: [{
          expand: true,
          src: ["js/*.js"],
          dest: "build"
        }]
      }
    },

    watch: {
      html: {
        files: ["*.html"],
        tasks: ["copy:html"]
      },
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss", "csso"],
        options: {
          spawn: false
        }
      },
      js: {
        files: ["js/*.js"],
        tasks: ["copy:js"]
      }
    }
  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "postcss",
    "csso",
    "imagemin"
  ]);
};
