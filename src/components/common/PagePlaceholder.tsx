type PagePlaceholderProps = {
    title: string;
    description: string;
};

function PagePlaceholder({title, description}: PagePlaceholderProps) {
    return (
        <main>
            <h1>{title}</h1>
            <p>{description}</p>
        </main>
    );
}

export default PagePlaceholder;