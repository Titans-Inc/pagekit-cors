!function(e){function t(s){if(o[s])return o[s].exports;var n=o[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t){e.exports={el:"#cors",data:{cors:window.$data.cors,form:{},allow_origin_new:"",allow_headers_new:"",expose_headers_new:"",hosts_new:"",allow_methods_new:""},methods:{add:function(e){this[e+"_new"]&&(this.cors[e].push(this[e+"_new"]),this[e+"_new"]="")},remove:function(e,t){this.cors[t].$remove(e)},save:function(){this.$http.post("admin/cors/save",{cors:this.cors}).then(function(){this.$notify("Settings saved.")},function(e){this.$notify(e.data,"danger")})}}},Vue.ready(e.exports)}]);