const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// UserSchema.pre('save', true, async (next) => {
//   // eslint-disable-next-line no-unused-vars
//   const user = this;
//   // If the pw has been modified, then encrypt it again
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// UserSchema.methods.isValidPassword = async (password) => {
//   const user = this;
//   const compare = await bcrypt.compare(password, user.password);
//   return compare;
// };

module.exports = mongoose.model('users', UserSchema);
