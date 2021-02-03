import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String }, 
    CompletedFlag: { type: Number, default: '0' },
   
  },
  
);
const Todo = mongoose.model('Todo', todoSchema);
export default Todo;