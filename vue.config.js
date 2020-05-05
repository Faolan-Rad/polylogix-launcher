module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions:{
    electronBuilder: {
      builderOptions: {
        win: {
          icon: './src/assets/icon.ico'
        }
      }
    },
  }
}
