export const state = () => ({
  headers: [
    {
      text: '글목록',
      value: 'title',
      align: 'center',
      sortable: false
    },
    { 
      text: '작성일',
      value: 'regdt',
      align: 'right'
    }
  ],
  desserts: [
    {
      no: 1,
      title: 'Node.js',
      context: '공부하자',
      regdt: new Date().getHours() + ':' + new Date().getMinutes(),
    },
    {
      no: 2,
      title: 'Vue.js',
      context: '공부하자',
      regdt: new Date().getHours() + ':' + new Date().getMinutes(),
    },
    {
      no: 3,
      title: 'Nuxt.js',
      context: '공부하자',
      regdt: new Date().getHours() + ':' + new Date().getMinutes(),
    },
    {
      no: 4,
      title: 'React.js',
      context: '공부하자',
      regdt: new Date().getHours() + ':' + new Date().getMinutes(),
    },
    {
      no: 5,
      title: 'Javascript',
      context: '공부하자',
      regdt: new Date().getHours() + ':' + new Date().getMinutes(),
    },
    {
      no: 6,
      title: 'HTML',
      context: '공부하자',
      regdt: new Date().getHours() + ':' + new Date().getMinutes(),
    },
    {
      no: 7,
      title: 'Vuetify.js',
      context: '공부하자',
      regdt: new Date().getHours() + ':' + new Date().getMinutes(),
    },
  ]
})

export const getters = {
  getList : (state) => (items) => {
    for(const list of state.desserts) {
      if(list.no == items) {
        return list;
      }
    }
  }
}

export const mutations = {
  add(state, data) {
      let array_no = state.desserts
      let array_index = array_no.length -1
      array_no = array_no[array_index].no
      data.no = array_no + 1
      data.regdt = new Date().getHours() + ':' + new Date().getMinutes()
      state.desserts.push(data)
      console.log(data);
   },
   modify(state, data) {
      var index = state.desserts.findIndex(i => i.no == data.no)
      state.desserts[index].title = data.title
      state.desserts[index].context = data.context
      state.desserts[index].regdt = new Date().getHours() + ':' + new Date().getMinutes()
   },
   delete(state, data) {
      var index = state.desserts.findIndex(i => i.no == data.no)
      state.desserts.splice(index, 1)
   }
}

