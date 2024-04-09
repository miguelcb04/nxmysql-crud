
function Form({ action, title, articulo, disabled }) {

    return (
        <form action={action} >
            <input type='hidden' name='id' value={articulo?.id} />
            <fieldset disabled={disabled}>
                <label htmlFor='author'>author</label>
                <input type='text' id='author' name='author'
                    placeholder='author'
                    defaultValue={articulo?.author} autoFocus ></input>
                <label htmlFor='title'>title</label>
                <input type='text' id='title' name='title'
                    placeholder='title'
                    defaultValue={articulo?.title} />
                <label htmlFor='image'>image</label>
                <input type='number' id='image' name='image' min='0' step={0.01}
                    placeholder='image'
                    defaultValue={articulo?.image} />
                <label htmlFor='post'>post</label>
                <input type='number' id='post' name='post' min='0' step={0.01}
                    placeholder='post'
                    defaultValue={articulo?.post} />
                <label htmlFor='created'>created</label>
                <input type='number' id='created' name='created' min='0' step={0.01}
                    placeholder='created'
                    defaultValue={articulo?.created} />
                <label htmlFor='modified'>modified</label>
                <input type='number' id='modified' name='modified' min='0' step={0.01}
                    placeholder='modified'
                    defaultValue={articulo?.modified} />
                <label htmlFor='is_draft'>is_draft</label>
                <input type='number' id='is_draft' name='is_draft' min='0' step={0.01}
                    placeholder='is_draft'
                    defaultValue={articulo?.is_draft} />
                    <label htmlFor='slug'>slug</label>
                <input type='number' id='slug' name='slug' min='0' step={0.01}
                    placeholder='slug'
                    defaultValue={articulo?.slug} />
                    <label htmlFor='views'>views</label>
                <input type='number' id='views' name='views' min='0' step={0.01}
                    placeholder='views'
                    defaultValue={articulo?.views} />
            </fieldset>
            <button type='submit'>{title}</button>
        </form>
    )
}

export default Form