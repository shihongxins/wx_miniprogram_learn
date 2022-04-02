// components/Child1/Child1.js
Component({
  properties: {
    name: {
      type: String,
    }
  },
  data: {
    msg: "Hello, "
  },
  methods: {
    handleSayHi() {
      console.log(this.data.msg+this.properties.name);
    },
  }
})
