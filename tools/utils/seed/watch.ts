import * as runSequence from 'run-sequence';
import {notifyLiveReload} from '../../utils';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import {join} from 'path';
import {APP_SRC} from '../../config';
const plugins = <any>gulpLoadPlugins();

export function watch(taskname: string) {
  return function () {
    plugins.watch([
        join(APP_SRC, '**/*.html'),
        join(APP_SRC, '**/*.ts'),
        join(APP_SRC, '**/*.scss'),
        join(APP_SRC, '**/*.css')
      ], (e:any) =>
        runSequence(taskname, () => notifyLiveReload(e))
    );
  };
}
