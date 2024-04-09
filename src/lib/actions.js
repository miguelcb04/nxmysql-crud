'use server'
import { db } from '@/lib/mysql'
import { redirect } from 'next/navigation';


export async function getArticulos() {
  try {
    const results = await db.query('select * from posts');
    // console.log(results);
    return results;
  } catch (error) {
    // console.log(error);  
    return null;    
  }
}

export async function newArticulo(formData) {
  try {
    const author = formData.get('author');
    const title = formData.get('title');
    const image = formData.get('image');
    const post = formData.get('post');
    const created = formData.get('created');
    const modified = formData.get('modified');
    const is_draft = formData.get('is_draft');
    const slug = formData.get('slug');
    const views = formData.get('views');

    const query = 'insert into posts(author,title,image,post,created,modified,is_draft,slug,views) values (?, ?, ?, ?, ?, ?, ? ,?, ?)';
    const results = await db.query(query, [author, title, image,post ,created ,modified ,is_draft,slug ,views ]);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}


export async function editArticulo(formData) {
  const id = formData.get('id')
  const author = formData.get('author');
  const title = formData.get('title');
  const image = formData.get('image');
  const post = formData.get('post');
  const created = formData.get('created');
  const modified = formData.get('modified');
  const is_draft = formData.get('is_draft');
  const slug = formData.get('slug');
  const views = formData.get('views');

  try {
    const query = 'update posts set ? where id = ? ';
    const results = await db.query(query, [{author, title, image,post ,created ,modified ,is_draft,slug ,views}, id]);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}

export async function deleteArticulo(formData) {
  try {
    const id = formData.get('id');

    const query = 'delete from posts where id = ?';
    const results = await db.query(query, [id]);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}
