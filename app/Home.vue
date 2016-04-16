<style>
</style>

<template>
  <div id="home">
    <modal title="信息" :show.sync="subjectModal" effect="zoom" width="400">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">
          请输入主题编号【1-32767, 0：不纪录数据】
        </h4>
      </div>
      <div slot="modal-body" class="modal-body">
        <div class="form-group">
          <input type="number" class="form-control" placeholder="主题编号" v-model="subjectId">
        </div>
      </div>
      <div slot="modal-footer" class="modal-footer">
        <button type="button" class="btn btn-primary" @click='logSujectId'>好的</button>
        <button type="button" class="btn btn-default" @click='subjectModal = false'>取消</button>
      </div>
    </modal>
    <modal title="信息" :show.sync="sessionModal" effect="zoom" width="400">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">
          请输入会话编号【1-32767, 0：不纪录数据】
        </h4>
      </div>
      <div slot="modal-body" class="modal-body">
        <div class="form-group">
          <input type="number" class="form-control" placeholder="会话编号" v-model="sessionId">
        </div>
      </div>
      <div slot="modal-footer" class="modal-footer">
        <button type="button" class="btn btn-primary" @click='logSessionId'>好的</button>
        <button type="button" class="btn btn-default" @click='sessionModal = false'>取消</button>
      </div>
    </modal>
    <modal title="信息" :show.sync="checkModal" effect="zoom" width="400">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">
          请确认以下的主题编码、会话编码是否正确，继续？
        </h4>
      </div>
      <div slot="modal-body" class="modal-body">
        <p>主题编码：{{subjectId}}</p>
        <p>会话编码：{{sessionId}}</p>
      </div>
      <div slot="modal-footer" class="modal-footer">
        <button type="button" class="btn btn-primary" @click='logUserInfo'>是</button>
        <button type="button" class="btn btn-danger" @click='fallback'>否</button>
      </div>
    </modal>
  </div>
</template>

<script>
  import { modal } from 'vue-strap'
  // import fs from 'fs'
  // import json2csv from 'json2csv'

  export default {
    ready () {
      // var fields = ['car', 'price', 'color']
      // var myCars = [
      //   {
      //     'car': 'Audi',
      //     'price': 40000,
      //     'color': 'blue'
      //   }, {
      //     'car': 'BMW',
      //     'price': 35000,
      //     'color': 'black'
      //   }, {
      //     'car': 'Porsche',
      //     'price': 60000,
      //     'color': 'green'
      //   }
      // ]

      // json2csv({ data: myCars, fields: fields }, function (err, csv) {
      //   if (err) console.log(err)
      //   fs.writeFile('file.csv', csv, function (err) {
      //     if (err) throw err
      //     console.log('file saved')
      //   })
      // })
    },
    data () {
      return {
        subjectModal: true,
        sessionModal: false,
        checkModal: false,
        subjectId: 1,
        sessionId: 1
      }
    },
    methods: {
      logSujectId () {
        console.log(this.subjectId)
        this.subjectModal = false
        this.sessionModal = true
      },
      logSessionId () {
        console.log(this.sessionId)
        this.sessionModal = false
        this.checkModal = true
      },
      logUserInfo () {
        console.log(this.subjectId, this.sessionId)
        localStorage.setItem('subjectId', this.subjectId)
        localStorage.setItem('sessionId', this.sessionId)
        this.$router.go('learn')
      },
      fallback () {
        this.subjectModal = true
        this.checkModal = false
      }
    },
    components: {
      'modal': modal
    }
  }
</script>

