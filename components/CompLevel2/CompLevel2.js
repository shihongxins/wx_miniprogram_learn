// components/CompLevel2/CompLevel2.js
Component({
  data: {
    datetime: new Date().toLocaleTimeString(),
  },
  methods: {
    updateDateTime() {
      this.setData({
        datetime: new Date().toLocaleTimeString(),
      });
    }
  }
})
