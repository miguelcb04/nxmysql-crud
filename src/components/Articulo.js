

function Articulo({ children, articulo }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{articulo.author}</strong></p>
            <p><strong>{articulo.title}</strong></p>
            <p><strong>{articulo.image}</strong></p>
            <p><strong>{articulo.post}</strong></p>
            <p><strong>{articulo.created}</strong></p>
            <p><strong>{articulo.modified}</strong></p>
            <p><strong>{articulo.is_draft}</strong></p>
            <p><strong>{articulo.slug}</strong></p>
            <p><strong>{articulo.views}</strong></p>
            {children}
        </div>
    )
}

export default Articulo