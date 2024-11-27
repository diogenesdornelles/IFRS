import TUser from "../types/user"
import jwt from 'jsonwebtoken';
import users from "../db/fake";

export const createToken = async (
  req: Request,
): Promise<string | boolean> => {
  // Usa Desestruturação para pegar os campos enviados pelo body
  try {
    const { username, password } = req.body as unknown as TUser;
    for (let user of users) {
      if (user.username === username && user.password === password) {
        // Sign the JWT token with a secret key and expiration time
        const token = jwt.sign({ username, password }, process.env.SECRET as string, {
          expiresIn: 300, // Token expires in 5 minutes (300 seconds)
        });
        return token;
      }
    }
    return false;
  } catch (error) {
    return false;
  }
}

