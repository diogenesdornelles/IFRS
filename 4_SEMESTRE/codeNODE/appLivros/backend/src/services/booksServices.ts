import { PaginateResult } from 'mongoose'
import Book, { IBook } from '../models/Books'
import { Request } from 'express'
import { IQueryOptions } from '../middlewares/validateSearchQuery';

// Return all books
export const getAllBooks = async (): Promise<IBook[]> => {
  try {
    return await Book.find();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching all books:', error.message);
      throw new Error(`Database error: ${error.message}`);
    }
    throw new Error('An unknown error occurred while fetching books.');
  }
};

// Find by ID
export const getBookById = async (id: string): Promise<IBook | null> => {
  try {
    if (!id) throw new Error('ID is required.');

    const book = await Book.findById(id);
    if (!book) throw new Error(`Book with ID ${id} not found.`);
    return book;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error fetching book with ID ${id}: ${error.message}`);
      throw new Error(`Failed to fetch book with ID ${id}: ${error.message}`);
    }
    throw new Error('An unknown error occurred while fetching the book.');
  }
};


// Create a book
export const createBook = async (req: Request): Promise<IBook> => {
  try {
    const { title, description, pageCount, excerpt, publishDate, image } =
      req.body as Partial<IBook>;

    if (!title || !description) {
      throw new Error('Title and description are required.');
    }

    const newBook = new Book({
      title,
      description,
      pageCount,
      excerpt,
      publishDate,
      image,
    });

    return await newBook.save();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error creating book: ${error.message}`);
      throw new Error(`Failed to create book: ${error.message}`);
    }
    throw new Error('An unknown error occurred while creating the book.');
  }
};


// Update a book by ID
export const updateBook = async (
  id: string,
  req: Request,
): Promise<IBook | null> => {
  try {
    if (!id) throw new Error('ID is required.');

    const updates = req.body as Partial<IBook>;
    const updatedBook = await Book.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedBook) throw new Error(`Book with ID ${id} not found.`);
    return updatedBook;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error updating book with ID ${id}: ${error.message}`);
      throw new Error(`Failed to update book with ID ${id}: ${error.message}`);
    }
    throw new Error('An unknown error occurred while updating the book.');
  }
};


// Delete by ID
export const deleteBook = async (id: string): Promise<boolean> => {
  try {
    if (!id) throw new Error('ID is required.');

    const result = await Book.findByIdAndDelete(id);
    if (!result) throw new Error(`Book with ID ${id} not found.`);
    return true;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error deleting book with ID ${id}: ${error.message}`);
      throw new Error(`Failed to delete book with ID ${id}: ${error.message}`);
    }
    throw new Error('An unknown error occurred while deleting the book.');
  }
};


// Get books by pagination
export const getBooks = async (
  page: number = 1,
  limit: number = 10,
): Promise<PaginateResult<IBook> | null> => {
  try {
    const options = {
      page,
      limit,
      sort: { publishDate: -1 },
    };

    const result = await Book.paginate({}, options);
    return result ?? null;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        `Error fetching paginated books (page: ${page}, limit: ${limit}): ${error.message}`,
      );
      throw new Error(
        `Failed to fetch paginated books: ${error.message}`,
      );
    }
    throw new Error('An unknown error occurred while fetching paginated books.');
  }
};


// search books by fields
export const searchBooks = async (
  queryOptions: IQueryOptions
): Promise<IBook[]> => {
  try {
    const query = {
      $and: [
        { publishDate: { $gte: queryOptions.minPublishDate, $lte: queryOptions.maxPublishDate } },
        { pageCount: { $gte: queryOptions.minPages, $lte: queryOptions.maxPages } },
        { title: { $regex: queryOptions.title, $options: 'i' } },
        { description: { $regex: queryOptions.description, $options: 'i' } },
        { excerpt: { $regex: queryOptions.excerpt, $options: 'i' } },
      ],
    };

    const books = await Book.find(query).sort({ name: -1 }).limit(10);
    return books;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error fetching books with filters: ${error.message}`);
      throw new Error(`Failed to fetch books with filters: ${error.message}`);
    }
    throw new Error('An unknown error occurred while searching for books.');
  }
};


// After create an image, update image field on book
export const updateBookImage = async (
  id: string,
  imagePath: string,
): Promise<IBook | null> => {
  try {
    const book = await Book.findById(id);
    if (!book) throw new Error(`Book with ID ${id} not found.`);

    book.image = imagePath;
    const updatedBook = await book.save();
    return updatedBook;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error updating book image with ID ${id}: ${error.message}`);
      throw new Error(`Failed to update book image with ID ${id}: ${error.message}`);
    }
    throw new Error('An unknown error occurred while updating the book image.');
  }
};

