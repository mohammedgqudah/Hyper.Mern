import * as mongoose from 'mongoose';
import MBUV from 'mongoose-beautiful-unique-validation';
import fs from 'fs';
import path from 'path';
import Identicon from 'identicon.js';
import md5 from 'md5';

import SETTINGS from '../../settings';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 3,
    max: 20,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  avatar: {
    type: String
  }
});

UserSchema.pre('save', async function(next) {
  let id = md5(this._id);
  this.avatar = id;
  let icon = new Identicon(md5(this.id), 420);
  let IMG_FOLDER = path.join(
    SETTINGS.STATIC_FILES_PATH,
    'assets',
    'img',
    'avatars'
  );
  fs.writeFileSync(path.join(IMG_FOLDER, `${id}.png`), icon, 'base64');
  next();
});

UserSchema.plugin(MBUV);
const User = mongoose.model('User', UserSchema);

export default User;
export { UserSchema };
