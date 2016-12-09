/*
  Gulp task

  this is used to create the gulpfile.js

  tasks:
    - default : runs http server with live reload
    - test : todo 
*/
import js.Node;

typedef Gulp = {
  task : String->Dynamic->Void,
  watch : Array<String>->(GulpEvent->Void)->Void,
  src : String->Dynamic
}

typedef GulpEvent = {
  type : String,
  path : String
}

typedef GulpConnect = {
  server : Dynamic->Void,
  reload : Void->Void
}

class Gulpfile
{
  public static inline var WEBROOT:String = "./public";
  public static inline var HOST:String = "localhost";
  public static inline var PORT:Int = 3333;
  public static inline var AUTO_OPEN_BROWSER:Bool = true;

  private static var gulp:Gulp = Node.require("gulp");
  private static var connect:GulpConnect = Node.require("gulp-connect");
  
  public static function main()
  {
    gulp.task('default', ['connect','watch']);
    gulp.task('watch',  watch_task);
    gulp.task('connect', connect_task);
  }


  private static inline function connect_task(cb:Void->Void):Void
  {
    connect.server({
      root: WEBROOT,
      host: HOST,
      port: PORT,
      livereload: true
    });
    if(AUTO_OPEN_BROWSER){
      Node.child_process.exec('open http://$HOST:$PORT && subl $WEBROOT/js/class-definitions.js', null, function(error:{ code : Int }, stdout:String, stderr:String):Void
      {
        trace('          «--´¯`--–…·´--».-.- ( NOTICE ) -.-.«-`·…–--´¯`-----»

          You need to have the LiveReload chrome extension installed
          get it here:
          ╔══════════════════════════════════════╗
            http://tinyurl.com/chrome-livereload
          ╚══════════════════════════════════════╝
          
          Make sure this script tag is included in your html
            - else manually start livereload chrome extension

          ╔════════════════════════════════════════════════════════════════════════╗
            <script src="http://localhost:35729/livereload.js?snipver=1"></script>
          ╚════════════════════════════════════════════════════════════════════════╝

          (¯`·._.·[ Opened $WEBROOT/index.html in your default web browser ]·._.·´¯)

          •^v^–[ Opened $WEBROOT/js/class-definitions.js in Sublime Text ]–^v^•
          ');
      });
    }
  }

  private static inline function watch_task(?cb:Void->Void):Void
  {
    gulp.watch(['$WEBROOT/**'], reload);
  }

  private static inline function reload(event:GulpEvent):Void
  {
    gulp.src('$WEBROOT/**')
      .pipe(connect.reload());
  }
  
}