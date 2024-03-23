const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        required: true,
        trim: true,
        type: String
    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, { timestamps: true })

taskSchema.pre('save', async function (next) {

    const task = this
    console.log('print i am here')
    next()
})
const Task = mongoose.model('task', taskSchema)


module.exports = Task