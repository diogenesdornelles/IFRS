import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';


interface User {
  name: string;
  mail: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
  user: {
    name: string;
    mail: string;
  };
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const accessTokenSecret = 'youraccesstokensecret';

const users: User[] = [
  {
    name: 'john',
    mail: 'john@gmail.com',
    password: '123456'
  },
  {
    name: 'anna',
    mail: 'anna@gmail.com',
    password: '987654'
  }
];

app.post('/login', (req: Request, res: Response): void => {
  const { mail, password } = req.body;

  const findUser = users.find(user => user.mail === mail && user.password === password);

  if (findUser) {
    const accessToken = jwt.sign(
      { mail: findUser.mail },
      accessTokenSecret,
      { expiresIn: '2m' }
    );

    const user = {
      name: findUser.name,
      mail: findUser.mail
    };

    res.json({
      accessToken,
      user
    } as AuthResponse);
  } else {
    res.status(401).json({ message: 'E-mail ou senha incorretos' });
  }
});

app.listen(3333, () => {
  console.log('Serviço de autenticação iniciado na porta 3333');
});