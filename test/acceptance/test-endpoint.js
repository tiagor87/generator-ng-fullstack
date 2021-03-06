const path = require('path');
const os = require('os');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const {createYoRc} = require('../_helpers/mocks');

describe('subgenerator -> endpoint', () => {
  describe('node', () => {
    describe('standard', () => {
      before(function (done) {
        helpers
        .run(path.join(__dirname, '../../endpoint'))
        .inTmpDir(function() {
          createYoRc({
            "generator-ng-fullstack": {
              "transpilerServer": "node",
              "nodeWebFrameworkServer": "express",
              "server": "node",
              "testsSeparated": true
            }
          }, this.async());
        })
        .withArguments('endp')
        .withPrompts({
          appName: "a", 
          userNameSpace: "b", 
          transpilerServer: "node", 
          server: "node", 
          testsSeparated: true
        })
        .withOptions({feature: 'todo2'})
        .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'server/api/todo2/controller/endp-controller.js',
          'server/api/todo2/dao/endp-dao.js',
          'server/api/todo2/model/endp-model.js',
          'server/api/todo2/route/endp-route.js',

          'tests/server/todo2/model/endp-model_test.js',
          'tests/server/todo2/route/endp-route_test.js',
          'tests/server/todo2/dao/endp-dao_test.js',
          'tests/server/todo2/controller/endp-controller_test.js'
        ]);
      })
    })

    describe('babel', () => {
      before(function (done) {
        helpers
        .run(path.join(__dirname, '../../endpoint'))
        .inTmpDir(function() {
          createYoRc({
            "generator-ng-fullstack": {
              "transpilerServer": "babel",
              "nodeWebFrameworkServer": "express",
              "server": "node",
              "testsSeparated": true
            }
          }, this.async());
        })
        .withArguments('endp')
        .withPrompts({
          appName: "a", 
          userNameSpace: "b", 
          transpilerServer: "babel", 
          server: "node", 
          testsSeparated: true
        })
        .withOptions({feature: 'todo2'})
        .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'server/api/todo2/controller/endp-controller.js',
          'server/api/todo2/dao/endp-dao.js',
          'server/api/todo2/model/endp-model.js',
          'server/api/todo2/route/endp-route.js',

          'tests/server/todo2/model/endp-model_test.js',
          'tests/server/todo2/route/endp-route_test.js',
          'tests/server/todo2/dao/endp-dao_test.js',
          'tests/server/todo2/controller/endp-controller_test.js'
        ]);
      })
    })

    describe('typescript', () => {
      before(function (done) {
        helpers
        .run(path.join(__dirname, '../../endpoint'))
        .inTmpDir(function() {
          createYoRc({
            "generator-ng-fullstack": {
              "transpilerServer": "typescript",
              "nodeWebFrameworkServer": "express",
              "server": "node",
              "testsSeparated": true
            }
          }, this.async());
        })
        .withArguments('endp')
        .withPrompts({
          appName: "a", 
          userNameSpace: "b", 
          transpilerServer: "typescript", 
          server: "node", 
          testsSeparated: true
        })
        .withOptions({feature: 'todo2'})
        .on('end', done);
      });

      it('creates files', () => {
        assert.file([
          'server/api/todo2/controller/endp-controller.ts',
          'server/api/todo2/dao/endp-dao.ts',
          'server/api/todo2/model/endp-model.ts',
          'server/api/todo2/route/endp-route.ts',

          'tests/server/todo2/model/endp-model_test.js',
          'tests/server/todo2/route/endp-route_test.js',
          'tests/server/todo2/dao/endp-dao_test.js',
          'tests/server/todo2/controller/endp-controller_test.js'
        ]);
      })
    })
  })

  describe('go', () => {
    before((done) => {
      helpers
      .run(path.join(__dirname, '../../endpoint'))
      .inTmpDir(function() {
        createYoRc({
          "generator-ng-fullstack": {
            "server": "go",
            "goWebFrameworkServer": "echo"
          }
        }, this.async());
      })
      .withArguments('endp')
      .withPrompts({
        appName: "a", 
        userNameSpace: "b", 
        server: "go", 
        goWebFrameworkServer: "echo", 
        testsSeparated: true
      })
      .withOptions({feature: 'todo2'})
      .on('end', done);
    });

    it('creates files', () => {
      assert.file([
        'server/api/todo2/controller/endpcontroller.go',
        'server/api/todo2/dao/endpdao.go',
        'server/api/todo2/model/endpmodel.go',
        'server/api/todo2/route/endproute.go',

        'server/api/todo2/controller/endpcontroller_test.go',
        'server/api/todo2/route/endproute_test.go',
        'server/api/todo2/dao/endpdao_test.go',
        'server/api/todo2/model/endpmodel_test.go'
      ]);
    });
  })
});
