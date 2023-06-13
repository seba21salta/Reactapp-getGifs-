

export const GifItem = ({ key, title, url }) => {

    return (
        <div className="card" key={key}>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>

    )
};

