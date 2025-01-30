import multer from 'multer'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const PATH = path.resolve(__dirname, '..', 'uploads')

// Extend interface Request to suport new fields
declare global {
  namespace Express {
    interface Request {
      tempFilePath: string
      filePath: string
      fileName: string
    }
  }
}

// file filter to validate file
function fileFilter(
  req: Express.Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) {
  const allowedExtensions = ['.png', '.jpeg', '.jpg'];
  const fileExtension = path.extname(file.originalname).toLowerCase();

  // valid ext
  if (!allowedExtensions.includes(fileExtension)) {
    return cb(new Error('Apenas arquivos PNG, JPEG e JPG são permitidos!'));
  }

  // file size
  if (file.size > 2 * 1024 * 1024) { // 2MB em bytes
    return cb(new Error('O arquivo excede o limite de 2MB!'));
  }

  cb(null, true); // Aceita o arquivo
}

// storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, PATH) // root, uploads
  },
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname).toLowerCase() // get ext
    const name = `${uuidv4()}${fileExtension}` // add uuid
    const tempName = `temp-${name}` // tem name

    // persiste file info on req
    req.tempFilePath = path.join(PATH, tempName)
    req.filePath = path.join(PATH, name)
    req.fileName = name

    cb(null, tempName) // Save temp file
  },
})

// Multer config
const upload = multer({
  storage,
  fileFilter,
})

export default upload
