import { generarJWT } from "../helpers/jwt";
import { User } from "../models/user.model";
import * as service from "../services/auth.service";
import bcrypt from 'bcrypt';

export const login = async (req: any, res: any) => {

  const { email, password } = req.body;

  try {
    const user: any = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        ok: false,
        message: "Usuario o contraseña incorrecta!"
      })
    }

    const validatePassword = bcrypt.compareSync(password, user.password);

    if (!validatePassword) {
      return res.status(404).json({
        ok: false,
        message: "Usuario o contraseña incorrecta!"
      })
    }

    const token: any = await generarJWT( user._id );

    res.json({
      ok: true,
      token
    })

  } catch (error) {
    throw new Error("Error");
  }
};

export const register = async (req: any, res: any) => {
  const { name, email, password } = req.body;
  const salt = bcrypt.genSaltSync();
  const bcryptPassword = bcrypt.hashSync(password, salt);
  try {
    const response = await service.register({ name, email, password: bcryptPassword });
    res.json(response);
  } catch (error) {
    throw new Error("Error");
  }
};
