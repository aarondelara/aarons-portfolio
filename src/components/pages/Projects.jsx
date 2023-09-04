import { Link } from 'react-router-dom';

const Portfolio = () => {
    const projects = [
        {
            title: 'Money Man',
            description: 'A calendar app that lets you know when your bills are due.',
            githubLink: 'https://github.com/bs3102798/Moneyman'
        },
        {
            title: 'Gababara',
            description: 'An e-commerce website that sells a large variety of products.',
            githubLink: 'https://github.com/guapjorge/gababara'
        },

    ];

    return (
        <section>
            <div>
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h1>{project.title}</h1>
                        <h2>{project.description}</h2>
                        <Link to={project.githubLink} target="_blank">GitHub</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;