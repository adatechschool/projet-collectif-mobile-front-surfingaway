import React from 'react';
import { ScrollView } from 'react-native';
import ArticleRender from '../components/ArticleRender';

const Article = () => {
    // Contenu HTML de votre article
    const htmlContent = `
    <!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Kelly Kapoor">
    <meta name="description" content="Cet article parle de la championne de surf Justine Dupont">
    <meta name="keywords" content="surf, championne, bio">
    <meta name="date" content="2023-09-20">
    <link rel="stylesheet" href="stylePosts.css">
    <title>Justine Dupont - Championne de Surf</title>
</head>

<body>
    <header>
        <h1>Justine Dupont</h1>
        <p>Championne de Surf</p>
    </header>
    <article class="surf-article">
        <h2>Le parcours exceptionnel de Justine Dupont</h2>
        <p>Justine Dupont est une surfeuse professionnelle originaire de Lacanau, en France. Elle est connue pour ses
            performances exceptionnelles dans le monde du surf, notamment dans les vagues géantes.</p>
        <p>Depuis son enfance, Justine était passionnée par l'océan et le surf. Elle a commencé à surfer dès l'âge de 8
            ans et n'a jamais cessé de repousser ses limites. Elle s'est rapidement fait un nom sur la scène
            internationale grâce à son style unique et sa détermination.</p>
        <p>Parmi ses nombreux accomplissements, on peut citer sa victoire à l'épreuve XXL des Big Wave Awards en 2020,
            où elle a surfé une vague de plus de 20 mètres à Nazaré, au Portugal. Cette performance extraordinaire lui a
            valu une reconnaissance mondiale et a confirmé sa place parmi les meilleures surfeuses du monde.</p>
        <p>En plus de sa carrière de surfeuse, Justine est également une ambassadrice de l'environnement et travaille
            activement pour la préservation des océans. Elle est un modèle inspirant pour de nombreux jeunes surfeurs et
            surfeuses qui rêvent de suivre ses traces.</p>
    </article>
    <footer>
        <p>&copy; 2023 SurfingAway.com</p>
    </footer>
</body>

</html>
  `;

    return (
        <ScrollView>
            <ArticleRender htmlContent={htmlContent} />
        </ScrollView>
    );
};

export default Article;
