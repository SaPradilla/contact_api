import { IcontactModel } from '../interfaces/contact.interface';
import mongoose, { Model, Schema } from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement = AutoIncrementFactory(mongoose);

const ContactSchema = new Schema({
    id:{
        type:Number,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    liked: {
        type: Boolean,
        default: false
    }
});


ContactSchema.plugin(AutoIncrement, { inc_field: 'id' });

export const ContactModel:Model<IcontactModel> = mongoose.model<IcontactModel>('Contacts', ContactSchema);