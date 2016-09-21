Vue.component('tasks', {
  props: ['list'],
  template: '#tasks-template'
});

new Vue({
  el: '#app',

  data: {
    thing: 'thinky',
    someThing: true,
    tasks: [
      { body: 'Go to the store',  completed: false },
      { body: 'Go to the bank', completed: false },
      { body: 'Go to the doctor', completed: true }
    ],
    methods: {
      toggleCompletedFor: function(task) {
        task.completed = !task.completed;
        alert('x');
      }
    }
  }
})
