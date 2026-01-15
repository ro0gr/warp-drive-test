import Application from 'warp-drive-test/app';
import config from 'warp-drive-test/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import '@warp-drive/ember/install';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
