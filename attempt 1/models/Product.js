const mongoose=require('mongoose');

const projectSchema=new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        description: { type: String, required: false, unique: false},
        image: { type: Image },
        // categories: {type: Array },
        price: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports=mongoose.model('Projects', projectSchema);