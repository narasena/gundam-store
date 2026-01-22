import express, { type Request, type Response } from 'express';
import { prisma } from './lib/prisma.js';

const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('<h2>This is Gundam Store API</h2>');
});

app.listen(port, () => {
  console.log(`🤖 Gundam Store API listening on port ${port}`);
});

app.get('/api/products', (req: Request, res: Response) => {
  res.send('Gundam Store Products API');
});

app.post('/api/categories', async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    console.log(name);

    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const slug = name.toLowerCase().replace(/\s/g, '-');

    const newProduct = await prisma.categoryList.create({
      data: {
        name,
        slug,
      },
    });

    return res.status(201).json({
      message: 'Category created successfully',
      newProduct,
    });
  } catch (error) {
    console.log(error);
  }
});
