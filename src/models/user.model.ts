import { model, Schema } from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator');

interface IUser {
  name: string;
  email: string;
  password: string;
  status: string;
}

let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    status: {
        type: Boolean,
        default: true
    },
})

userSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;


    return userObject;

}

userSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
export const User = model<IUser>('User', userSchema);
