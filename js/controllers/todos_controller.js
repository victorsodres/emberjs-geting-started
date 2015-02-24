Todos.TodosController = Ember.ArrayController.extend({
    actions:{
        createTodo: function(){
            // Get the todo title set by the "New Todo" text field
            var title = this.get('newTitle');
            if(!title) { return false; }
            if(!title.trim()) { return false; }
            
            //Create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            //Clear the "new Todo" text field
            this.set('newTitle', '');

            //Save the new model
            todo.save();
        }
    }
});