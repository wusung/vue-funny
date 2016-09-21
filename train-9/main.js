Vue.component('tasks', {
  props: ['list'],
  template: '#tasks-template',
  computed: {
    remaining: function() {
      return this.list.filter(this.isInProcess).length;
    }
  },
  methods: {
    isCompleted: function(task) {
      return task.completed;
    },

    isInProcess: function(task) {
      return !task.completed;
    },

    deleteTask: function(task) {
      this.list.$remove(task);
    },

    clearCompleted: function() {
      this.list = this.list.filter(this.isInProcess);
    }
  }
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
